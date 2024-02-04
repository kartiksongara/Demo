document.querySelector("#btn").addEventListener("click",(e)=>{
    document.querySelector("#h1").innerHTML=document.querySelector("#tex").value
    document.querySelector("#h2").innerHTML=document.querySelector("#tex1").value

    e.preventDefault()
})