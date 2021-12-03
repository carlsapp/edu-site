const dolchPrePrimerWords = [

];
const VueCompWords = {
    template: `
      <div style="height: 100%">
        <i class="fa fa-arrow-left back-arrow" @click="router.go(-1)"></i>
        <centered>
            <text-cycle :values="words" v-on:value-changed="newWord" interval="10000"></text-cycle>
        </centered>
      </div>
    `,
    data: function () {
        return {
            words: [
                // Pre-Primer
                'a',
                'and',
                'away',
                'big',
                'blue',
                'can',
                'come',
                'down',
                'find',
                'for',
                'funny',
                'go',
                'help',
                'here',
                'I',
                'in',
                'is',
                'it',
                'jump',
                'little',
                'look',
                'make',
                'me',
                'my',
                'not',
                'one',
                'play',
                'red',
                'run',
                'said',
                'see',
                'the',
                'three',
                'to',
                'two',
                'up',
                'we',
                'where',
                'yellow',
                'you',
                // Primer
                'all',
                'am',
                'are',
                'at',
                'ate',
                'be',
                'black',
                'brown',
                'but',
                'came',
                'did',
                'do',
                'eat',
                'four',
                'get',
                'good',
                'have',
                'he',
                'into',
                'like',
                'must',
                'new',
                'no',
                'now',
                'on',
                'our',
                'out',
                'please',
                'pretty',
                'ran',
                'ride',
                'saw',
                'say',
                'she',
                'so',
                'soon',
                'that',
                'there',
                'they',
                'this',
                'too',
                'under',
                'want',
                'was',
                'well',
                'went',
                'what',
                'white',
                'who',
                'will',
                'with',
                'yes',
                // First Grade
                'after',
                'again',
                'an',
                'any',
                'as',
                'ask',
                'by',
                'could',
                'every',
                'fly',
                'from',
                'give',
                'going',
                'had',
                'has',
                'her',
                'him',
                'his',
                'how',
                'just',
                'know',
                'let',
                'live',
                'may',
                'of',
                'old',
                'once',
                'open',
                'over',
                'put',
                'round',
                'some',
                'stop',
                'take',
                'thank',
                'them',
                'then',
                'think',
                'walk',
                'were',
                'when',
                // Second Grade
                'always',
                'around',
                'because',
                'been',
                'before',
                'best',
                'both',
                'buy',
                'call',
                'cold',
                'does',
                "don't",
                'fast',
                'first',
                'five',
                'found',
                'gave',
                'goes',
                'green',
                'its',
                'made',
                'many',
                'off',
                'or',
                'pull',
                'read',
                'right',
                'sing',
                'sit',
                'sleep',
                'tell',
                'their',
                'these',
                'those',
                'upon',
                'us',
                'use',
                'very',
                'wash',
                'which',
                'why',
                'wish',
                'work',
                'would',
                'write',
                'your',
                // Third Grade
                'about',
                'better',
                'bring',
                'carry',
                'clean',
                'cut',
                'done',
                'draw',
                'drink',
                'eight',
                'fall',
                'far',
                'full',
                'got',
                'grow',
                'hold',
                'hot',
                'hurt',
                'if',
                'keep',
                'kind',
                'laugh',
                'light',
                'long',
                'much',
                'myself',
                'never',
                'only',
                'own',
                'pick',
                'seven',
                'shall',
                'show',
                'six',
                'small',
                'start',
                'ten',
                'today',
                'together',
                'try',
                'warm',
                // Nouns
                'apple',
                'baby',
                'back',
                'ball',
                'bear',
                'bed',
                'bell',
                'bird',
                'birthday',
                'boat',
                'box',
                'boy',
                'bread',
                'brother',
                'cake',
                'car',
                'cat',
                'chair',
                'chicken',
                'children',
                'Christmas',
                'coat',
                'corn',
                'cow',
                'day',
                'dog',
                'doll',
                'door',
                'duck',
                'egg',
                'eye',
                'farm',
                'farmer',
                'father',
                'feet',
                'fire',
                'fish',
                'floor',
                'flower',
                'game',
                'garden',
                'girl',
                'good-bye',
                'grass',
                'ground',
                'hand',
                'head',
                'hill',
                'home',
                'horse',
                'house',
                'kitty',
                'leg',
                'letter',
                'man',
                'men',
                'milk',
                'money',
                'morning',
                'mother',
                'name',
                'nest',
                'night',
                'paper',
                'party',
                'picture',
                'pig',
                'rabbit',
                'rain',
                'ring',
                'robin',
                'Santa',
                'Claus',
                'school',
                'seed',
                'sheep',
                'shoe',
                'sister',
                'snow',
                'song',
                'squirrel',
                'stick',
                'street',
                'sun',
                'table',
                'thing',
                'time',
                'top',
                'toy',
                'tree',
                'watch',
                'water',
                'way',
                'wind',
                'window',
                'wood',
            ]
        }
    },
    methods: {
        newWord: function newWords(word) {
            console.log(`I just got a new word: ${word}`);
            const newWord = new Audio(`audio-files/new-word.mp3`);
            newWord.play();
            setTimeout(function playWord() {
                const aud = new Audio(`audio-files/${word}.mp3`);
                aud.play();
                setTimeout(function playWordAgain() {
                    const aud = new Audio(`audio-files/${word}.mp3`);
                    aud.play();
                }, 3000);
            }, 5000)
        }
    }
};

Vue.component('words', VueCompWords);
