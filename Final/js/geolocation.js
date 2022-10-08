const api_key= "e15a315e0fe1919b961b57ed8cd9df7e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat,lng);
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&lang=ko`);
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

const local_position = navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);