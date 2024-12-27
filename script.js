const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    // console.log(navigator.geolocation);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        btn.innerHTML = "Your Browser Do Not Support";
    }
})

function onSuccess(position){
    console.log(position);
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