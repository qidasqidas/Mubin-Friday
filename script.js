function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    speech.voice = allVoices[0];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out")

    
}  
// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    recognition.continious=true;
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    transcript = transcript.toLowerCase();
    console.log(transcript)
if(transcript.includes("big")){
    window.open("index.html")
    readOut("Opening big window")
}
if (transcript.includes("hi") ||transcript.includes("hello")|| transcript.includes("Hi edith") || transcript.includes("Hello edith")) {
    readOut("Hello Sir");
}
if (transcript.includes("open youtube")) {
    readOut("Opening youtube sir");
    window.open("https://www.youtube.com/");
}
if (transcript.includes("open google")) {
    readOut("Opening google sir");
    window.open("https://www.google.com/");
}
if (transcript.includes("open firebase")) {
    readOut("Opening firebase sir");
    window.open("https://console.firebase.google.com/?pli=1");
}
if (transcript.includes("open github ")) {
    readOut("Opening github sir");
    window.open("https://github.com/");
}
if (transcript.includes("open github profile")) {
    readOut("Opening github prfolie sir");
    window.open("");
}
if (transcript.includes("create a repository")) {
    readOut("Creating repository in github sir");
    window.open("https://github.com/new");
}
if(transcript.includes("search for")){

    let input = transcript.split("");
    input.splice(0,11);
    input.pop();
    let  sinput = input.join("").split(" ").join(" ");
    readOut("here's the result for " + sinput + " sir");
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open("https://www.google.com/search?q="+input)
}
if(transcript.includes("play")){
    let input = transcript.split("");
    input.splice(0,4);
    input.pop();    
   let  sinput = input.join("").split(" ").join(" ");
   readOut("here's the result for " + sinput + " sir");
   input = input.join("").split(" ").join("+");

    console.log(input);
    window.open("https://youtube.com/results?search_query="+input)
}
if(transcript.includes("internet")){
    readOut("Your Internet status is online sir")
}
if(transcript.includes("time")){

    a = new Date();
    // hours s
    let  ap = "AM/PM";
    let tfh = a.getHours();
    let RealHour = tfh % 12;
    if(tfh > 12 || tfh == 12){
    ap = "PM";
    }else{
    ap = "AM";
    }
    
    //hours e
    // min s
    let min = a.getMinutes();
    //min e
    //sec s
    let sec = a.getSeconds();
    //sec e
    let time = " "+RealHour + "  " + min + "  " + ap;
readOut(time);  
}
if(transcript.includes("battery")){

        navigator.getBattery().then(function(battery) {
    
            var level = battery.level;
    var kl = level * 100;
      
          readOut(kl + "%"+ " sir" )
        });
}
if(transcript.includes("your name")){
readOut("My name is Friday sir");
}
if(transcript.includes("my name")){
readOut("Your name is Mubin hussain sheikh  sir")
}

if(transcript.includes("date")){
    let monthl = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    b = new Date();
    let month= monthl[b.getMonth()]
    let dayl = day[b.getDay()];
    let date = b.getDate();
    let year = b.getFullYear();
readOut("The date is "+date+" "+month+" "+year+" sir"); 
console.log("The date is "+date+" "+month+" "+year+" sir")
}
if(transcript.includes("commands")){
    readOut("Command's window is opening");
    window.open("commands.html")
}
if(transcript.includes("how are you")){
    readOut("I am fine sir what about you")
}
if(transcript.includes("i am fine")){
    readOut("Excellent! sir")
}
if(transcript.includes("bye")){
readOut("bye sir")
}
};
   








function small(){
    window.open("commands.html","_blank","width:50px;,height:50px;")
}