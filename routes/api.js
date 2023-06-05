'use strict';

const Translator = require('../components/translator.js');




module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      let translatedText;

      if (text === '') {
        return res.json({ error: 'No text to translate' });
      }


      if (!text || !locale) {
        return res.json({ error: 'Required field(s) missing' });
      }



      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }





      if (locale === 'american-to-british') {
        translatedText = translator.americanToBritish(text);


      }

      if (locale === 'british-to-american') {
        translatedText = translator.britishToAmerican(text);

      }

      if (translatedText === text) {
        translatedText = "Everything looks good to me!";
      }

      return res.json({ text: text, translation: translatedText });


    });
};
