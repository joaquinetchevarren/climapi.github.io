
async function climaData(location){
    const apiKey = "c86c0f7d64de1081b5206e39c0598a18";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

 try {
    const response = await fetch(apiUrl);
    if (!response.ok){
        throw new Error("No se obtuvo la informacion, probar masw tarde")
    }
    const data = await response.json();
    return data;
 }catch (error) {
    throw error;
 }

}
async function handleSearch(ev){
    ev.preventDefault();
    
    const locationInput = document.getElementById("ubicacion"); 
    const container = document.getElementById("container");

   try {
    const location = locationInput.value;
    const climaData = await climaData(location);

 container.innerHTML = `El clima en ${location}: ${climaData.weather[0].description}, Temperatura: ${climaData.main.temp}°C`;
   } catch (error) {
    container.innerHTML = `Error: ${error.message}`;
    }
}
const searchButton= document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearch);
