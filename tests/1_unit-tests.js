const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', () => {
        const textarea = 'Mangoes are my favorite fruit.';
        const translated = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        assert.equal(translator.americanToBritish(textarea), translated);

    });

    test('Translate I ate yogurt for breakfast. to British English', () => {
        const textarea = "I ate yogurt for breakfast.";
        const translated = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test("Translate We had a party at my friend's condo. to British English", () => {
        const textarea = "We had a party at my friend's condo.";
        const translated = `We had a party at my friend's <span class="highlight">flat</span>.`;
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        const textarea = "Can you toss this in the trashcan for me?";
        const translated = 'Can you toss this in the <span class="highlight">bin</span> for me?';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate The parking lot was full. to British English', () => {
        const textarea = "The parking lot was full.";
        const translated = 'The <span class="highlight">car park</span> was full.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        const textarea = "Like a high tech Rube Goldberg machine.";
        const translated = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate To play hooky means to skip class or work. to British English', () => {
        const textarea = "To play hooky means to skip class or work.";
        const translated = 'To <span class="highlight">bunk off</span> means to skip class or work.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        const textarea = "No Mr. Bond, I expect you to die.";
        const translated = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate Dr. Grosh will see you now. to British English', () => {
        const textarea = "Dr. Grosh will see you now.";
        const translated = '<span class="highlight">Dr</span> Grosh will see you now.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate Lunch is at 12:15 today. to British English', () => {
        const textarea = "Lunch is at 12:15 today.";
        const translated = 'Lunch is at <span class="highlight">12.15</span> today.';
        assert.equal(translator.americanToBritish(textarea), translated);

    })
    test('Translate We watched the footie match for a while. to American English', () => {
        const textarea = "We watched the footie match for a while.";
        const translated = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        const textarea = "Paracetamol takes up to an hour to work.";
        const translated = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate First, caramelise the onions. to American English', () => {
        const textarea = "First, caramelise the onions.";
        const translated = 'First, <span class="highlight">caramelize</span> the onions.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        const textarea = "I spent the bank holiday at the funfair.";
        const translated = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate I had a bicky then went to the chippy. to American English', () => {
        const textarea = "I had a bicky then went to the chippy.";
        const translated = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        const textarea = "I've just got bits and bobs in my bum bag.";
        const translated = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        const textarea = "The car boot sale at Boxted Airfield was called off.";
        const translated = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate Have you met Mrs Kalyani? to American English', () => {
        const textarea = "Have you met Mrs Kalyani?";
        const translated = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test("Translate Prof Joyner of King's College, London. to American English", () => {
        const textarea = "Prof Joyner of King's College, London.";
        const translated = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
        assert.equal(translator.britishToAmerican(textarea), translated);

    })
    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        const textarea = "Tea time is usually around 4 or 4.30.";
        const translated = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        assert.equal(translator.britishToAmerican(textarea), translated);

    })

    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        const textarea = 'Mangoes are my favorite fruit.';
        const translated = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        assert.equal(translator.americanToBritish(textarea), translated);

    });

    test('Highlight translation in I ate yogurt for breakfast.', () => {
        const textarea = 'I ate yogurt for breakfast.';
        const translated = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
        assert.equal(translator.americanToBritish(textarea), translated);
    })

    test('Highlight translation in We watched the footie match for a while.', () => {
        const textarea = 'We watched the footie match for a while.';
        const translated = 'We watched the <span class="highlight">soccer</span> match for a while.'
        assert.equal(translator.britishToAmerican(textarea), translated);
    })

    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        const textarea = 'Paracetamol takes up to an hour to work.';
        const translated = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
        assert.equal(translator.britishToAmerican(textarea), translated);
    })


});
