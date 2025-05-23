import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Mon', emails: 12, urls: 8, websites: 5 },
  { name: 'Tue', emails: 19, urls: 10, websites: 7 },
  { name: 'Wed', emails: 15, urls: 12, websites: 9 },
  { name: 'Thu', emails: 17, urls: 15, websites: 8 },
  { name: 'Fri', emails: 21, urls: 18, websites: 11 },
  { name: 'Sat', emails: 9, urls: 7, websites: 4 },
  { name: 'Sun', emails: 6, urls: 5, websites: 3 },
];

const DetectionChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEmails" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b72fb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b72fb" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorUrls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8c6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#14b8c6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorWebsites" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              border: 'none',
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: 15 }}
            iconType="circle"
            iconSize={8}
          />
          <Area
            type="monotone"
            dataKey="emails"
            name="Phishing Emails"
            stroke="#3b72fb"
            fillOpacity={1}
            fill="url(#colorEmails)"
          />
          <Area
            type="monotone"
            dataKey="urls"
            name="Malicious URLs"
            stroke="#14b8c6"
            fillOpacity={1}
            fill="url(#colorUrls)"
          />
          <Area
            type="monotone"
            dataKey="websites"
            name="Fake Websites"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorWebsites)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DetectionChart;