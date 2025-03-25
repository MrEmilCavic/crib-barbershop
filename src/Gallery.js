import React, { useState, useEffect } from 'react';


function Gallery () {
    const [gallery, setGallery] = useState([]);
    const [chosenOne, setChosenOne] = useState(null);

    const placeId = 'ChIJqYJ287o_TEYRH6iSVhEkCVU';

    useEffect(() => {
        if(!window.google) return;
        const mapDiv = document.createElement('div');
        const map = new window.google.maps.Map(mapDiv, {
            center: { lat: 56.1505518, lng: 10.2022758 },
            zoom: 15
            });

            const service = new window.google.maps.places.PlacesService(map);
            const request = {
                placeId: placeId,
                fields: ['photos']
            };

            service.getDetails(request, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && place.photos) {
                    setGallery(place.photos);
                } else {
                    console.error('error fetching photos:', status);
                }
            }, []);
    },[]);

    const handleClickOutside = (e) => {
        if(e.target.classList.contains('modal-backdrop')) {
            setChosenOne(null);
        }
    };

    const goPrev = (e) => {
        e.stopPropagation();
        const currentChosen = gallery.indexOf(chosenOne);
        const prevChosen = currentChosen === 0 ? gallery.length -1 : currentChosen -1;
        setChosenOne(gallery[prevChosen]);
    };

    const goNext = (e) => {
        e.stopPropagation();
        const currentChosen = gallery.indexOf(chosenOne);
        const nextChosen = currentChosen === gallery.length -1 ? 0 : currentChosen +1;
        setChosenOne(gallery[nextChosen]);
    };
    

    return (
        <div id="gallery" className="min-h-[400px] h-full w-full bg-bglight p-4 md:p-8">
            <div id='galleryinfowindow'>
                <div className='flex items-center justify-center gap-4 mb-8'>
                    <div className='h-1 w-16 md:w-32 bg-text-primary rounded-2xl'></div>
                    <p className="font-baskerville font-bold text-4xl text-center">Gallery</p>
                    <div className='h-1 w-16 md:w-32 bg-text-primary rounded-2xl'></div>
                </div>
                <div className='flex flex-wrap justify-evenly lg:px-96 md:mb-24'>
                {gallery.length > 0 ? (
                    gallery.map((photo, index) => (
                        <img key={index} src={photo.getUrl({ maxWidth: 200, maxHeight: 200 })}
                            alt={`Crip Barbershop photo ${index + 1}`} 
                            onClick={() => setChosenOne(photo)}
                            className="m-2 cursor-pointer object-contain 
                                transition-all hover:scale-[1.2] duration-600 ease-out" />))
                    ) : (<p className='flex text-center flex-col justify-center text-xl'>Gallery loading...</p>)}
                </div>
                {chosenOne && (
                    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center
                        z-50 modal-backdrop' onClick={handleClickOutside}>
                            <div className="relative max-w-[90vh] max-h-[90vh]">
                                <div className='absolute -left-16 top-1/2 -translate-y-1/2 text-accent
                                    opacity-75 hover:opacity-100 transition-all z-50 w-12 h-12 flex
                                    items-center justify-center font-bold text-6xl cursor-pointer' 
                                    onClick={goPrev}>
                                        	{`<`}
                                </div>
                                <img src={chosenOne.getUrl({maxWidth: 1200, maxHeight: 1200 })} 
                                    alt="Enlarged gallery item"
                                    className="max-w-full max-h-[90vh] object-contain" />
                                <div className='absolute -right-16 top-1/2 -translate-y-1/2 text-accent
                                    opacity-75 hover:opacity-100 transition-all z-50 w-12 h-12 flex
                                    items-center justify-center font-bold text-6xl cursor-pointer'  
                                    onClick={goNext}>
                                        	{`>`}
                                </div>
                            </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;