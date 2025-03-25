import logo from './util/logo.png';

function Header() {

    return(
        <div id="header" className="bg-bglight sticky z-10 w-full h-auto flex justify-between md:items-center md:text-center top-0">
            <img src={logo} className='h-28 mx-auto my-2 transform -translate-x-24 md:transform-none'/>
            <a href='https://crib-barbershop.planway.com/' target='_blank'
                className="fixed items-center justify-end top-8 md:top-6 right-0">
                <div className='bg-primary opacity-90 text-center max-w-[160px] md:max-w-[200px] text-md md:text-LG font-bold rounded-xl
                    shadow-xl p-2 md:p-4 mx-2  md:mx-4 cursor-pointer transition-all 
                    hover:opacity-100 hover:shadow-2xl ease-in-out
                    '>
                    BOOK APPOINTMENT
                </div>
            </a>
        </div>
    );
}

export default Header;