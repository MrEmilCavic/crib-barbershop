import React, { useState, useEffect } from 'react';
const images = require.context('./util/carousel', false, /\.(jpg|jpeg|png|gif)$/);
const carousel = images.keys().map(images);

function Hero () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isDrag, setIsDrag] = useState(false);
    const [dragOffSet, setDragOffset] = useState(0);
    const [startX, setStartX] = useState(0);

    const minSwipeDistance = 10;

    useEffect(() => {
        const interval = setInterval(() => {
                nextImage();
        }, 4000);
        return () => clearInterval(interval);
    },[transitioning]);

    useEffect(() => {
        setCurrentIndex(1);
    },[]);

    const getSlides = () => {
        const slides = [
            carousel[carousel.length -1],
            ...carousel,
            carousel[0]
        ];
        return slides;
    };

    const nextImage = () => {
        if(!transitioning) {
            setTransitioning(true);
            setCurrentIndex((prevIndex) => {
                const next = prevIndex + 1
                if (next === carousel.length+1) {
                    setTimeout(() => {
                        setTransitioning(false);
                        setCurrentIndex(1);
                    }, 0);
                    return next;
                }
                return next;
            });
        }
    }

    const prevImage = () => {
        if(!transitioning) {
            setTransitioning(true);
            setCurrentIndex((prevIndex) => {
                const prev = prevIndex -1;
                if (prev === 0) {
                    setTimeout(() => {
                        setTransitioning(false);
                        setCurrentIndex(carousel.length);
                    },0);
                    return prev;
                }
                return prev;
            });
        }
    };

    const getIndex = () => {
        if (currentIndex === 0) return carousel.length -1;
        if (currentIndex === carousel.length +1) return 1;
        return currentIndex -1;
    };

    const handleTransitioning = () => {
            setTransitioning(false);
            if(currentIndex === 0) {
                setCurrentIndex(carousel.length);
            } else if (currentIndex === carousel.length +1) {
                setCurrentIndex(1);
            }
    };

    const isTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setDragOffset(0);
    };

    const isTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
        const currentDrag = e.targetTouches[0].clientX - touchStart;
        setDragOffset(currentDrag);
    };

    const isTouchEnd = () => {
        if (!touchStart || ! touchEnd) return;
        const distance = touchStart - touchEnd;
        const goLeft = distance > minSwipeDistance;
        const goRight = distance < -minSwipeDistance;

        if (goLeft) {
            nextImage();
        } else if (goRight) {
            prevImage();
        }
    };

    const isMouseDown = (e) => {
        setIsDrag(true);
        setStartX(e.clientX);
        setDragOffset(0);
    };

    const isMouseMove = (e) => {
        if(!isDrag) return;
        setTouchEnd(e.clientX);
        const currentDrag = e.clientX - startX;
        setDragOffset(currentDrag);
    };

    const isMouseUp = () => {
        if(!isDrag) return;
        if (startX && touchEnd) {
            const distance = startX - touchEnd;
            const goLeft = distance > minSwipeDistance;
            const goRight = distance < -minSwipeDistance;

            if(goLeft) {
                nextImage();
            } else if(goRight) {
                prevImage();
            }
        }

        setIsDrag(false);
        setStartX(0);
        setTouchEnd(null);
        setDragOffset(0);
    };

    return (
        <div id="hero" className='relative z-0 bg-black w-full h-[400px] 
            md:h-[700px] lg:h-[100%] overflow-hidden'>
            <div className="w-[100%] transition-all duration-900 ease-in-out flex"
                style={{
                    transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffSet}px))`,
                    cursor: isDrag ? 'grabbing' : 'grab',
                }}
                  onTransitionEnd={handleTransitioning}
                  onTouchStart={isTouchStart}
                  onTouchMove={isTouchMove}
                  onTouchEnd={isTouchEnd}
                  onMouseDown={isMouseDown}
                  onMouseMove={isMouseMove}
                  onMouseUp={isMouseUp}
                  onMouseLeave={isMouseUp}
            >
                {getSlides().map((image, index) => (
                    <img key={index} src={image} alt="Crib Barbershop" draggable="false"
                        className="w-full flex-none object-cover rounded-xl h-[400px] 
                        md:h-[700px] lg:h-[1080px] select-none" />
                ))}
            </div>
            <div className="absolute left-1/2 bottom-6 md:bottom-12 lg:-bottom-104 transform -translate-x-1/2 flex space-x-2">
            {carousel.map((_, index) => (
                <div key={index}
                    className={`w-1 h-1 rounded-full transition-all duration-600 ease-out
                         ${
                        index === getIndex() 
                            ? 'bg-text-primary scale-[2.0] -translate-y-2.5 mx-2' 
                            : 'bg-accent scale-100 translate-y-4 md:translate-y-6 mx-0'
                    } cursor-pointer`}
                    onClick={() => setCurrentIndex(index + 1)}
                    ></div>
            ))}
            </div>
        </div>
    );

}

export default Hero;