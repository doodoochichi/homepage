
let wagonImage
let locomotiveImage
let locomotiveXOffset = 0

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
}

// ─── background ─────────────────────────────────────────────────────────────────

function drawBackground() {
    background(97, 55, 176)
}

// ─── draw locomotive ────────────────────────────────────────────────────────────

function drawLocomotive() {
    const x = width - locomotiveXOffset
    const y = height / 2 - 140
    const size = 400
    const speed = 3

    image(locomotiveImage, x, y, size, size)

    locomotiveXOffset += speed
    if (locomotiveXOffset >= width + size) {
        locomotiveXOffset = 0
    }
}

