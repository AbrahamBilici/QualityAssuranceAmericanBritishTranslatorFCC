const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');




class Translator {

    britishToAmerican(text) {

        // Perform time format replacements
        const textToArray = text.split(/(\b|\s+|[,.\?])/).filter(Boolean);


        for (let i = 0; i < textToArray.length; i++) {

            if (textToArray[i] === '.') {
                const pattern = /^([01]?\d|2[0-3])\.([0-5]\d)$/;
                const string = textToArray[i - 1] + textToArray[i] + textToArray[i + 1];
                if (pattern.test(string)) {
                    textToArray[i] = ':';
                    textToArray[i - 1] = `<span class="highlight">${textToArray[i - 1]}`;
                    textToArray[i + 1] = `${textToArray[i + 1]}</span>`;
                }
            }

            if (Object.values(americanToBritishTitles).includes(textToArray[i].toLowerCase())) {
                textToArray[i] = textToArray[i].replace(textToArray[i][0], textToArray[i][0].toUpperCase());
                textToArray[i] = `<span class="highlight">${textToArray[i]}.</span>`

            }
        }


        let textarea = textToArray.join('');




        // Perform spelling replacements from the americanToBritishSpelling dictionary
        for (const [key, value] of Object.entries(americanToBritishSpelling)) {
            const regex = new RegExp(`\\b${value}\\b`, 'gi');
            textarea = textarea.replace(regex, `<span class="highlight">${key}</span>`);
        }


        // Perform direct word replacements from the britishOnly dictionary
        for (const [key, value] of Object.entries(britishOnly)) {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            textarea = textarea.replace(regex, `<span class="highlight">${value}</span>`);
        }

        // firstletter replacement
        if (textarea === text) {
            const firstLetter = text.charAt(0);
            if (firstLetter !== firstLetter.toUpperCase()) {
                textarea = textarea.replace(textarea[0], textarea[0].toUpperCase())
            }
        }

        return textarea;


    }

    americanToBritish(text) {

        // Perform time format replacements
        const textToArray = text.split(/(\b|\s+|[,.\?])/).filter(Boolean);

        for (let i = 0; i < textToArray.length; i++) {

            if (textToArray[i] === ':') {
                const pattern = /^([01]?\d|2[0-3]):([0-5]\d)$/;
                const string = textToArray[i - 1] + textToArray[i] + textToArray[i + 1];
                if (pattern.test(string)) {
                    textToArray[i] = '.';
                    textToArray[i - 1] = `<span class="highlight">${textToArray[i - 1]}`;
                    textToArray[i + 1] = `${textToArray[i + 1]}</span>`;
                }
            }
            if ((textToArray[i].toLowerCase() + textToArray[i + 1]) in americanToBritishTitles && ((i + 1) < textToArray.length)) {
                textToArray[i + 1] = '';
                textToArray[i] = textToArray[i].replace(textToArray[i][0], textToArray[i][0].toUpperCase());
                textToArray[i] = `<span class="highlight">${textToArray[i]}</span>`;
            }
        }


        let textarea = textToArray.join('');

        // Perform direct word replacements from the americanOnly dictionary
        for (const [key, value] of Object.entries(americanOnly)) {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            textarea = textarea.replace(regex, `<span class="highlight">${value}</span>`);
        }

        // Perform spelling replacements from the americanToBritishSpelling dictionary
        for (const [key, value] of Object.entries(americanToBritishSpelling)) {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            textarea = textarea.replace(regex, `<span class="highlight">${value}</span>`);
        }

        // firstletter replacement
        if (textarea === text) {
            const firstLetter = text.charAt(0);
            if (firstLetter !== firstLetter.toUpperCase()) {
                textarea = textarea.replace(textarea[0], textarea[0].toUpperCase())
            }
        }


        return textarea;

    }
}

module.exports = Translator;