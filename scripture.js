// Update the current date and time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString();
    document.getElementById('current-time').textContent = `${dateString} ${timeString}`;
}

// Call the updateTime function every second
setInterval(updateTime, 1000);

// Placeholder for map integration
function initMap() {
    // Here you would integrate a real map API like Google Maps or OpenStreetMap
    console.log('Map initialized');
}

// Initialize the map when the page loads
window.onload = initMap;
