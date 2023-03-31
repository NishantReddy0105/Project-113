function preload() {
}

function setup() {
canvas = createCanvas(640,480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
    image(video, 75, 40, 500, 400);
    fill("blue")
    stroke("blue")
    rect(0, 0, 640, 40)
    rect(0, 440, 640, 40)
    rect(0, 0, 75, 500)
    rect(575, 0, 75, 500)
}

function take_snapshot() {
    save("tinted_picture.png");
}