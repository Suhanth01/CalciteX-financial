import React, { useCallback, useState } from 'react';
import { AiFillPieChart, AiOutlineDoubleRight, AiTwotoneMinusSquare } from 'react-icons/ai';
import { HiCurrencyDollar, HiUsers } from 'react-icons/hi2'
import { MdDialerSip } from 'react-icons/md'
import {FaSearchDollar} from 'react-icons/fa'
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`PV ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#FF3939"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const PieCharts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-5'>
            <div className=' lg:p-2 p-0 bg-base-100 rounded-xl col-span-3'>
                <div className='flex px-2 justify-between items-center'>
                    <h1 className='font-bold text-2xl'>AMU</h1>
                    <HiCurrencyDollar className='w-8 h-8 text-secondary'></HiCurrencyDollar>
                </div>
                <div className='flex justify-start items-center'>
                    <div style={{ width: '90%', height: 300 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#FF3939"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='md:flex flex-col justify-center items-center hidden'>
                        <div>
                            <h1 className='text-sm'> <AiTwotoneMinusSquare className='text-secondary w-6 h-6'></AiTwotoneMinusSquare> Equality</h1>
                            <p className='text-xl font-bold'>$280.77cr <span className='font-light'>(87%)</span></p>
                        </div>
                        <div>
                            <h1 className='text-sm'><AiTwotoneMinusSquare className='text-accent w-6 h-6'></AiTwotoneMinusSquare> Non Equality</h1>
                            <p className='text-xl font-bold'>$180.77cr <span className='font-light'>(67%)</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col gap-5 items-center justify-center col-span-2'>
                <div className='py-3 px-5 hover:bg-secondary bg-white hover:text-white text-dark cursor-pointer duration-300 hover:scale-105 shadow-lg shadow-red-300 rounded-xl flex justify-between items-center w-full hover:shadow-md'>
                    <div className='flex justify-start items-center gap-x-2'>
                        <HiUsers className='bg-accent text-secondary w-12 h-12 p-2 text-4xl rounded-xl'></HiUsers>
                        <div>
                            <p className='lg:text-md text-xs'>Number of Investors</p>
                            <h1 className='font-semibold text-2xl'>29,998</h1>
                        </div>
                    </div>
                    <AiOutlineDoubleRight className='text-2xl'></AiOutlineDoubleRight>
                </div>

                <div className='py-3 px-5 hover:bg-secondary bg-white hover:text-white text-dark cursor-pointer duration-300 hover:scale-105 shadow-lg shadow-red-300 rounded-xl text-dark flex justify-between items-center w-full hover:shadow-md'>
                    <div className='flex justify-start items-center gap-x-2'>
                        <MdDialerSip className='bg-accent text-secondary w-12 h-12 p-2 text-4xl rounded-xl'></MdDialerSip>
                        <div>
                            <p className='lg:text-md text-xs'>Sip Clients</p>
                            <h1 className='font-semibold text-2xl'>4.078</h1>
                        </div>
                    </div>
                    <AiOutlineDoubleRight className='text-2xl'></AiOutlineDoubleRight>
                </div>

                <div className='py-3 px-5 hover:bg-secondary bg-white hover:text-white text-dark cursor-pointer duration-300 hover:scale-105 shadow-lg shadow-red-300 rounded-xl flex justify-between items-center w-full hover:shadow-md'>
                    <div className='flex justify-start items-center gap-x-2'>
                        <FaSearchDollar className='bg-accent text-secondary w-12 h-12 p-2 text-4xl rounded-xl'></FaSearchDollar>
                        <div>
                            <p className='lg:text-md text-xs'>Sip amount in jun'22</p>
                            <h1 className='font-semibold text-2xl'>$1.22 cr</h1>
                        </div>
                    </div>
                    <AiOutlineDoubleRight className='text-2xl'></AiOutlineDoubleRight>
                </div>

                <div className='py-3 px-5 hover:bg-secondary bg-white hover:text-white text-dark cursor-pointer duration-300 hover:scale-105 shadow-lg shadow-red-300 rounded-xl flex justify-between items-center w-full hover:shadow-md'>
                    <div className='flex justify-start items-center gap-x-2'>
                        <AiFillPieChart className='bg-accent text-secondary w-12 h-12 p-2 text-4xl rounded-xl'></AiFillPieChart>
                        <div>
                            <p className='lg:text-md text-xs'>Sip count in jun'22</p>
                            <h1 className='font-semibold text-2xl'>4,035</h1>
                        </div>
                    </div>
                    <AiOutlineDoubleRight className='text-2xl'></AiOutlineDoubleRight>
                </div>
            </div>
        </div>
    );
};

export default PieCharts;