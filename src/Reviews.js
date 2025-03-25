import React, { useState, useEffect } from 'react';

function Reviews () {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const placeId = 'ChIJqYJ287o_TEYRH6iSVhEkCVU';

    useEffect(() => {
        if(!window.google) return;
        const mapDiv = document.createElement('div');
        const map = new window.google.maps.Map(mapDiv, {
            center: {lat: 56.1505518, lng: 10.2022758 },
            zoom: 15
        });

        const service = new window.google.maps.places.PlacesService(map);

        const request = {
            placeId: placeId,
            fields: ['reviews']
        };

        service.getDetails(request, (place,status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setReviews(place.reviews);
                console.log('place.reviews is', place.reviews);
                console.log('reviews is', reviews);
                setLoading(false);
            }
        }); 
    }, []);

    return(
        <div id='reviews' className='bg-bglight p-4 md:p-8 '>
            <div className='flex items-center justify-center gap-4 mb-8'>
                <div className='h-1 w-16 md:w-32 bg-text-primary rounded-2xl'></div>
                <p className="font-baskerville font-bold text-4xl text-center">What my customers say</p>
                <div className='h-1 w-16 md:w-32 bg-text-primary rounded-2xl'></div>
            </div>
            {loading ? (
                <div className='flex text-center py-4 md:py-12 font-bold text-lg md:text-4xl'>
                    Loading...
                </div>
            ) : (
                <div className="flex justify-left lg:justify-evenly flex-wrap mx-[15%] ">
                {reviews.map((review, index) => (
                    <div key={index} 
                        className='rounded-lg border-solid border border-text-primary bg-bgdark bg-opacity-50 
                            shadow-lg p-2 md:p-4 m-4 md:m-8 w-full md:w-[60vh] lg:w-[40vh]
                            transition-all hover:bg-opacity-25 ease-in-out duration-400 '>
                        <div className="text-justify text-base md:text-lg"> 
                            {review.text} 
                        </div>
                        <div className="mt-2 md:mt-4 flex justify-end w-full text-base md:text-lg">
                            {review.author_name}
                        </div>
                    </div>
                ))}
                </div>
            )}

            <div className='flex justify-center md:mt-8 md:mb-24'>
                <a href={`https://www.google.com/maps/place/?q=place_id:${placeId}`}
                    target='_blank' rel='noopener noreferrer'
                    className='flex flex-row gap-2 font-bold rounded-lg bg-white px-4 py-2 text-lg text-black hover:shadow-lg'>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>  
                     See all reviews
                    </a>
            </div>

        </div>
    );

};

export default Reviews;