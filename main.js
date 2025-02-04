function changeTopMessage(str) {
    document.getElementById("topMessage").textContent = str;
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function loadHTML(elementId, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) {callback();}
        });
}

const messages = {
    "/index.html": "Home to the X",
    "/about.html": "About. Just about.",
    "/legacy.html": "Observe and Learn",
    "/subscribe.html": "Sub Cause Yes"
};

function updateTopMessage() {
    const path = window.location.pathname;
    const message = messages[path] || "Welcome";
    changeTopMessage(message);
}

loadHTML('header', 'header.html', updateTopMessage);
loadHTML('footer', 'footer.html');