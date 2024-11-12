//Tout d'abord, il faut qu'on fasse une analyse approfondie de cela.
let step1=document.getElementById('step-1');
let step2=document.getElementById('step-2');
let step3=document.getElementById('step-3');
let step4=document.getElementById('step-4');
let step5=document.getElementById('step-5');
//*******************************************/
let tab=document.getElementsByClassName('tab')
//******************************************/
let nom=document.getElementById('nom');
let email=document.getElementById('email');
let date=document.getElementById('date');
/*******************************************/
let btnAdultBlus=document.getElementById('btnAdultBlus')
let btnAdultMoins=document.getElementById('btnAdultMoins')
let btnEnfantBlus=document.getElementById('btnEnfantBlus')
let btnEnfantMoins=document.getElementById('btnEnfantMoins')
let next4=document.getElementById('next4')

let currentPosition = 0;
/****************************************/
function next()
{
    tab[0].style.zIndex='0'
    tab[1].style.zIndex='0'
    tab[2].style.zIndex='0'
    tab[3].style.zIndex='0'
    tab[4].style.zIndex='0' 
    currentPosition++;
    let currentStep = document.getElementById('step-'+(currentPosition+1))
    currentStep.click();
    tab[currentPosition].style.zIndex='100'
    console.log()
}
function back(){
    tab[0].style.zIndex='0'
    tab[1].style.zIndex='0'
    tab[2].style.zIndex='0'
    tab[3].style.zIndex='0'
    tab[4].style.zIndex='0' 
    currentPosition--;
    let currentStep = document.getElementById('step-'+(currentPosition+1))
    currentStep.click();
    tab[currentPosition].style.zIndex='100'
}
tab[0].style.zIndex='100'
/******************************************* */


 
  const nextButton=document.getElementById('nextStep1');
   nextButton.style.backgroundColor = "#ccc"
  function checkInputs(){
    if(nom.value && email.value){
      nextButton.disabled = false;
       nextButton.style.backgroundColor = "#023855"
    }else{
      nextButton.disabled = true;
      nextButton.style.backgroundColor = "#ccc";
    }
  }
  nom.addEventListener("input",checkInputs)
  email.addEventListener("input",checkInputs)




/****************************************************************************** */
step2.onclick=function(){
const depart = document.getElementById("depart");
const arriver = document.getElementById("arriver");
const  nextButton =document.getElementById('nextStep2')
nextButton.style.backgroundColor = "#ccc"
function checkInputs() {
    if (depart.value && arriver.value && date.value) {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "#023855"
       
    } else {
        nextButton.disabled = true; 
        nextButton.style.backgroundColor = "#ccc"  
    }
}
depart.addEventListener("select", checkInputs);
arriver.addEventListener("select", checkInputs);
date.addEventListener("input", checkInputs);
}
/********************************************************************************************/
var deparTime;
var arrivTime;
step3.onclick=function(){
  const resultDivs = document.querySelectorAll(".ResultatDeDecherche");
  const nextButton = document.getElementById("nextStep3");
  nextButton.style.backgroundColor = "#ccc"; 
  nextButton.disabled = true;
  resultDivs.forEach(div => {
    div.addEventListener("click", function() {
      nextButton.style.backgroundColor = "#023855"
      nextButton.disabled = false;
      div.style.backgroundColor = "#70afd0";
      div.style.color = "#fff";
      resultDivs.forEach(Div => {
        if (Div !== div) {
          Div.style.backgroundColor = ""; 
          Div.style.color = ""; 

        }
      });
       deparTime = div.querySelector("#deparTime").innerText;
       arrivTime = div.querySelector("#arrivTime").innerText;
      console.log(deparTime,arrivTime)
    });
  });
}
function Total(a,b){
    return a+b;
}
let x=0;
let y=0;
let i=0;
let j=0;
let total=Total(x,y)

step4.onclick=function(){  
//*********************************************** */
let PrixTotal=document.getElementById('PrixTotal');
const  nextButton =document.getElementById('nextStep4');
nextButton.style.backgroundColor = "#ccc"
btnAdultBlus.onclick=function(){
  if((i+j)<16){
    x=x+500;
    i++;
    checkNextButton()
    document.getElementById('PrixAdultBlus').innerHTML=`
                          Le nombre de places: <br>
                          Prix= ${x} DH
                        `
    document.getElementById('NPA').innerHTML=`
           ${i}
    `
  }
    let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
}
btnAdultMoins.onclick=function(){
  if(i>0){
    x=x-500;
    i--;
    checkNextButton()
    document.getElementById('PrixAdultBlus').innerHTML=`
    Le nombre de places: <br>
    Prix= ${x} DH
  `
document.getElementById('NPA').innerHTML=`
           ${i}
`
  }
 let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
}
btnEnfantBlus.onclick=function(){
  if((i+j)<16){
    y=y+100;
    j++;
    checkNextButton()
    document.getElementById('PrixEnfantBlus').innerHTML=`
    Le nombre de places: <br>
    Prix= ${y} DH
  `
document.getElementById('NPE').innerHTML=`
           ${j}
`
  }
 let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
}
btnEnfantMoins.onclick=function(){
  if(j>0){
    y=y-100;
    j--;
    checkNextButton()
    document.getElementById('PrixEnfantBlus').innerHTML=`
    Le nombre de places: <br>
    Prix= ${y} DH
  `
document.getElementById('NPE').innerHTML=`
           ${j}
`
  }
 let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`  
}
function checkNextButton() {
  if (i > 0 || j > 0) {
    nextButton.disabled = false; 
    nextButton.style.backgroundColor = "#023855";  
  } else {
    nextButton.disabled = true; 
    nextButton.style.backgroundColor = "#ccc"; 
  }
}
}
let c=2;
let buttonPrix=document.getElementById('buttonPrix');
let cover=document.getElementById('cover');
function inputCheckbox(){
  if(c<=(j+i)){
  cover.style.display='none';
  cover.style.zIndex='0';
  buttonPrix.style.zIndex='100'

  }else{
    cover.style.display='block' 
    cover.style.zIndex='100';
    buttonPrix.style.zIndex='0' 
  }
  c++;
 
}
step5.onclick=function(){
    let ticket=document.getElementById('ticket')
   
    var ij=0;
    if(i!=0){
    for(let m=0;m<i;m++){
      ij++;
      const depart=document.getElementById('depart')
      const arriver=document.getElementById('arriver')
        ticket.innerHTML+=`
        <div class="card content">
        <div  class="user-info">
        <p>(${ij})</p>
        <p>Nom et prénom : <span>${nom.value}</span></p>
        <p>E-mail : <span>${email.value}</span></p>
          <hr>
        <p><span>${depart.value} :</span><span> ${deparTime} </span></p>
        <i class="fa-solid fa-arrow-down-long"></i>
        <p><span>${arriver.value} :</span><span> ${arrivTime}</span></p>
        <p>Date de réservation : <span>${date.value}</span></p>
        <p>Prix : <span> 500 DH</span></p>
        </div>
        <div class="qr-code">
          <p>Code QR :</p>
          <img src="qr-code.svg" alt="code QR"/>
        </div>
      </div>`
        
    }  
    }
    if(j!=0){
      for(let m=0;m<j;m++){
        ij++;
        const depart=document.getElementById('depart')
        const arriver=document.getElementById('arriver')
          ticket.innerHTML+=`
          <div class="card content">
          <div  class="user-info">
          <p>(${ij})</p>
          <p>Nom et prénom : <span>${nom.value}</span></p>
          <p>E-mail : <span>${email.value}</span></p>
            <hr>
          <p><span>${depart.value} :</span><span> 06:30 </span></p>
          <i class="fa-solid fa-arrow-down-long"></i>
          <p><span>${arriver.value} :</span><span> 08:45</span></p>
          <p>Date de réservation : <span>${date.value}</span></p>
          <p>Prix : <span> 100 DH</span></p>
          </div>
          <div class="qr-code">
            <p>Code QR :</p>
            <img src="qr-code.svg" alt="code QR"/>
          </div>
        </div>`
          
      }  
    }
              
}

function generatePDF() {
  for(let q=0;q<5;q++){
  const ticketElement = document.getElementById('ticket');
  html2canvas(ticketElement, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
    const imgWidth = 190;  
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let position = 0;
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    pdf.save('tickets.pdf'); 
  });
}
}















//******************************************************** */