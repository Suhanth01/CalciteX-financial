import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 }
];


const TableAndChart = () => {

    return (
        <div>
            <div className='flex w-full justify-center items-center'>
                <div style={{ width: '25%', height: 330 }} className="bg-gray-500 bg-opacity-50 ml-4 rounded-lg">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data01}
                                dataKey="value"
                                cx={180}
                                cy={150}
                                outerRadius={60}
                                fill="#F55353"
                            />
                            <Pie
                                data={data02}
                                dataKey="value"
                                cx={180}
                                cy={150}
                                innerRadius={70}
                                outerRadius={90}
                                fill="#F2EBE9"
                                label
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="container p-2 mx-auto sm:p-4 w-3/4 text-gray-100">
                    <div className="flex flex-col overflow-x-auto text-xs">
                        <div className="flex text-left  bg-gray-700 rounded mb-1 bg-opacity-60">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" name="All" className="w-3 h-3 rounded-sm accent-violet-400" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">Sender</div>
                            <div className="flex-1 px-2 py-3 sm:p-3">Message</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
                        </div>
                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box0" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Tracy Kim</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">An cum minimum voluptua repudiandae, nec illum essent et. Id tibique voluptatum per, eos eu civibus mnesarchum intellegam. An mundi detracto usu, diceret deserunt lobortis te cum.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>5min ago</p>
                            </div>
                        </div>
                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Katherine Rojas</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">At nam diceret intellegam, diam delicatissimi eu nam. Vivendo adolescens dissentiet cum ex, fuisset percipit eum ne. Unum officiis invenire vix ex.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>37min ago</p>
                            </div>
                        </div>

                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box3" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Keaton Collins</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Vix an ullum fuisset, ad nominati intellegat signiferumque qui, vidit dolores rationibus id est. Quo ei assum option, ludus invenire dignissim et mea.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>3h ago</p>
                            </div>
                        </div>
                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box4" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Ana Stevenson</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Vis sanctus gubergren abhorreant ea, eu melius percipit legendos mei, vulputate temporibus qui ut. Eu eam sumo putent discere, id vim feugiat lobortis democritum, fabellas invidunt mnesarchum at duo.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>8h ago</p>
                            </div>
                        </div>
                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box5" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Elliott Mejia</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Pri habeo eligendi at, ex quidam probatus sed, ei cum mentitum mnesarchum. Ex est purto congue. Unum soluta tritani in eam, habemus percipit vim an. Duo ad tota voluptaria dissentias, an eum bonorum maiestatis, alia habeo imperdiet ex vix.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>yesterday</p>
                            </div>
                        </div>
                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box6" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Riley Nunez</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Con no error impedit definitionem, qui sanctus detraxit vulputate id. Et natum eligendi moderatius vis. Pro ea mazim nominati delicata, per ad melius vituperatoribus. Ad dolor signiferumque nam, eam justo adipisci argumentum ut.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>2 days ago</p>
                            </div>
                        </div>

                        <div className="flex border-b border-opacity-20  border-gray-700  bg-gray-500 bg-opacity-40">
                            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box11" />
                            </div>
                            <div className="w-32 px-2 py-3 sm:p-3">
                                <p>Kameron Waters</p>
                            </div>
                            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">No vel voluptua corrumpit, vim iudico ceteros imperdiet ex. An sea commune mediocrem, alii paulo ridens pro at, veri erant prompta id his.</div>
                            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block  text-gray-400">
                                <p>2 weeks ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableAndChart;