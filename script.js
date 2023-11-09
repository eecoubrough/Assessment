//Draw map of the UK
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:  54.70897993855097, lng: -3.03060503561271},
        zoom: 5.5,
        mapTypeId: google.maps.MapTypeId.HYBRID
    })

//D3 program that consumes the feed
    d3.json("http://34.38.72.236/Circles/Towns/50", function(data) {
        console.log(data);
    });   

//Plot the towns from the JSON feed onto the map
    d3.json("http://34.38.72.236/Circles/Towns/50")
        .then(data => {
           data.forEach(town => {
                const position = { 
                    lat: town.lat, 
                    lng: town.lng 
                };

                // Create a marker for each town
                const marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    animation: google.maps.Animation.DROP,
                });

                    // Create an info window for each marker
                    const infoWindow = new google.maps.InfoWindow({
                        content: `<h2>${town.Town}</h2><p>County: ${town.County}</p><p>Population: ${town.Population}</p>`
                     });

                    // Info window opens when mouse hovers over the marker
                    marker.addListener("mouseover", () => {
                        infoWindow.open(map, marker);
                    });

                    // Info window closes when mouse leaves the marker
                    marker.addListener("mouseout", () => {
                        infoWindow.close(map, marker);
                    });
                    

                // Define/Get the slider element and value
                const slider = document.getElementById("townsSlider");
                const sliderValue = document.getElementById("sliderValue");

                // Updates the number of displayed towns based on the slider value
                const numTowns = parseInt(this.value, 50);
                function updateMarkers(numTowns) {
                }

                updateMarkers(50);
                //Add event listener so that the written number of towns changes based on the slider input
                slider.addEventListener("input", function () {
                    const numTowns = parseInt(this.value, 10);
                    console.log("Slider value:", numTowns);
                    sliderValue.textContent = numTowns + " towns";
                    updateMarkers(numTowns);
                });
            });
        })
        .catch(error => {
            console.error("Failed to load data:", error);
        });
}