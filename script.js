// Function to handle the "Connect Now" button click
function connectWithPractitioners() {
    alert("Connecting with healthcare practitioners...");
}

// Function to handle the "Schedule Appointment" button click
function scheduleAppointment() {
    alert("Scheduling an appointment with a doctor...");
}

// Function to handle the "Find Nearby Facilities" button click
function findNearbyFacilities() {
    alert("Finding nearby hospitals and clinics...");
}

// Function to handle the "Read Now" button click
function readHealthNews() {
    alert("Reading health news and updates...");
}

// Function to handle the "Share Data" button click
function shareHealthData() {
    alert("Sharing health data with healthcare providers...");
}

// Attach event listeners to the buttons
document.getElementById("connectButton").addEventListener("click", connectWithPractitioners);
document.getElementById("scheduleButton").addEventListener("click", scheduleAppointment);
document.getElementById("findNearbyButton").addEventListener("click", findNearbyFacilities);
document.getElementById("readNowButton").addEventListener("click", readHealthNews);
document.getElementById("shareDataButton").addEventListener("click", shareHealthData);

