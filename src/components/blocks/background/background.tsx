import React, { useEffect, useRef } from 'react';

/**
 * ParticleWaveBackground
 * * Renders glitter particles organized in a flowing wave shape.
 * * ALSO renders a sparse layer of background particles drifting freely.
 * * Maintains the "glitter" shine effect with grayscale colors.
 */
const SubtleWaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number, height: number;
    let particles: Particle[] = [];
    let time = 0;

    // Configuration
    const waveParticleCount = 200; // Dense wave
    const bgParticleCount = 120;    // Sparse background ("barely visible amount")
    
    class Particle {
      type: 'wave' | 'background';
      x: number;
      y: number;
      size: number;
      phase: number;
      twinkleSpeed: number;
      colorRGB: string;
      
      // Wave specific
      spreadY: number = 0;
      speedX: number = 0;

      // Background specific
      vx: number = 0;
      vy: number = 0;

      // Common visual properties
      baseAlpha: number;
      sparkleStrength: number;

      constructor(type: 'wave' | 'background') {
        this.type = type; // 'wave' or 'background'
        this.x = Math.random() * width;
        this.y = 0; // Initialized below or in update if needed, but good to have a default
        
        // Common appearance
        this.size = Math.random() * 12 + 0.4;
        this.phase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.005 + Math.random() * 0.01;
        this.colorRGB = Math.random() > 0.4 ? '220, 215, 212' : '136, 136, 136';

        if (this.type === 'wave') {
          // --- WAVE SPECIFIC SETUP ---
          // spreadY determines vertical spread from the sine curve center
          const randomSpread = (Math.random() - 0.5); 
          this.spreadY = randomSpread * 180; // Thickness of the wave
          this.speedX = 0.2 + Math.random() * 0.4; // Flow speed
          
          this.baseAlpha = 0.05; 
          this.sparkleStrength = 0.85;
          // this.y is calculated in update()
        } else {
          // --- BACKGROUND SPECIFIC SETUP ---
          this.y = Math.random() * height; // Random starting height
          
          // Gentle free-floating drift
          this.vx = (Math.random() - 0.5) * 0.2; 
          this.vy = (Math.random() - 0.5) * 0.2;
          
          // "Barely visible" settings
          this.baseAlpha = 0.02; // Very faint base
          this.sparkleStrength = 0.4; // Less intense sparkle
        }
      }

      update(time: number) {
        // --- MOVEMENT ---
        if (this.type === 'wave') {
          // 1. Move horizontally along wave
          this.x += this.speedX;
          if (this.x > width) this.x = 0;

          // 2. Calculate Y position based on Sine Wave
          const waveFrequency = 0.003; 
          const waveAmplitude = 120;
          const waveY = height / 2 + Math.sin(this.x * waveFrequency + time * 0.5) * waveAmplitude;
          
          this.y = waveY + this.spreadY;

        } else {
          // 1. Free drift for background particles
          this.x += this.vx;
          this.y += this.vy;

          // 2. Screen wrapping
          if (this.x < 0) this.x = width;
          if (this.x > width) this.x = 0;
          if (this.y < 0) this.y = height;
          if (this.y > height) this.y = 0;
        }

        // --- TWINKLE ---
        this.phase += this.twinkleSpeed;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Calculate glitter shine
        const wave = Math.sin(this.phase);
        const sparkle = wave > 0 ? Math.pow(wave, 6) : 0;
        const currentAlpha = this.baseAlpha + (sparkle * this.sparkleStrength);
        
        ctx!.fillStyle = `rgba(${this.colorRGB}, ${currentAlpha})`;
        ctx!.fill();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      
      // Create Wave Particles
      for (let i = 0; i < waveParticleCount; i++) {
        particles.push(new Particle('wave'));
      }
      
      // Create Background Particles
      for (let i = 0; i < bgParticleCount; i++) {
        particles.push(new Particle('background'));
      }
    };

    const animate = () => {
      // Clear background
      ctx.fillStyle = '#202020';
      ctx.fillRect(0, 0, width, height);
      
      // Global time increment for wave undulation
      time += 0.01;

      particles.forEach(particle => {
        particle.update(time);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-40 lg:opacity-88 "
      style={{ background: '#202020' }}
    />
  );
};

export default SubtleWaveBackground;