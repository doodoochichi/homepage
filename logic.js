
let wagonImage
let locomotiveImage
let locomotiveXOffset = 0
const size = 400

// ─── setup ──────────────────────────────────────────────────────────────────────

function preload() {
    locomotiveImage = loadImage('assets/locomotive.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    drawBackground()
    drawLocomotive()
    drawRailroad()
}

// ─── background ─────────────────────────────────────────────────────────────────

function drawBackground() {
    background(68, 8, 196)
}

// ─── draw locomotive ────────────────────────────────────────────────────────────

function drawLocomotive() {
    const x = width - locomotiveXOffset
    const y = height / 2 - 240
    const size = 400
    const speed = 3

    image(locomotiveImage, x, y, size, size)

    locomotiveXOffset += speed
    if (locomotiveXOffset >= width + size) {
        locomotiveXOffset = 0
    }
}


function drawRailroad() {
    const y1 = height / 2 - 240
    stroke(200, 50, 10)
    strokeWeight(50)
    line(0, y1 - size, width, y1 - size)
}

