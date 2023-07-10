
function changedata(parameter){
    if(parameter===0){
       
        document.getElementById('s1').classList.toggle('active');   }
    else if(parameter===1){
        
        document.getElementById('s2').classList.toggle('active');
    }
    else{
        
        document.getElementById('coll').classList.toggle('active');
    }
    
}