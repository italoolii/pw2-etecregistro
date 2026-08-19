const p0 = window.document.getElementsByTagName('p')[0]

p0.style.color = 'red';
p0.innerText = "Mudei o texto =)";

const p1 = window.document.getElementsByTagName('p')[1]

p1.style.color = 'black';

const corpoSite = window.document.body;
corpoSite.style.backgroundColor = '#2f2f2f';

document.write(`<br> no 2° paragrafao do site esta escrito assim: ${p1.innerText}`);

const sID = window.document.getElementById('paragrafoID');
sID.style.backgroundColor = 'purple';
const sNAME = window.document.getElementsByName('paragrafoNAME')[0];
const sCLASS = window.document.getElementsByClassName('paragrafoCLASS')[0];
const sQUERY = window.document.querySelector('#query');
const textQUERY = window.document.querySelector('#query');
textQUERY.style.color = 'black';
sNAME.style.backgroundColor = 'darkblue';
sCLASS.style.backgroundColor = 'red';
sQUERY.style.backgroundColor = 'yellow';

sNAME.innerText = "SELECIONANDO ELEMENTOS PELO NAME";
sID.innerText = "SELECIONANDO ELEMENTOS PELO ID";
sCLASS.innerText = "SELECIONANDO ELEMENTOS PELA CLASSE";
sQUERY.innerText = "SELECIONANDO ELEMENTOS PELO SELETOR";

