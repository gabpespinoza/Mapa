let map = L.map('map').setView([-17.388857, -66.156207], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// lugares
let marker = L.marker([-17.369740, -66.171044]).addTo(map);
let marker2 = L.marker([-17.376441, -66.273710]).addTo(map);
let marker3 = L.marker([-17.378526, -66.141842]).addTo(map);
let marker4 = L.marker([-17.394127, -66.157309]).addTo(map);
let marker5 = L.marker([-17.3953797, -66.1577445]).addTo(map);

marker.bindPopup("En el parque Lincon se encuentran estatuas de Abraham Lincoln y Martin Luther King").openPopup();
marker2.bindPopup("Parque Agroflori: gran variedad de flora y fauna.").openPopup();
marker3.bindPopup("Una extensa colección de plantas y flores provenientes de diversas regiones de Bolivia y del mundo").openPopup();
marker4.bindPopup(" La Plaza 14 de Septiembre es testigo de la vida social y cultural de la ciudad").openPopup();

//marker.bindPopup("Agroflori").openPopup()*//