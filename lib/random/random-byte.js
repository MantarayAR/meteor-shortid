'use strict';

function randomByte() {
    return parseInt( Random.hexString(2), 16 ) & 0x30;
}

ShortId.randomByte = randomByte;
