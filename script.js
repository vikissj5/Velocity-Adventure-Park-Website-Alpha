const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const closed=document.getElementById('close')
const button=document.getElementById('button')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
        // console.log("hello");

    })


}
if(closed){
    closed.addEventListener('click',()=>{
        nav.classList.remove('active')
        // console.log("hello");

    })

}
