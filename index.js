function shout(HELLO) {
    return HELLO.toUpperCase();
  }
function whisper(hello) {
    return hello.toLowerCase();
}
function logShout(hello) {
    console.log('Hello'.toUpperCase());
}
function logWhisper(HELLO) {
    console.log('Hello'.toLowerCase());
}
function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) return "I can't hear you!";
    else if (string === "I love you, Grandma.") return "I love you, too.";
    else if (string === string.toUpperCase()) return "YES INDEED!";
}



