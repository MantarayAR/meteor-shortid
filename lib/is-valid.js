'use strict';

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = ShortId.alphabet.characters();
    var invalidCharacters = id.split('').map(function(char){
        if (characters.indexOf(char) === -1) {
            return char;
        }
    }).join('').split('').join('');

    return invalidCharacters.length === 0;
}

this.ShortId.isShortId = isShortId;
this.ShortId.isValid = isShortId;
