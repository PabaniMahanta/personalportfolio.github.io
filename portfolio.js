console.log("javascript");
document.querySelector('.cross').style.display='none';
document.querySelector('.hambar').addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    if(document.querySelector('.slidebar').classList.contains('slidebarGo')){
        document.querySelector('.bar').style.display= 'inline'
        document.querySelector('.cross').style.display= 'none'
    }
    else{ 
        document.querySelector('.bar').style.display= 'none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display= 'inline' 
        }, 100)
        
    }
   
})