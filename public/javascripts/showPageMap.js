const goodPlace = JSON.parse(place);

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: goodPlace.geometry.coordinates,
    zoom: 10
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker()
    .setLngLat(goodPlace.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${goodPlace.title}</h3><p>${goodPlace.location}</p>`
            )
    )
    .addTo(map);