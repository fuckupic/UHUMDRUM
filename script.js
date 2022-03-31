gsap.registerPlugin(ScrollTrigger);
document.addEventListener("mousemove", mouseMoved);

const Wave1 = document.getElementById('wave_1')
const Wave2 = document.getElementById('wave_2')
const Wave3 = document.getElementById('wave_3')
const Wave4 = document.getElementById('wave_4')
const Wave5 = document.getElementById('wave_5')
const Wave6 = document.getElementById('wave_6')

const tentacle1 = document.getElementById('tentacle1')
const tentacle2 = document.getElementById('tentacle2')
const tentacle3 = document.getElementById('tentacle3')
const tentacle4 = document.getElementById('tentacle4')
const tentacle5 = document.getElementById('tentacle5')

var tentacles = gsap.utils.toArray('.tentacle');

const waveDiv = document.querySelector('.waves')

var lastMouseX = 0;
var lastMouseY = 0;

function mouseMoved(ev) {
  lastMouseY = ev.pageY;

  // console.log("DeltaX: "+deltaX+" DeltaY: "+deltaY+" PageX: "+ev.pageX+" PageY: "+ev.pageY)
  moveWaves(lastMouseY);
}

tentacles.forEach((tentacle) => {
  gsap.to(tentacle, {
    scrollTrigger: {
      trigger: tentacle,
      toggleActions: "restart pause reverse none",
      start: `65% 50%`,
      markers: true,
      scrub: true
    },
    y: 250,
    duration: 1
  });
})


function moveWaves(posY) {
  
  // Wave1.style.transform = `translate(${Math.cbrt(-posY)}px, ${Math.cbrt(posY)}px)`;
  Wave2.style.transform = `translate(${Math.cbrt(-posY)}px, ${Math.cbrt(-posY)}px)`;
  Wave3.style.transform = `translate(${Math.cbrt(-posY)}px, ${Math.cbrt(posY)}px)`;
  Wave4.style.transform = `translate(${Math.cbrt(posY)}px, ${Math.cbrt(-posY)}px)`;
  Wave5.style.transform = `translate(${Math.cbrt(-posY)}px, ${Math.cbrt(posY)}px)`;
  Wave6.style.transform = `translate(${Math.cbrt(-posY)}px, ${Math.cbrt(-posY)}px)`;

}