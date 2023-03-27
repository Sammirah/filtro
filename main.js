function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(550, 250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
}

function fotita() {
    save('su melhor fotita.png');
}

function mudarcorzinha() {
    tintColor = document.getElementById("vela").value
}