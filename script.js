//Draw map of the UK
function initMap() {
    // Create a map centered around the UK
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:  54.70897993855097, lng: -3.03060503561271},
        zoom: 5.5
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
                new google.maps.Marker({
                    position: position,
                    map: map,
                   title: town.name
                });
           });
       })
       .catch(error => {
            console.error("Failed to load data:", error);
       });
}


    