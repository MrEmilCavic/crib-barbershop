import profileimg from './util/001.jpg';

function About () {
    return(
        <div id='about' className='w-screen flex flex-col items-center bg-bglight 
             py-4 md:py-8'> 
            <p className='font-baskerville tracking-wide py-12 md:py-24 md:mb-24 font-bold text-2xl md:text-8xl text-center'>
                No school like old school
            </p>
            <div className='flex items-center justify-center gap-4 mb-8'>
                    <div className='h-1 w-16 md:w-32 bg-text-primary rounded-2xl'></div>
                    <p className="font-baskerville font-bold text-4xl text-center">The Barber</p>
                    <div className='h-1 w-16 md:w-32 bg-text-primary rounded-2xl'></div>
                </div>
            <div className='group relative bg-cover bg-center flex flex-col justify-start items-end 
                rounded-lg text-bglight md:mb-24
                md:min-h-[400px] h-auto w-[360px] md:w-[70%] max-w-[1000px] shadow-xl overflow-hidden'
                style={{ backgroundImage: `url(${profileimg})`}}>
                    <div className='flex flex-col bg-text-primary bg-opacity-50 items-end w-[60%] 
                        p-2 md:p-4 m-4 md:m-8 rounded-xl font-bold font-baskerville text-lg 
                        md:text-4xl tracking-wider
                        group-hover:opacity-0 transition-all ease-in delay-400 duration-500'>
                        <p className ='flex flex-row justify-end leading-relaxed'>
                        "I have made my long-life passion my craft."
                        </p>
                        <p className='flex flex-row justify-end
                            '>
                            - Iulian
                        </p>
                    </div>
                    <div className='absolute flex flex-col justify-center inset-0 bg-black text-white
                        text-sm md:text-2xl rounded-lg w-full h-full opacity-0 p-2 md:p-24
                        translate-y-full group-hover:opacity-80 group-hover:translate-y-0 transition-all
                        duration-500 ease-in font-montserrat font-bold leading-loose'>
                        Developing my barber skills since I was a child, I blend old school looks
                        and techniques with modern, fresh styles. Together I create a
                        look unique to every client tailored to their personality. Let's create the
                        ideal look for you! 
                    </div>
            </div>            
        </div>
    );
};

export default About;