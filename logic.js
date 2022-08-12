
let wagonImage
let locomotiveImage
let locomotiveXOffset = 0
const size = 400
let doodheadImage
let doodtailImage


// ─── setup ──────────────────────────────────────────────────────────────────────

function preload() {
    locomotiveImage = loadImage('assets/locomotive.png')
    doodheadImage = loadImage('assets/dood-head.png')
    doodtailImage = loadImage('assets/dood-tail.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    drawBackground()
    drawRailroad()
    drawLocomotive()

}

// ─── background ─────────────────────────────────────────────────────────────────

function drawBackground() {
    background(255, 170, 255)
}

// ─── draw locomotive ────────────────────────────────────────────────────────────

function drawLocomotive() {
    const x = width - locomotiveXOffset
    const y = height / 2 - 240
    const size = 400
    const speed = 3

    image(locomotiveImage, x, y, size, size)
    image(doodheadImage, x, y, size, size)
    image(doodtailImage, x + 120, y, size + 120, size)
    image(doodtailImage, x + 260, y, size + 260, size)

    locomotiveXOffset += speed
    if (locomotiveXOffset >= width + size) {
        locomotiveXOffset = 0
    }
}

function drawRailroad() {

    var x1 = 15
    var x2 = 0
    for (let i = 0; i < 25; i++) {
        strokeWeight(13)
        stroke(111, 54, 22)
        line(x1, height / 2 + 95, x2, height / 2 + 130)
        x1 += 40
        x2 += 40
    }
    stroke(77, 76, 76)
    strokeWeight(10)
    line(0, height / 2 + 100, width, height / 2 + 100)
    line(0, height / 2 + 125, width, height / 2 + 125)
}
