'use client'

import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

import { cn } from '@/lib/utils/classname'

import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'

export const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   // console.log(container)
  // }, [])

  const { resolvedTheme } = useTheme()

  const particlesColor = resolvedTheme === 'light' ? '#40a05f' : '#266039'
  const linksColor = resolvedTheme === 'light' ? '#40a05f' : '#266039'

  return (
    <Particles
      id='tsparticles'
      className={cn('animation-entry-particles fixed top-0 left-0 -z-[1] h-screen w-screen')}
      init={particlesInit}
      options={
        {
          // autoPlay: true,
          // background: {
          //   color: {
          //     value: '#000000',
          //   },
          //   image: '',
          //   position: '',
          //   repeat: '',
          //   size: '',
          //   opacity: 1,
          // },
          // defaultThemes: {},
          // delay: 0,
          detectRetina: true,
          // duration: 0,
          fpsLimit: 30,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onDiv: {
                selectors: [''],
                enable: false,
                mode: 'bounce',
                type: 'rectangle',
              },
              onHover: {
                enable: true,
                mode: 'grab',
                parallax: {
                  enable: false,
                  force: 10,
                  smooth: 500,
                },
              },
              resize: {
                delay: 0.5,
                enable: false,
              },
            },
            modes: {
              // attract: {
              //   distance: 200,
              //   duration: 0.4,
              //   easing: 'ease-out-quad',
              //   factor: 1,
              //   maxSpeed: 50,
              //   speed: 1,
              // },
              // bounce: {
              //   distance: 50,
              // },
              // bubble: {
              //   distance: 200,
              //   duration: 0.4,
              //   mix: false,
              //   divs: {
              //     distance: 200,
              //     duration: 0.4,
              //     mix: false,
              //     selectors: [],
              //   },
              // },
              // connect: {
              //   distance: 80,
              //   links: {
              //     opacity: 0.7,
              //   },
              //   radius: 60,
              // },
              grab: {
                distance: 120,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 0.5,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 2,
              },
              // remove: {
              //   quantity: 2,
              // },
              // repulse: {
              //   distance: 200,
              //   duration: 0.4,
              //   factor: 100,
              //   speed: 1,
              //   maxSpeed: 50,
              //   easing: 'ease-out-quad',
              //   divs: {
              //     distance: 200,
              //     duration: 0.4,
              //     factor: 100,
              //     speed: 1,
              //     maxSpeed: 50,
              //     easing: 'ease-out-quad',
              //     selectors: [],
              //   },
              // },
              // slow: {
              //   factor: 3,
              //   radius: 200,
              // },
              // trail: {
              //   delay: 0.005,
              //   pauseOnStop: true,
              //   quantity: 5,
              //   particles: {
              //     color: {
              //       value: '#ff0000',
              //       animation: {
              //         enable: true,
              //         speed: 400,
              //         sync: true,
              //       },
              //     },
              //     collisions: {
              //       enable: false,
              //     },
              //     links: {
              //       enable: false,
              //     },
              //     move: {
              //       outModes: {
              //         default: 'bounce',
              //       },
              //       speed: 2,
              //     },
              //     size: {
              //       value: 5,
              //       animation: {
              //         enable: true,
              //         speed: 5,
              //         minimumValue: 1,
              //         sync: true,
              //         startValue: 'min',
              //         destroy: 'max',
              //       },
              //     },
              //   },
              // },
              // light: {
              //   area: {
              //     gradient: {
              //       start: {
              //         value: '#ffffff',
              //       },
              //       stop: {
              //         value: '#000000',
              //       },
              //     },
              //     radius: 1000,
              //   },
              //   shadow: {
              //     color: {
              //       value: '#000000',
              //     },
              //     length: 2000,
              //   },
              // },
            },
          },
          // manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: 'bounce',
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: particlesColor,
              // animation: {
              //   h: {
              //     count: 0,
              //     enable: false,
              //     offset: 0,
              //     speed: 1,
              //     decay: 0,
              //     sync: true,
              //   },
              //   s: {
              //     count: 0,
              //     enable: false,
              //     offset: 0,
              //     speed: 1,
              //     decay: 0,
              //     sync: true,
              //   },
              //   l: {
              //     count: 0,
              //     enable: false,
              //     offset: 0,
              //     speed: 1,
              //     decay: 0,
              //     sync: true,
              //   },
              // },
            },
            // groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              // attract: {
              //   distance: 200,
              //   enable: false,
              //   rotate: {
              //     x: 3000,
              //     y: 3000,
              //   },
              // },
              // center: {
              //   x: 50,
              //   y: 50,
              //   mode: 'percent',
              //   radius: 0,
              // },
              decay: 0,
              distance: {},
              direction: 'none',
              drift: 0,
              enable: true,
              // gravity: {
              //   acceleration: 9.81,
              //   enable: false,
              //   inverse: false,
              //   maxSpeed: 50,
              // },
              // path: {
              //   clamp: true,
              //   delay: {
              //     random: {
              //       enable: false,
              //       minimumValue: 0,
              //     },
              //     value: 0,
              //   },
              //   enable: false,
              //   options: {},
              // },
              outModes: {
                default: 'bounce',
                bottom: 'bounce',
                left: 'bounce',
                right: 'bounce',
                top: 'bounce',
              },
              random: true,
              size: false,
              speed: 0.5,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {
                  color: {
                    value: '#000000',
                  },
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              limit: 200,
              value: 100,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: {
                min: 0.2,
                max: 0.6,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 0.5,
                decay: 0,
                sync: false,
                destroy: 'none',
                startValue: 'random',
                minimumValue: 0.2,
              },
            },
            reduceDuplicates: true,
            // shadow: {
            //   blur: 0,
            //   color: {
            //     value: '#000',
            //   },
            //   enable: false,
            //   offset: {
            //     x: 0,
            //     y: 0,
            //   },
            // },
            shape: {
              options: {},
              type: 'circle',
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.3,
              },
              value: {
                min: 0.3,
                max: 1.5,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 1,
                decay: 0,
                sync: false,
                destroy: 'none',
                startValue: 'random',
                minimumValue: 0.3,
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: -1,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            // life: {
            //   count: 0,
            //   delay: {
            //     random: {
            //       enable: false,
            //       minimumValue: 0,
            //     },
            //     value: 0,
            //     sync: false,
            //   },
            //   duration: {
            //     random: {
            //       enable: false,
            //       minimumValue: 0.0001,
            //     },
            //     value: 0,
            //     sync: false,
            //   },
            // },
            // rotate: {
            //   random: {
            //     enable: false,
            //     minimumValue: 0,
            //   },
            //   value: 0,
            //   animation: {
            //     enable: false,
            //     speed: 0,
            //     decay: 0,
            //     sync: false,
            //   },
            //   direction: 'clockwise',
            //   path: false,
            // },
            // destroy: {
            //   bounds: {},
            //   mode: 'none',
            //   split: {
            //     count: 1,
            //     factor: {
            //       random: {
            //         enable: false,
            //         minimumValue: 0,
            //       },
            //       value: 3,
            //     },
            //     rate: {
            //       random: {
            //         enable: false,
            //         minimumValue: 0,
            //       },
            //       value: {
            //         min: 4,
            //         max: 9,
            //       },
            //     },
            //     sizeOffset: true,
            //     particles: {},
            //   },
            // },
            // roll: {
            //   darken: {
            //     enable: false,
            //     value: 0,
            //   },
            //   enable: false,
            //   enlighten: {
            //     enable: false,
            //     value: 0,
            //   },
            //   mode: 'vertical',
            //   speed: 25,
            // },
            // tilt: {
            //   random: {
            //     enable: false,
            //     minimumValue: 0,
            //   },
            //   value: 0,
            //   animation: {
            //     enable: false,
            //     speed: 0,
            //     decay: 0,
            //     sync: false,
            //   },
            //   direction: 'clockwise',
            //   enable: false,
            // },
            // twinkle: {
            //   lines: {
            //     enable: false,
            //     frequency: 0.05,
            //     opacity: 1,
            //   },
            //   particles: {
            //     enable: false,
            //     frequency: 0.05,
            //     opacity: 1,
            //   },
            // },
            // wobble: {
            //   distance: 5,
            //   enable: false,
            //   speed: {
            //     angle: 50,
            //     move: 10,
            //   },
            // },
            // orbit: {
            //   animation: {
            //     count: 0,
            //     enable: false,
            //     speed: 1,
            //     decay: 0,
            //     sync: false,
            //   },
            //   enable: false,
            //   opacity: 1,
            //   rotation: {
            //     random: {
            //       enable: false,
            //       minimumValue: 0,
            //     },
            //     value: 45,
            //   },
            //   width: 1,
            // },
            links: {
              blink: false,
              color: {
                value: linksColor,
              },
              consent: true,
              distance: 120,
              enable: true,
              frequency: 1,
              opacity: 0.5,
              shadow: {
                blur: false,
                color: {
                  value: '#000',
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: true,
            },
            // repulse: {
            //   random: {
            //     enable: false,
            //     minimumValue: 0,
            //   },
            //   value: 0,
            //   enabled: false,
            //   distance: 1,
            //   duration: 1,
            //   factor: 1,
            //   speed: 1,
            // },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          // smooth: false,
          // style: {},
          // themes: [],
          // zLayers: -1,
          // emitters: [],
        } satisfies RecursivePartial<IOptions>
      }
      // loaded={particlesLoaded}
    />
  )
}
