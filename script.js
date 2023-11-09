//Draw map of the UK
function initMap() {
    // Create a map centered around the UK
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
                const position = { lat: town.lat, lng: town.lng };

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

                     // Get the slider element and its associated span
                    const slider = document.getElementById("townsSlider");
                    const sliderValue = document.getElementById("sliderValue");

                    // Function to update the number of displayed towns based on the slider value
                    function updateMarkers(numTowns) {
                    // Your code to update the displayed towns based on 'numTowns'
                    }

                    // Initialize the slider with the default value
                     //updateMarkers(10);

                    // Add an event listener to update the number of towns when the slider value changes
                     slider.addEventListener("input", function () {
                        const numTowns = parseInt(this.value, 10);
                        sliderValue.textContent = numTowns + " towns";
                        updateMarkers(numTowns);
                     });
                });
             })
        .catch(error => {
            console.error("Failed to load data:", error);
        });
}