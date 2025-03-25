import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import logo from './util/logo.png';

function Contact() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries: ['places'],
    });
    const loc = {
        /* lat: 56.150552, 
        lng: 10.202276, */
        lat: 56.1505518, lng: 10.2022758,
    };
    const placeId = 'ChIJqYJ287o_TEYRH6iSVhEkCVU';

    const [placeDetails, setPlaceDetails] = useState(false);
    const [markerPos, setMarkerPos] = useState(loc);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    useEffect(() => {
            if(!window.google) return;
            const mapDiv = document.createElement('div');
            const map = new window.google.maps.Map(mapDiv, {
                center: loc,
                zoom: 15
                });
    
                const service = new window.google.maps.places.PlacesService(map);
                const request = {
                    placeId: placeId,
                };
    
                service.getDetails(request, (place, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        console.log('place details is fetched', place);
                        setPlaceDetails(place);
                        setMarkerPos({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        });
                        setShowInfoWindow(true);
                    } else {
                        console.error('error fetching placedetails:', status);
                    }
                });
        },[placeId]);
    
/* 
    placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
            const place = results[0];
            setPlaceDetails(place);
        } else {
            setPlaceDetails(null);
        }
    }); */

    return(
        <div id='contact' className='bg-text-primary p-4 md:p-8'>
            <div className='flex items-center justify-center gap-4 m-4 md:m-8 text-white'>
                    <div className='h-1 w-16 md:w-32 bg-white rounded-2xl'></div>
                    <p className="font-baskerville font-bold text-4xl text-center">The Barbershop</p>
                    <div className='h-1 w-16 md:w-32 bg-white rounded-2xl'></div>
            </div>
            <div className="flex flex-row justify-center flex-wrap md:gap-12 mb-4 md:mb-16">
                <div className='bg-bglight bg-opacity-80 rounded-xl text-black font-bold'>
                    <div className='flex items-center justify-center gap-2 m-2 md:m-4'>
                            <div className='h-1 w-8 md:w-16 bg-black rounded-2xl'></div>
                            <p className='font-baskerville text-center text-lg md:text-3xl m-2 md:m-4'>Address</p>
                            <div className='h-1 w-8 md:w-16 bg-black rounded-2xl'></div>
                    </div>
                    <div className='text-justified text-lg md:text-2xl m-2 md:m-4 md:pl-4 '>
                        Banegårdsgade 37 <br/> 8000 Aarhus
                    </div>
                    <div className='text-left text-lg md:text-2xl m-2 md:m-4 pl-4'>
                        Call me at  <br />
                        <a href="tel:+4550153688" className='underline transition-all 
                            hover:text-text-secondary ease-out duration-510'> +45 50 15 36 88</a>
                    </div>
                </div>
                <div className='flex flex-col bg-bglight bg-opacity-80 rounded-xl text-lg md:text-4xl text-black font-bold'>
                    <div className='flex items-center justify-center gap-2 m-2 md:m-4'>
                            <div className='h-1 w-8 md:w-16 bg-black rounded-2xl'></div>
                            <p className='font-baskerville text-center text-lg md:text-3xl m-2 md:m-4'>Working <br/> Hours</p>
                            <div className='h-1 w-8 md:w-16 bg-black rounded-2xl'></div>
                    </div>
                    <div className='ml-[15%] flex flex-col justify-evenly text-lg md:text-2xl mb-12'>
                        {/* <div className='py-1'>Monday 10am - 6pm</div>
                        <div className='py-1'>Tuesday 10am - 6pm</div>
                        <div className='py-1'>Wednesday 10am - 6pm</div>
                        <div className='py-1'>Thursday 10am - 6pm</div>
                        <div className='py-1'>Friday 10am - 6pm</div>
                        <div className='py-1'>Saturday 10am - 4pm</div>
                        <div className='py-1'>Sunday closed</div> */}
                        <p>Monday to Friday:</p>
                        <p>10 am - 6 pm</p>
                        <p>Saturday:</p>
                        <p>10 am - 4 pm</p>
                    </div>
                </div>
            </div>
            <div id='mapview' className='w-full bg-bglight mt-8 md:mb-24'>
            { isLoaded &&
                <GoogleMap 
                        mapContainerStyle={{ width: '100%', height: '100vh' }}
                        center={markerPos}
                        zoom={15}
                        
                    >
                        <Marker position={markerPos} />
                        
                            <InfoWindow
                                position={markerPos}
                                >
                                    <div className='flex flex-col items-center my-2'>
                                        <img src={logo} className='w-[75px]' />
                                        <div className='flex flex-col ml-4'>
                                            <p className='text-lg font-bold my-1'>Crib Barbershop</p>
                                            <p className='text-base'>Banegårdsgade 37, 8000 Aarhus</p>
                                            <p className='text-base'>Call us: <a href="tel:+4550153688" className='underline hover:font-bold'>+45 50 15 36 88</a></p>
                                            <p className='text-base'> <a href='https://crib-barbershop.planway.com/' target='_blank' className='underline hover:font-bold'>
                                                Book appointment</a></p>
                                        </div>
                                    </div>
                            
                            </InfoWindow>
                        
                </GoogleMap>
            }
            </div>
        </div>
    );
};

export default Contact;