function initMap() {
    // Create a map centered around the UK
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 54.0, lng: -2.0 },
        zoom: 6
    })

    // Load JSON data from the provided feed
    // d3.json("http://34.38.72.236/Circles/Towns/50")
        //.then(data => {
            // Assuming the JSON contains an array of town objects with lat and lng properties
           // data.forEach(town => {
                //const position = { lat: town.lat, lng: town.lng };

                // Create a marker for each town
                //new google.maps.Marker({
                    //position: position,
                   // map: map,
                   // title: town.name // You should adjust this to match your JSON structure
                //});
           // });
        //})
        //.catch(error => {
            //console.error("Failed to load data:", error);
       // });
}


    