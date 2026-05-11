const glow = document.getElementById("glow");

let mouseX = 0;
let mouseY = 0;

let speed = 0.5;

let currentX = 0;
let currentY = 0;

// get mouse position
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// animation loop (smooth follow)
function animate() {
    currentX += (mouseX - currentX) * 0.08 * speed;
    currentY += (mouseY - currentY) * 0.08 * speed;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();