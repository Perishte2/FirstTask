function reverseWord(phrase) {
   if(phrase.length >= 5) {
    phrase.match(/(\w+)/g);
    return(alert(phrase.split().reverse().join()));
   }

}

reverseWord("hello world ok");

