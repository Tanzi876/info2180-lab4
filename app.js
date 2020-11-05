window.onload=()=>{
    let searchbtn=document.getElementById('search')
    let request= new XMLHttpRequest()
    
    request.open('GET','http://localhost:8080/superheroes.php')
    request.onreadystatechange=searchbtn
    searchbtn.onclick=function(){
        let dom =request.responseXML.getElementsByTagName("li")
        let text=""        
        for(let i=0;i<dom.length;i++){
            text+=dom[i].innerHTML+"\n"
        }
        alert(text)
    }
    request.send();
}