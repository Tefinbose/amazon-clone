
const xhr=new XMLHttpRequest(); // 1) create
xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg'); // 2 )open

xhr.addEventListener("load",()=>{
    console.log(xhr.response);
    
})

/*xhr.onload = function(){
    if(xhr.status === 200){
        console.log(JSON.parse(xhr.responseText));
        
    }else{
        console.error("Error" ,xhr.status);
        
    }
}*/
xhr.send() // 3 ) send
export default XMLHttpRequest