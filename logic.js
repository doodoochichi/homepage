
const size = 400

let wagonImage
let locomotiveImage
let locomotiveXOffset = 0
let doodHeadImage
let doodTailImage

// ─── setup ──────────────────────────────────────────────────────────────────────

function preload() {
    locomotiveImage = loadImage('assets/locomotive.png')
    doodHeadImage = loadImage('assets/dood-head.png')
    doodTailImage = loadImage('assets/dood-tail.png')
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
    image(doodHeadImage, x, y, size, size)
    image(doodTailImage, x + 60, y, size, size)
    image(doodTailImage, x + 120, y, size, size)
    image(doodTailImage, x + 240, y, size, size)

    const howManyDoods = Math.floor((width - x) / size) * 3
    for (let i = 1; i <= howManyDoods; i++) {
        const doodX = width - (i * 0.3 * size)
        image(doodTailImage, doodX, y, size, size)
    }

    locomotiveXOffset += speed
    if (locomotiveXOffset >= width + size) {
        locomotiveXOffset = 0
    }
}

function drawRailroad() {
    var x1 = 15
    var x2 = 0
    for (let i = 0; i < 100; i++) {
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
