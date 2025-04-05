  document.getElementsByClassName("button")[0].addEventListener('click',async function(e){  
    e.preventDefault();
    try{
        document.getElementById("result").innerHTML=`<h4>Loading...</h4>`
    let key="ema_live_ev7goTivjBffAPo2IV2PvboSTU6MEnLQCa7MWAXQ"
    let email=document.getElementById("email").value
    if(!email){
        document.getElementById("result").innerHTML="Enter a valid email"
        return;
    }
    url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res=await fetch(url)
    let results=await res.json()
    str=``
    for (key of Object.keys(results)){
        if(results[key]!=="" && results[key]!==" "){
      str=str+`<div>
      ${key}:${results[key]}
      </div>`
    }
}
    document.getElementById("result").innerHTML=str
    console.log("end");
}
catch(error){
    document.getElementById("result").innerHTML=error.message
}
    
});
    