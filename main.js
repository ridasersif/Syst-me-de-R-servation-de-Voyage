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

btnAdultBlus.onclick=function(){
    x=x+500;
    i++;
    document.getElementById('PrixAdultBlus').innerHTML=`
                          Le nombre de places: <br>
                          Prix= ${x} DH
                        `
    document.getElementById('NPA').innerHTML=`
           ${i}
    `
    let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
   
   
}
btnAdultMoins.onclick=function(){
    x=x-500;
    i--;
    document.getElementById('PrixAdultBlus').innerHTML=`
    Le nombre de places: <br>
    Prix= ${x} DH
  `
document.getElementById('NPA').innerHTML=`
           ${i}
`
 let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
   
}

btnEnfantBlus.onclick=function(){
    y=y+100;
    j++;
    document.getElementById('PrixEnfantBlus').innerHTML=`
    Le nombre de places: <br>
    Prix= ${y} DH
  `
document.getElementById('NPE').innerHTML=`
           ${j}
`
 let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
    
   
}
btnEnfantMoins.onclick=function(){
    y=y-100;
    j--;
    document.getElementById('PrixEnfantBlus').innerHTML=`
    Le nombre de places: <br>
    Prix= ${y} DH
  `
document.getElementById('NPE').innerHTML=`
           ${j}
`
 let total=Total(x,y)
    PrixTotal.innerHTML=`Prix total : ${total} DH`
}
}
step5.onclick=function(){
    let ticket=document.getElementById('ticket')
    console.log(ticket)
    let total=Total(x,y)
   ticket.innerHTML=`
   
                  <p>Nom et prénom : <span>${nom.value}</span></p>
                  <p>E-mail : <span>${email.value}</span></p>
                  <p>Date de réservation : <span>${date.value}</span></p>
                  <p>Prix : <span> ${total} DH</span></p>
                  `  
}
//******************************************************** */



