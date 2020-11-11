window.onload=()=>{
    let searchbtn=document.getElementById('search')
    let request= new XMLHttpRequest()
    let result= document.getElementById('result').value
    let h3=document.createElement('H3')
    let h4=document.createElement('H4')
    let p=document.createElement('p')
    
    request.open('GET','http://localhost:8080/superheroes.php')
        
    searchbtn.onclick=function(){
        let dom =request.responseXML.getElementsByTagName("li")
        let text=document.getElementById("searchbox")

        for(let i=0;i<dom.length;i++){
            /*RESULT WHEN NOTHING IS ENTERED IN THE SEARCH FIELD AND SEARCH IS CLICKED*/
            if (text==""){
                result.innerHTML=dom[i]+"\n"
                /*RESULT WHEN YOU SEARCH FOR A SPECIFIC SUPERHERO.*/
            }else if(dom[i].getAttribute("alias").value==text){
                h3.innerHTML=dom[i].getAttribute("alias")
                h4.innerHTML=dom[i].getAttribute("name")
                p.innerHTML=dom[i].getAttribute("biography")
                result.innerHTML= h3+"\n"+h4+"\n"+p
            }else{
                result.innerHTML="SUPERHERO NOT FOUND".classList('errormessage')
            }

            
        }
        
    }
    request.send();
}
