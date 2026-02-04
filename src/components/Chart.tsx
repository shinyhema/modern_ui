import { useState } from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

const Chart = () => {
  const [activeBar, setActiveBar] = useState<number | null>(null);
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  const data = [
    { month: 'Jan', value: 65, color: 'bg-blue-500' },
    { month: 'Feb', value: 78, color: 'bg-cyan-500' },
    { month: 'Mar', value: 52, color: 'bg-teal-500' },
    { month: 'Apr', value: 90, color: 'bg-green-500' },
    { month: 'May', value: 85, color: 'bg-emerald-500' },
    { month: 'Jun', value: 95, color: 'bg-lime-500' },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <section id="chart" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Interactive Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visualize your data with beautiful, interactive charts
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Monthly Performance
              </h3>
              <p className="text-gray-600">Growth metrics over the last 6 months</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setChartType('bar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  chartType === 'bar'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                Bar
              </button>
              <button
                onClick={() => setChartType('line')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  chartType === 'line'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Line
              </button>
            </div>
          </div>

          {chartType === 'bar' ? (
            <div className="relative h-80">
              <div className="absolute inset-0 flex items-end justify-around gap-4 pb-12">
                {data.map((item, index) => {
                  const height = (item.value / maxValue) * 100;
                  const isActive = activeBar === index;

                  return (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-3 group cursor-pointer"
                      onMouseEnter={() => setActiveBar(index)}
                      onMouseLeave={() => setActiveBar(null)}
                    >
                      <div
                        className={`relative w-full rounded-t-lg transition-all duration-500 ${
                          item.color
                        } ${
                          isActive ? 'opacity-100 shadow-2xl scale-105' : 'opacity-80'
                        }`}
                        style={{
                          height: `${height}%`,
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {isActive && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap animate-fade-in">
                            {item.value}%
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="relative h-80">
              <svg className="w-full h-full" viewBox="0 0 600 300">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {data.map((item, index) => {
                  const x = (index / (data.length - 1)) * 500 + 50;
                  const y = 270 - (item.value / maxValue) * 200;
                  const isActive = activeBar === index;

                  return (
                    <g key={index}>
                      <circle
                        cx={x}
                        cy={y}
                        r={isActive ? 8 : 5}
                        fill="url(#lineGradient)"
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setActiveBar(index)}
                        onMouseLeave={() => setActiveBar(null)}
                      />
                      {isActive && (
                        <>
                          <text
                            x={x}
                            y={y - 20}
                            textAnchor="middle"
                            className="text-sm font-semibold fill-gray-900 animate-fade-in"
                          >
                            {item.value}%
                          </text>
                          <line
                            x1={x}
                            y1={y + 8}
                            x2={x}
                            y2={280}
                            stroke="#e5e7eb"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                        </>
                      )}
                      <text
                        x={x}
                        y={295}
                        textAnchor="middle"
                        className="text-sm fill-gray-600"
                      >
                        {item.month}
                      </text>
                    </g>
                  );
                })}

                <path
                  d={`M ${data.map((item, index) => {
                    const x = (index / (data.length - 1)) * 500 + 50;
                    const y = 270 - (item.value / maxValue) * 200;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d={`M ${data.map((item, index) => {
                    const x = (index / (data.length - 1)) * 500 + 50;
                    const y = 270 - (item.value / maxValue) * 200;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')} L 550 270 L 50 270 Z`}
                  fill="url(#areaGradient)"
                />
              </svg>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="text-sm text-gray-600 mb-1">Average Growth</div>
              <div className="text-3xl font-bold text-blue-600">77.5%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="text-sm text-gray-600 mb-1">Peak Performance</div>
              <div className="text-3xl font-bold text-green-600">95%</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
              <div className="text-sm text-gray-600 mb-1">Trend</div>
              <div className="text-3xl font-bold text-orange-600">+18%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
