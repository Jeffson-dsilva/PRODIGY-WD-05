const apiKey = "78236e1f4b92cdd51d41141f767420c1";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

        if(response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }
            
    }
    
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })

checkWeather(city);


    const bgImages = [
        "bgImages/bg1.jpg",
        "bgImages/bg2.jpg",
        "bgImages/bg3.jpg",
        "bgImages/bg4.jpg",
        "bgImages/bg5.jpg",
        "bgImages/bg6.jpg",
        "bgImages/bg7.jpg",
        "bgImages/bg8.jpg",
        "bgImages/bg9.jpg"
    ];

    bgImages.forEach(image => {
        const img = new Image();
        img.src = image;
    });

