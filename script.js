function changeLang() {
  var buttonDisable = document.getElementById("changeLang").disabled = true;
  var buttonText = document.getElementById("changeLang");
  var ptBio = document.getElementById("bio");
  var notesTitle = document.getElementById("notes");

  buttonText.innerHTML = "Feito!";
  ptBio.innerHTML = "Vida & Interesses";
  notesTitle.innerHTML = "Notas";
  notesText();
  bioText();
  spotifyText();
  otherProj();
}

function bioText() {
  var ptParag = document.getElementById("bio-text");
  ptParag.innerHTML = "Quando criança e em minha adolescência, eu me via como um membro inadequado da sociedade por minha falta de capacidade de interagir com as pessoas ao meu redor, mas essa não é uma história triste. Com o passar do tempo, consegui me aceitar como sou, o que me levou a tentar o meu melhor para alcançar a solitude.<br><br>Ao longo dessa pequena jornada de autodescoberta, percebi que aprender coisas novas me dá um senso de razão na vida. Algumas das muitas coisas que aprendi ao longo dos anos foram produção musical, focando em gêneros musicais orientados ao design de som, fotografia, vários tipos de instrumentos, mas principalmente guitarra, animação 2D baseada em vetores e, mais recentemente, programação.";
}

function notesText() {
  var notesBody = document.getElementById("notesText");
  notesBody.innerHTML = "Este site é meu primeiro projeto independente de desenvolvimento! Créditos à Alura por ensinar com eficiência os fundamentos do desenvolvimento Front End em dez dias.";
}

function spotifyText() {
  var spotifyContent = document.getElementById("spotifyText");
  spotifyContent.innerHTML = '"Há algo tão fascinante sobre a aparente quietude da natureza. A música "motion in emotional hiatus" tenta incorporar esse sentimento através de mudanças sutis nas melodias, texturas e progressão constante, representando o crescimento contínuo da natureza e seu ciclo de vida."';
}

function otherProj() {
  var otherText = document.getElementById("otherTxt");
  otherText.innerHTML = "Imagens/Vídeos:";
}