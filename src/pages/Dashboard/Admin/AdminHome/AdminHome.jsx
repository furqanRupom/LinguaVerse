

import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import SectionTitle from '../../../../components/SectionTitle';

const AdminDashboard = () => {
// Dummy data for charts
const barChartData = [
{ month: 'January', enrollment: 12 },
{ month: 'February', enrollment: 19 },
{ month: 'March', enrollment: 3 },
{ month: 'April', enrollment: 5 },
{ month: 'May', enrollment: 2 },
{ month: 'June', enrollment: 3 },
];

const pieChartData = [
{ language: 'English', value: 30 },
{ language: 'French', value: 25 },
{ language: 'German', value: 45 },
];

const lineChartData1 = [
{ day: 'Monday', instructors: 5 },
{ day: 'Tuesday', instructors: 10 },
{ day: 'Wednesday', instructors: 8 },
{ day: 'Thursday', instructors: 15 },
{ day: 'Friday', instructors: 12 },
];

const lineChartData2 = [
{ day: 'Monday', classes: 8 },
{ day: 'Tuesday', classes: 12 },
{ day: 'Wednesday', classes: 10 },
{ day: 'Thursday', classes: 14 },
{ day: 'Friday', classes: 9 },
];

const lineChartData3 = [
{ day: 'Monday', enrolledClasses: 4 },
{ day: 'Tuesday', enrolledClasses: 7 },
{ day: 'Wednesday', enrolledClasses: 5 },
{ day: 'Thursday', enrolledClasses: 9 },
{ day: 'Friday', enrolledClasses: 6 },
];

const chartVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1 },
};

return (
<div >
  <SectionTitle title="Admin's Home" />

  <div className="mt-8 mb-12">
    <h2 className="text-xl font-bold mb-4"></h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-green-200 p-4 rounded shadow">
        <div className="mb-2">Classes</div>
        <div className="h-4 bg-gray-200 rounded">
          <motion.div
            className="h-full bg-green-500 rounded"
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <span className="text-gray-500 text-sm">70%</span>
      </div>
      <div className="bg-teal-200 p-4 rounded shadow">
        <div className="mb-2">Instructors</div>
        <div className="h-4 bg-gray-200 rounded">
          <motion.div
            className="h-full bg-yellow-500 rounded"
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <span className="text-gray-500 text-sm">50%</span>
      </div>
      <div className="bg-blue-200 p-4 rounded shadow">
        <div className="mb-2">Enrolled Classes</div>
        <div className="h-4 bg-gray-200 rounded">
          <motion.div
            className="h-full bg-blue-500 rounded"
            initial={{ width: 0 }}
            animate={{ width: '90%' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <span className="text-gray-500 text-sm">90%</span>
      </div>
    </div>
  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="bg-green-200 p-4 rounded shadow">
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-bold mb-2">Instructors</h2>
        <p className="text-gray-500 mb-2">Chart displaying the number of instructors.</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineChartData1}>
            <Line type="monotone" dataKey="instructors" stroke="#8884d8" strokeWidth={5} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
    <div className="bg-teal-200 p-4 rounded shadow">
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-bold mb-2">Classes</h2>
        <p className="text-gray-500 mb-2">Chart displaying the number of classes.</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineChartData2}>
            <Line type="monotone" dataKey="classes" stroke="#82ca" strokeWidth={5} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
    <div className="bg-blue-200 p-4 rounded shadow">
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-bold mb-2">Enrolled Classes</h2>
        <p className="text-gray-500 mb-2">Chart displaying the number of enrolled classes.</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineChartData3}>
            <Line type="monotone" dataKey="enrolledClasses" stroke="#FFCE56" strokeWidth={5} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </div>

  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Instructors overview</h2>
    <div className="bg-rose-50 p-4 rounded shadow">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineChartData1}>
          <Line type="monotone" dataKey="instructors" stroke="#8884d8" strokeWidth={5} />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>

  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Classes overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-purple-200 p-4 rounded shadow">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieChartData} dataKey="value" nameKey="language" fill="#8884d8" label />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-indigo-200 p-4 rounded shadow">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieChartData} dataKey="value" nameKey="language" fill="#82ca9d" label />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-cyan-200 p-4 rounded shadow">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieChartData} dataKey="value" nameKey="language" fill="#82c" label />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>

</div>
);
};

export default AdminDashboard;