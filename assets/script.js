var apiContainerEl = document.querySelector("#api-container");
// var city = document.querySelector("#city-input");
var cityBtn = document.querySelector("#city-input-btn");


var printPhotos = function (data) {
    for (var i = 0; (i < data.length && i < 10); i++) {
        var photo = document.createElement("img");
        photo.setAttribute("src", data[i].largeImageURL);
        photo.setAttribute("width", "600px");
        apiContainerEl.appendChild(photo);
    }

}

var getPhotos = function () {

    var city = document.querySelector("#city-input").value.trim();
    city = city.replaceAll(" ", "+");
    // placeUrl = "https://pixabay.com/api/?key=25546994-2482c2e9e7a32b9d57d2159ef&q=" + city + "+florida&image_type=photo&pretty=true";
    placeUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&input=" + city + "&inputtype=textquery&key=AIzaSyBY-j1G-WfuXYcJeyD8RyAYUISSIX82i5U";
    // console.log(placeUrl);
    fetch(placeUrl).then(function (response) {
        console.log(response);

        if (response.ok) {
            response.json().then(function (data) {
                // console.log(data.hits)
                console.log(data);
            });
        };
        // console.log(response);

    });
};

cityBtn.addEventListener("click", getPhotos);
