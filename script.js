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
        winner();
    })    
});
reset.addEventListener("click",()=>{
    Array.from(tac).forEach(e=>{
        e.innerHTML=""
        p[0].innerHTML="Turn for X"
    })
})

const winner=()=>{
    let a=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    a.forEach(e => {
       if(tac[e[0]].innerHTML === tac[e[1]].innerHTML && tac[e[2]].innerHTML === tac[e[1]].innerHTML && tac[e[0]].innerHTML !== ""){
        p[0].innerHTML = `${turn === "X"?"0":"X"} WON`
       }
    });
}
