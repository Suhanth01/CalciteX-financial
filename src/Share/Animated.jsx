import React, { useEffect, useState } from 'react';

const Animated = () => {
    const [angle, setAngle] = useState(0);
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered) {
            interval = setInterval(() => {
                setAngle((angle) => (angle + 1) % 360);
                setAngle1((angle) => (angle - 2) % 360);
                setAngle2((angle) => (angle + 2) % 360);
            }, 30);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    const style = {
        transform: `rotate(${angle}deg)`,
    };
    const style1 = {
        transform: `rotate(${angle1}deg)`,
    };
    const style2 = {
        transform: `rotate(${angle2}deg)`,
    };
    return (
        <div className="animated-circle">
            <div className='lg:w-11/12 lg:block mx-auto'>
                <section className="p-6 my-6  bg-gray-700 rounded-xl bg-opacity-50  text-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-500 bg-opacity-50  text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-violet-500 bg-gradient-to-r from-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                    <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                    <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                    <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">200</p>
                                <p className="capitalize">Orders</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-500 bg-opacity-50  text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-violet-500 bg-gradient-to-r from-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                    <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                    <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                    <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                    <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">7500</p>
                                <p className="capitalize">New customers</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-500 bg-opacity-50  text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-violet-500 bg-gradient-to-r from-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                    <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                    <rect width="32" height="32" x="80" y="264"></rect>
                                    <rect width="32" height="32" x="240" y="128"></rect>
                                    <rect width="32" height="32" x="136" y="168"></rect>
                                    <rect width="32" height="32" x="400" y="264"></rect>
                                    <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">172%</p>
                                <p className="capitalize">Growth</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-500 bg-opacity-50  text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-violet-500 bg-gradient-to-r from-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                    <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">17%</p>
                                <p className="capitalize">Bounce rate</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div
                className="animated-circle bg-gray-400 w-11/12 mx-auto h-[500px] my-5 rounded-xl bg-opacity-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='flex justify-center gap-5 items-center h-full '>
                    <div>
                        <div className="circle shadow-2xl shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 bg-violet-700 bg-gradient-to-r from-red-400 bg-opacity-60 w-52 h-52 rounded-full" style={style2} ><img src="https://cdn-icons-png.flaticon.com/512/192/192360.png?w=740&t=st=1672145418~exp=1672146018~hmac=c57760c3da5c181d740d4e531ba7530f4aca256be8b43d5e0192ee0e675e2fe3" alt="" className='overflow-hidden opacity-50 h-52 w-52 rounded-full' /></div>

                        <div className="shadow-2xl flex justify-center items-center shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 circle bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 w-24 h-24 rounded-full" style={style} ><img src="https://cdn-icons-png.flaticon.com/512/292/292151.png?w=740&t=st=1672145692~exp=1672146292~hmac=f27f37c70f18679e6c2bee969d487695963deb3891af13dd760c7e6a5227ad55" alt="" className='overflow-hidden opacity-50 h-20 w-20 rounded-full' /></div>

                        <div className="circle flex justify-center items-center shadow-2xl shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 w-28 h-28 rounded-full" style={style1} ><img src="https://cdn-icons-png.flaticon.com/512/929/929103.png?w=740&t=st=1672146066~exp=1672146666~hmac=732ea3cef6cf851a576e4cd58d91c32128e015f28c7509c1fa0d89b5d75dff57" alt="" className='overflow-hidden opacity-50 h-20 w-20 rounded-full' /></div>
                    </div>

                    <div className="circle flex justify-center items-center shadow-2xl shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 w-28 h-28 rounded-full" style={style1} ><img src="https://cdn-icons-png.flaticon.com/512/929/929103.png?w=740&t=st=1672146066~exp=1672146666~hmac=732ea3cef6cf851a576e4cd58d91c32128e015f28c7509c1fa0d89b5d75dff57" alt="" className='overflow-hidden opacity-50 h-20 w-20 rounded-full' /></div>

                  

                    <div className="circle bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 flex justify-center items-center w-80 h-80  rounded-full" style={style2} ><img src="https://img.freepik.com/free-vector/business-infographic-template-with-3d-circle-design-text-space_1017-39517.jpg?w=740&t=st=1672145124~exp=1672145724~hmac=f0e78dcc3f957b38552d6abb9b9571865fa4197f49cb25138f3e510315d62829" alt="" className='overflow-hidden opacity-50 h-72 w-72 rounded-full' /></div>

                    <div className="shadow-2xl shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 circle bg-gray-300 bg-gradient-to-r from-red-500  bg-opacity-60 w-40 h-40 flex justify-center items-center rounded-full" style={style} ><img src="https://cdn-icons-png.flaticon.com/512/556/556009.png?w=740&t=st=1672146262~exp=1672146862~hmac=a7712753dd62d0504a53d8359de724400591a8665befd20f260092b94218df0e" alt="" className='overflow-hidden opacity-50 h-32 w-32 rounded-full' /></div>

                    <div className="shadow-2xl flex justify-center items-center shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 circle bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 w-24 h-24 rounded-full" style={style} ><img src="https://cdn-icons-png.flaticon.com/512/292/292151.png?w=740&t=st=1672145692~exp=1672146292~hmac=f27f37c70f18679e6c2bee969d487695963deb3891af13dd760c7e6a5227ad55" alt="" className='overflow-hidden opacity-50 h-20 w-20 rounded-full' /></div>
                    <div>
                        <div className="circle shadow-2xl shadow-gray-400 flex justify-center items-center hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 bg-violet-700 bg-gradient-to-r from-red-400 bg-opacity-60 w-52 h-52 rounded-full" style={style2} ><img src="https://cdn-icons-png.flaticon.com/512/192/192360.png?w=740&t=st=1672145418~exp=1672146018~hmac=c57760c3da5c181d740d4e531ba7530f4aca256be8b43d5e0192ee0e675e2fe3" alt="" className='overflow-hidden opacity-50 h-32 w-32 rounded-full' /></div>
                        <div className="shadow-2xl flex justify-center items-center shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 circle bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 w-24 h-24 rounded-full" style={style} ><img src="https://cdn-icons-png.flaticon.com/512/386/386911.png?w=740&t=st=1672145601~exp=1672146201~hmac=95c01443e13ca1afd62e1ea669830dc8b5ea5e8363d51caacc5975214b85573b" alt="" className='overflow-hidden opacity-50 h-20 w-20 rounded-full' /></div>
                        <div className="shadow-2xl flex justify-center items-center shadow-gray-400 hover:bg-red-500 hover:bg-gradient-to-l hover:from-violet-500 hover:bg-opacity-60 duration-500 circle bg-red-500 bg-gradient-to-r from-violet-500 bg-opacity-60 w-24 h-24 rounded-full" style={style} ><img src="https://cdn-icons-png.flaticon.com/512/292/292151.png?w=740&t=st=1672145692~exp=1672146292~hmac=f27f37c70f18679e6c2bee969d487695963deb3891af13dd760c7e6a5227ad55" alt="" className='overflow-hidden opacity-50 h-20 w-20 rounded-full' /></div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Animated;