// 科技感交互效果
document.addEventListener('DOMContentLoaded', function() {
  // 鼠标跟随效果
  const cursor = document.createElement('div');
  cursor.classList.add('tech-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });

  // 动态背景粒子效果
  const canvas = document.createElement('canvas');
  canvas.classList.add('tech-canvas');
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 100;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.2) this.size -= 0.01;
    }

    draw() {
      ctx.fillStyle = '#00ffcc';
      ctx.strokeStyle = '#ff00cc';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  function initParticles() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

  // 窗口大小调整时重置canvas
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
