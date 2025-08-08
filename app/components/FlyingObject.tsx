'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function FlyingObject({options}) {
  const rocketRef = useRef(null);

  useEffect(() => {

    let tween;
    
    if(options.timelines) {

        tween = gsap.timeline({
            repeat: options.repeat,
            defaults: {
                ease: options.ease,
            }
        });

        tween.to(rocketRef.current, {
            duration: options.duration,
            motionPath: options.motionPath,
        }, 0);

        // Ротации — привязаны относительно начала
        options.timelines.forEach((tl) => {

            if (tl.pause) {

                tween.addPause(tl.seconds, function() {
                    // через N секунд возобновим проигрывание
                    gsap.delayedCall(tl.pauseDuration, () => tween.play());
                });
            } else {

                if (options.imagesList && tl.imageItem) {
                    
                    tween.call(() => {
                        const images = rocketRef.current?.querySelectorAll('img');
                        if (!images) return;

                        images.forEach((image, index) => {
                            const n = index + 1;
                            if (tl.imageItem === n) {
                            image.classList.remove('hidden');
                            } else {
                            image.classList.add('hidden');
                            }
                        });
                    }, null, tl.seconds);
                }
                else
                {
                    tween.to(rocketRef.current, {
                        rotation: tl.rotation,
                        duration: tl.duration,
                        scaleX: tl.scaleX ? tl.scaleX : 1,
                    }, tl.seconds);
                }
            }
        });
    }
    else
    {
        tween = gsap.to(rocketRef.current, options);
    }

    // Ускорение при hover
    const el = rocketRef.current;
    const onHover = () => {

      const currentScaleX = gsap.getProperty(el, "scaleX") || 1;
      const signX = Math.sign(currentScaleX) || 1;

      gsap.to(tween, { timeScale: 2, duration: 0.3 });
      gsap.to(el, {
        scaleX: signX * 1.4,
        scaleY: 1.4,
        duration: 0.3,
      });
    };
    const onLeave = () => {

      const currentScaleX = gsap.getProperty(el, "scaleX") || 1;
      const signX = Math.sign(currentScaleX) || 1;

      gsap.to(tween, { timeScale: 1, duration: 0.3 });
      gsap.to(el, {
        scaleX: signX,
        scaleY: 1,
        duration: 0.3,
      });
    };

    el.addEventListener('mouseenter', onHover);
    el.addEventListener('mouseleave', onLeave);

    

    return () => {
      el.removeEventListener('mouseenter', onHover);
      el.removeEventListener('mouseleave', onLeave);
      tween.kill();
    };
  }, []);

  return (
    <div className='absolute inset-0 pointer-events-none'>
      <svg
        width="100%"
        height="100%"
        viewBox={options.viewBox}
        className="absolute inset-0 pointer-events-none"
      >
        <path
          id={"flight-path"+options.type}
          d={options.path}
          fill="none"
          stroke="transparent"
        />
      </svg>

      { 
      options.imagesList ? (
        <div ref={rocketRef} className="absolute top-0 left-0 pointer-events-auto">
            {options.imagesList.map((src: string, index: number) => (
                <img
                key={index}
                src={src}
                alt={`Flight Object ${index}`}
                className={index !== 0 ? 'hidden' : ''}
                />
            ))}
        </div>
      ) : (
        <img
            ref={rocketRef}
            src={options.imagePath}
            alt="Flight Object"
            className="absolute top-0 left-0 pointer-events-auto"
        />
      )
      }
    </div>
  );
}