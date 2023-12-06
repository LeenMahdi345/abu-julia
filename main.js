var httpRequest=new XMLHttpRequest();
var result=[];
function getpizza(category){
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${category}`);
    httpRequest.send();
  
    httpRequest.onreadystatechange=function(){
if( httpRequest.readyState==4){
    result=JSON.parse(httpRequest.response).recipes;
    displayData();

console.log(displayData);}

    }
} 
function displayData(){
    
    var data ="";
    for(var i=0; i<result.length ; i++)
    {
        data+=`
        <div class="col-md-3 ">
            <div class="recipe bg-info">
                <img src="${result[i].image_url}"class="img-fluid"/>

<h2>${result[i].title}</h2>       
<a href="desc.html?id=recipe-id" class="link">read more</a>
     </div>
        </div>`;
    }
    document.getElementById("postSection").innerHTML=data;

}
var allLinks=document.querySelectorAll(".nav-link");
for(var i=0;i<allLinks.length;i++){
    allLinks[i].addEventListener('click',function(e){
        getpizza(e.target.innerHTML);
    })
}
