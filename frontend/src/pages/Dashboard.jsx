import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { FaExclamationTriangle, FaRupeeSign, FaClock } from 'react-icons/fa';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Dashboard = () => {
    const chartData = {
        labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
        datasets: [
            {
                label: 'Violations Detected',
                data: [12, 19, 3, 25, 22, 30, 15],
                borderColor: '#00f3ff',
                backgroundColor: 'rgba(0, 243, 255, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#050b14',
                pointBorderColor: '#00f3ff',
                pointBorderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(10, 22, 37, 0.9)',
                titleColor: '#fff',
                bodyColor: '#bbb',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
            }
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#6b7280' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#6b7280' }
            }
        }
    };

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-white">Live Monitoring</h2>
                    <p className="text-gray-400 mt-1">Traffic Enforcement Dashboard • HSR Layout, Sector 2</p>
                </div>
                <div className="flex gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-mono border border-green-500/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        SYSTEM ONLINE
                    </span>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Total Violations Today', value: '142', icon: <FaExclamationTriangle />, color: 'text-neon-red', border: 'border-neon-red/30' },
                    { title: 'Pending Approval', value: '28', icon: <FaClock />, color: 'text-orange-400', border: 'border-orange-400/30' },
                    { title: 'Challan Revenue', value: '₹ 84,500', icon: <FaRupeeSign />, color: 'text-neon-green', border: 'border-neon-green/30' },
                ].map((stat, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={stat.title}
                        className={`glass-panel p-6 border-l-4 ${stat.border} relative overflow-hidden`}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-sm font-medium tracking-wide">{stat.title}</p>
                                <h3 className="text-4xl font-bold text-white mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-lg bg-white/5 ${stat.color} text-xl`}>
                                {stat.icon}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-2 glass-panel p-6"
                >
                    <h3 className="text-lg font-semibold text-white mb-6">Violation Trends (Hourly)</h3>
                    <div className="h-[300px]">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </motion.div>

                {/* Recent Feed */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-6"
                >
                    <h3 className="text-lg font-semibold text-white mb-6">Recent Detections</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer">
                                <div className="w-16 h-12 bg-gray-700 rounded-md overflow-hidden relative">
                                    {/* Placeholder Img */}
                                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-xs text-gray-500">IMG</div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white text-sm font-medium">TRIPLE_RIDING</h4>
                                    <p className="text-xs text-neon-blue">KA 05 JK 334{item}</p>
                                </div>
                                <span className="text-xs text-gray-500 font-mono">10:4{i} AM</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
