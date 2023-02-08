# Weather App

![image](https://user-images.githubusercontent.com/115970252/217642277-6a90e848-9f5c-4fb2-bb8f-185ddf87d3e4.png)
This project was an assignment for The Odin Project. The goal was to learn how to use asynchronous function in combination with APIs.


## Technologies Used
-HTML
-CSS
-JavaSCript
-Webpack

## Live Site
(https://singhalex.github.io/weather/)

##How it Works
Using the fetch API, sends a request to openweathermap and receieves weather data for the querried city. This data is returned as a promised
and the JSON file is parsed in order to display the relevant info on the page. The temperature is displayed along with the appropriate weather image
according the weather description returned.

A loading image is animated while the fetch is being executed.
