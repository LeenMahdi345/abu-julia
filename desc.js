

const myKeyValues=window.location.search;
const urlParams =new URLSearchParams(myKeyValues);
const param1=urlParams.get('id');
console.log("id:",param1);

var httpRequest=new XMLHttpRequest();
var result=[];
function getDetails(param1){
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${param1}`);

    httpRequest.send();
  
    httpRequest.onreadystatechange=function(){
if( httpRequest.readyState==4){
    result=JSON.parse(httpRequest.response).recipee;

    displayDetails();
console.log(result);
console.log(displayDetails);}

    }
} 
function displayDetails(){
    
    var data ="";
    
        data+=`
    
            <div class="recipe bg-info">
                <img src="${result.image_url} "class="img-fluid"/>
                <h2>${result.title}</h2>
                <p>${result.ingredients}</p>
                <p>${result.source_url}</p>
                <p>${result.social_rank}</p>
                <p>${result.publisher_url}</p>
        </div>`;
    
    document.getElementById("value-output").innerHTML=data;

}
for(var i=0;i<result.length;i++){
    result[i].addEventListener('click',function(e){
        getDetails(e.target.innerHTML);
    })}




