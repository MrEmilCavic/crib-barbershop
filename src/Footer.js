import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer () {
    return (
        <div id='footer'>
            <div className='bg-text-primary p-4 md:p-8'>
                <div className='flex justify-end flex-row gap-6 md:gap-12 mb-4 lg:mb-8'>
                    <a href='' rel="noopener noreferrer" target='_blank' alt='facebook page'>
                        <FaFacebook className='text-xl md:text-4xl text-bglight
                            transition-all ease-out hover:text-primary hover:scale-[1.2]'/>
                    </a>
                    <a href='' rel="noopener noreferrer" target='_blank' alt='instagram page'>
                        <FaInstagram className='text-xl md:text-4xl text-bglight
                            transition-all ease-out hover:text-primary hover:scale-[1.2]'/>
                    </a>
                </div>
                <div className='flex flex-start text-bgdark text-sm font-bold'>
                    Made with love by Emil Čavić
                </div>
            </div>
        </div>
    )

};

export default Footer;