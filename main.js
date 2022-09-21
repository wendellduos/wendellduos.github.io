var ptBio = document.getElementById("bio");
ptBio.innerHTML = "Life & Interests";

var notesTitle = document.getElementById("notes");
notesTitle.innerHTML = "Notes";

var ptParag = document.getElementById("bio-text")
ptParag.innerHTML = "As a child and a teenager, I saw myself as an unfitting member of society for my lack of capacity to interact with people around me, but this is no sob story. As time went by I was able to accept myself for who I am, which led me to try my best to achieve solitude.<br><br>Throughout this little journey of self-discovery, I've noticed how learning things gives me a sense of reason in life. Some of the many things I've learned over the years were music production, focusing on sound-design-oriented music genres, photography, all sorts of instruments but mainly the electric guitar, vector-based 2d animation, and more recently, programming.";

var notesBody = document.getElementById("notesText");
notesBody.innerHTML = "This website is my first independent dev project! Credits to Alura for efficiently teaching the basics of Front End development within ten days.";

var otherText = document.getElementById("otherTxt");
otherText.innerHTML = "Images/Videos:";

function changeLang() {
  var buttonDisable = document.getElementById("changeLang").disabled = true;
  var buttonText = document.getElementById("changeLang");
  buttonText.innerHTML = "Feito!";
  ptBio.innerHTML = "Vida & Interesses";
  notesTitle.innerHTML = "Notas";
  notesText();
  bioText();
  spotifyText();
  otherProj();
}

function bioText() {
  ptParag.innerHTML = "Quando criança e em minha adolescência, eu me via como um membro inadequado da sociedade por minha falta de capacidade de interagir com as pessoas ao meu redor, mas essa não é uma história triste. Com o passar do tempo, consegui me aceitar como sou, o que me levou a tentar o meu melhor para alcançar a solitude.<br><br>Ao longo dessa pequena jornada de autodescoberta, percebi que aprender coisas novas me dá um senso de razão na vida. Algumas das muitas coisas que aprendi ao longo dos anos foram produção musical, focando em gêneros musicais orientados ao design de som, fotografia, vários tipos de instrumentos, mas principalmente guitarra, animação 2D baseada em vetores e, mais recentemente, programação.";
}

function notesText() {
  notesBody.innerHTML = "Este site é meu primeiro projeto independente de desenvolvimento! Créditos à Alura por ensinar com eficiência os fundamentos do desenvolvimento Front End em dez dias.";
}

function spotifyText() {
  var spotifyContent = document.getElementById("spotifyText");
  spotifyContent.innerHTML = '"Há algo tão fascinante sobre a aparente quietude da natureza. A música "motion in emotional hiatus" tenta incorporar esse sentimento através de mudanças sutis nas melodias, texturas e progressão constante, representando o crescimento contínuo da natureza e seu ciclo de vida."';
}

function otherProj() {
  otherText.innerHTML = "Imagens/Vídeos:";
}