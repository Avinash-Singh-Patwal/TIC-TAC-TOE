let click=document.getElementsByClassName('tic')
let turn = "X";
let p=document.getElementsByClassName('turn')
let tac=document.getElementsByClassName('tac')
const reset=document.getElementById('btn')
// const main=document.getElementsByClassName('container')
Array.from(click).forEach(e => {
    let span=e.querySelector('.tac')
    e.addEventListener('click',()=>{
        if(turn==="X")
        {
           span.innerHTML=turn
            turn="0"
            p[0].innerHTML="Turn for " + turn

        }
        else{
            span.innerHTML=turn
            turn="X"
            p[0].innerHTML="Turn for "+turn
        }
    })    
});
reset.addEventListener("click",()=>{
    Array.from(tac).forEach(e=>{
        e.innerHTML=""
        p[0].innerHTML="Turn for X"
    })
})

