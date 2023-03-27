const tribune_h = document.querySelector('.tribune-haut')
const tribune_g = document.querySelector('.tribune-g')
const tribune_d = document.querySelector('.tribune-d')
const tribune_b = document.querySelector('.tribune-bas')
const nbrplaceH = document.querySelector(".nbrplace")

for (let i = 0; i < 200; i++) {
    const div  = document.createElement('div')
    div.classList.add("p-haut")
    div.setAttribute('id','ph-occup')
    div.innerText = `${i+1}`
    tribune_h.appendChild(div)
}

//reservation dans le tribune haut
let p = document.querySelectorAll(".p-haut")
function changePlaceHaut(){
    
    let ocp = document.querySelectorAll(".p-haut.active")
    const plIndex = [...ocp].map((oc)=>{
        return [...p].indexOf(oc) 
    })
    
    localStorage.setItem('ocp',JSON.stringify(plIndex));
}


p.forEach(b=>b.addEventListener('click',()=>{
     b.classList.add("active")

     changePlaceHaut()
}))  

function resvationTribuneHaut(){
    const ocp = JSON.parse(localStorage.getItem('ocp'))
    if(ocp !== null && ocp.length > 0) {
        p.forEach((oc,index)=>{
            if(ocp.indexOf(index) > -1){
                oc.classList.add('active')
            }
        })
    }
}

resvationTribuneHaut();
 nbrplaceH.innerHTML = `nbr-place: ` + p.length


for (let i = 0; i < 200; i++) {
    const div  = document.createElement('div')
    div.classList.add("p-bas")
    div.innerText = `${i+1}`
    tribune_b.appendChild(div)
}

//reservation dans le tribune du bas
let b = document.querySelectorAll('.p-bas')
function changePlaceBas(){
    let ocb = document.querySelectorAll('.p-bas.active')
    const placeBas = [...ocb].map((ob)=>{
        return [...b].indexOf(ob)
    })

    localStorage.setItem('pbas',JSON.stringify(placeBas));
}

b.forEach(e=>e.addEventListener('click',()=>{
   e.classList.add('active');
    changePlaceBas();
}))

function reservationBas(){
    const pbas = JSON.parse(localStorage.getItem('pbas'))
    if(pbas !== null && pbas.length > 0){
        b.forEach((ob,index)=>{
            if(pbas.indexOf(index) > -1){
                ob.classList.add('active')
            }
        })
    }
}
reservationBas();

for (let j = 0; j < 66; j++) {
    const div  = document.createElement('div')
    div.classList.add("p-gauche")
    div.innerText = `${j+1}`
    tribune_g.appendChild(div)
    
}
//reservation dans le tribune gauche
let g = document.querySelectorAll('.p-gauche')
function changePlaceGauche(){
    let pg = document.querySelectorAll('.p-gauche.active')
    const ocg = [...pg].map((index)=>{
        return [...g].indexOf(index);
    })

    localStorage.setItem('pgauche',JSON.stringify(ocg));
}

g.forEach(f=>f.addEventListener('click',()=>{
    f.classList.add('active')
    changePlaceGauche()
}))

function reservationGauche(){
    const pgauche = JSON.parse(localStorage.getItem('pgauche'))
    if( pgauche !== null && pgauche.length > 0){
       g.forEach((og,i)=>{
        if(pgauche.indexOf(i) > -1){
            og.classList.add('active')
        }
       })
    }
}
reservationGauche();

for (let i = 0; i < 66; i++) {
    const element = document.createElement("div");
    element.classList.add("p-droit")
    element.innerText= `${66-i}`
    tribune_d.appendChild(element)
}

// reservation dans le tribune droit
let d = document.querySelectorAll('.p-droit')
function changePlaceDroit(){
    let pd = document.querySelectorAll('.p-droit.active')
    const ocd = [...pd].map((index)=>{
        return [...d].indexOf(index);
    })

    localStorage.setItem('pdroit',JSON.stringify(ocd))
}

d.forEach(e=>e.addEventListener('click',()=>{
    e.classList.add('active')
    changePlaceDroit();
}))

function reservationDroit(){
    const pdroit = JSON.parse(localStorage.getItem('pdroit'))
    if(pdroit !== null && pdroit.length > 0){
        d.forEach((pd,i)=>{
            if(pdroit.indexOf(i)> -1){
                pd.classList.add('active')
            }
        })
    }
}

reservationDroit();




