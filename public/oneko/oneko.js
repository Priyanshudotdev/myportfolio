// oneko.js: https://github.com/adryd325/oneko.js

(function oneko() {
  const isReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  if (isReducedMotion) return;

  const nekoEl = document.createElement("div");

  let nekoPosX = window.innerWidth - 48;
  let nekoPosY = window.innerHeight - 48;

  let mousePosX = window.innerWidth - 48;
  let mousePosY = window.innerHeight - 48;

  let isTrapped = true;

  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;

  const nekoSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function init() {
    nekoEl.id = "oneko";
    nekoEl.ariaHidden = true;
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    const tooltipEl = document.createElement("div");
    tooltipEl.style.position = "fixed";
    tooltipEl.style.backgroundColor = "hsl(var(--background))";
    tooltipEl.style.color = "hsl(var(--muted-foreground))";
    tooltipEl.style.border = "1px solid hsl(var(--border))";
    tooltipEl.style.padding = "6px 12px";
    tooltipEl.style.borderRadius = "6px";
    tooltipEl.style.fontSize = "12px";
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.opacity = "0";
    tooltipEl.style.transition = "opacity 0.2s ease-in-out";
    tooltipEl.style.zIndex = "2147483647";
    tooltipEl.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
    tooltipEl.style.fontFamily = "inherit";
    tooltipEl.style.whiteSpace = "nowrap";
    tooltipEl.style.transform = "translateX(-50%)"; // Center horizontally relative to left position
    document.body.appendChild(tooltipEl);

    nekoEl.style.pointerEvents = "auto";
    nekoEl.style.cursor = "pointer";
    
    const updateTooltipText = () => {
      tooltipEl.innerText = isTrapped ? "Click to wake me up! I will disturb you." : "Click to put me to sleep!";
    };

    nekoEl.addEventListener("mouseenter", () => {
      updateTooltipText();
      tooltipEl.style.opacity = "1";
    });

    nekoEl.addEventListener("mouseleave", () => {
      tooltipEl.style.opacity = "0";
    });

    nekoEl.addEventListener("click", () => {
      isTrapped = !isTrapped;
      updateTooltipText();
    });

    // Make sure tooltip follows cat and stays on screen
    setInterval(() => {
      if (tooltipEl.style.opacity === "1") {
        let tooltipX = nekoPosX;
        const tooltipWidth = tooltipEl.offsetWidth || 220; // Fallback width if not rendered yet
        
        // Keep within right edge
        if (tooltipX + (tooltipWidth / 2) > window.innerWidth - 10) {
          tooltipX = window.innerWidth - (tooltipWidth / 2) - 10;
        }
        // Keep within left edge
        if (tooltipX - (tooltipWidth / 2) < 10) {
          tooltipX = (tooltipWidth / 2) + 10;
        }

        tooltipEl.style.left = `${tooltipX}px`;
        tooltipEl.style.top = `${nekoPosY - 40}px`;
      }
    }, 16);
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = 2147483647;

    let nekoFile = "./oneko.gif";
    const curScript = document.currentScript;
    if (curScript?.dataset.cat) {
      nekoFile = curScript.dataset.cat;
    }
    nekoEl.style.backgroundImage = `url(${nekoFile})`;

    document.body.appendChild(nekoEl);

    document.addEventListener("mousemove", (event) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    });

    window.requestAnimationFrame(onAnimationFrame);
  }

  let lastFrameTimestamp;

  function onAnimationFrame(timestamp) {
    // Stops execution if the neko element is removed from DOM
    if (!nekoEl.isConnected) {
      return;
    }
    if (!lastFrameTimestamp) {
      lastFrameTimestamp = timestamp;
    }
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      frame();
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    if (isTrapped) {
      idleAnimation = "sleeping";
    } else if (
      idleTime > 10 &&
      Math.floor(Math.random() * 200) === 0 &&
      idleAnimation == null
    ) {
      const avalibleIdleAnimations = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) {
        avalibleIdleAnimations.push("scratchWallW");
      }
      if (nekoPosY < 32) {
        avalibleIdleAnimations.push("scratchWallN");
      }
      if (nekoPosX > window.innerWidth - 32) {
        avalibleIdleAnimations.push("scratchWallE");
      }
      if (nekoPosY > window.innerHeight - 32) {
        avalibleIdleAnimations.push("scratchWallS");
      }
      idleAnimation =
        avalibleIdleAnimations[
          Math.floor(Math.random() * avalibleIdleAnimations.length)
        ];
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;
    
    const targetX = isTrapped ? window.innerWidth - 48 : mousePosX;
    const targetY = isTrapped ? window.innerHeight - 48 : mousePosY;
    
    const diffX = nekoPosX - targetX;
    const diffY = nekoPosY - targetY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite("alert", 0);
      // count down after being alerted before moving
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;

    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  init();
})();
