let character = 'E';

if (character.length === 1) {
    let val = character.charCodeAt(0);
    if ((val >= 65)&&(val<=90)) {
        if (
            val === 'A' .charCodeAt(0) ||
            val === 'E' .charCodeAt(0) ||
            val === 'I' .charCodeAt(0) ||
            val === 'O' .charCodeAt(0) ||
            val === 'U' .charCodeAt(0) 
        ) {
            console.log(`it is a vowel character :${character}`);
            
        } else {
            console.log(`it is a capital character :${character}`);
            
        }
    } else if ((val >= 97)&&(val<=122)){
        if (
            val === 'a' .charCodeAt(0) ||
            val === 'e' .charCodeAt(0) ||
            val === 'i' .charCodeAt(0) ||
            val === 'o' .charCodeAt(0) ||
            val === 'u' .charCodeAt(0) 
        ) {
            console.log(`it is a vowel character :${character}`);

        } else {
            console.log(`it is a small latter character :${character}`);

        }
    }
} else {
    console.log('it is a large character');
    
}