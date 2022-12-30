import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];


const CardAndCharts = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className="flex flex-col ml-4 overflow-hidden border-2 rounded-md  border-gray-500">
                <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4  bg-gray-500 bg-opacity-50">
                    <p className="text-lg font-medium text-gray-300">Total earnings</p>
                    <p className="text-5xl font-bold text-gray-200">1287€
                        <span className="text-xl  text-gray-400"> /mo</span>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-8  bg-gray-600 bg-opacity-40 text-gray-100">
                    <ul className="self-stretch flex-1 space-y-2">
                        <li className="flex justify-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6  text-red-500 text-opacity-70">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li className="flex justify-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6  text-red-500 text-opacity-70">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li className="flex justify-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6  text-red-500 text-opacity-70">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                    </ul>
                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12  bg-red-500   text-gray-100">Sign up</button>
                </div>
            </div>
            <div>
                <div className="flex flex-col min-w-sm p-8 shadow-sm rounded-xl lg:p-9 bg-gray-500 bg-opacity-50 text-gray-100">
                    <div className="flex flex-col w-full">
                        <h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
                        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                            <div className="flex">
                                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-600">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-600">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                            </div>
                            <span className="text-gray-400">3 out of 5</span>
                        </div>
                        <p className="text-sm text-gray-400">861 global ratings</p>
                        <div className="flex flex-col mt-4">
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                                    <div className="bg-orange-300 h-4 w-5/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                                    <div className="bg-orange-300 h-4 w-4/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                                    <div className="bg-orange-300 h-4 w-3/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                                    <div className="bg-orange-300 h-4 w-2/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                                    <div className="bg-orange-300 h-4 w-1/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg  bg-gray-800 bg-opacity-60  text-gray-100 mt-3">
                        <div className="flex items-center justify-center px-4  bg-red-500  text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                                <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">7 500+</p>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg  bg-gray-800 bg-opacity-60  text-gray-100 mt-2">
                        <div className="flex items-center justify-center px-4  bg-red-500  text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                                <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">99,9 %</p>
                            <p>Uptime</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-opacity-50 bg-gray-500 rounded-xl'>
                <LineChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 16,
                        right: 40,
                        left: 3,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#F55353"
                        activeDot={{ r: 7 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#FCFFE7" />
                </LineChart>
            </div>

        </div>
    );
};

export default CardAndCharts;