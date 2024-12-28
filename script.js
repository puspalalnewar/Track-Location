const btn = document.querySelector("button");
const API = "https://api.opencagedata.com/geocode/v1/json?q=52.3877830%2C9.7334394&key=e9ddd846ebd24d43a033caf5eb1d5cb5";

btn.addEventListener("click", ()=>{
    // console.log(navigator.geolocation);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        btn.innerHTML = "Your Browser Do Not Support";
    }
})

function onSuccess(position){
    // console.log(position);
    let {latitude, longitude} = position.coords;
    console.log(latitude, longitude);
    findAddress(latitude, longitude);
}

async function findAddress(latitude, longitude){
    console.log(latitude, longitude);
    const response =await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e9ddd846ebd24d43a033caf5eb1d5cb5`);
    const data =await response.json();
    console.log(data.results[0]);
}



function onError(error){
    if(error.code == 1){
        btn.innerHTML = "You denied request";
    }else if(error.code == 2){
        btn.innerHTML = "Location not found";
    }else{
        btn.innerHTML = "Something went wrong";
    }
    btn.setAttribute("disabled", "true");
}