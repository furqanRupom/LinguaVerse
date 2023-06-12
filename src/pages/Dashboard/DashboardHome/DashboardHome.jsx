import { FaSignOutAlt, FaSignInAlt, FaUsers, FaGraduationCap, FaChartLine, FaCog } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import logo from "../../../assets/logo.png";
import { useAuth } from "../../../hooks/useAuth";
import { motion } from "framer-motion";
import { BarChart, Bar, PieChart, Pie, Legend, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FFBF00"];

const DashboardHome = () => {
  const { user } = useAuth();

  const sections = [
    {
      icon: FaSignOutAlt,
      title: "Total Logouts",
      value: "12",
      color: "indigo",
      increase: "+5%",
    },
    {
      icon: FaSignInAlt,
      title: "Total SignIn",
      value: "12",
      color: "green",
      increase: "+15%",
    },
    {
      icon: FaChartLine,
      title: "Progress",
      value: "80%",
      color: "blue",
      increase: "",
    },
    {
      icon: FaCog,
      title: "Settings",
      value: "",
      color: "purple",
      increase: "",
    },
    // Add more sections here
  ];

  const activityLogs = [
    { id: 1, icon: FaSignInAlt, title: "Logged In", timestamp: "2023-06-12 09:30:22" },
    { id: 2, icon: FaSignOutAlt, title: "Logged Out", timestamp: "2023-06-11 18:15:10" },
    { id: 3, icon: FaSignInAlt, title: "Logged In", timestamp: "2023-06-10 08:45:36" },
    // Add more activity logs here
  ];

  const activityData = [
    { title: "Logged In", value: activityLogs.filter((log) => log.title === "Logged In").length },
    { title: "Logged Out", value: activityLogs.filter((log) => log.title === "Logged Out").length },
    // Add more activity data here
  ];

  const totalViewsData = [
    { name: "Jan", views: 1000 },
    { name: "Feb", views: 1500 },
    { name: "Mar", views: 2000 },
    { name: "Apr", views: 1800 },
    { name: "May", views: 2500 },
    { name: "Jun", views: 2200 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className=" shadow-md py-4 px-6 flex items-center justify-between">
        <img src={logo} className="w-10 h-10" alt="Logo" />
        <div className="flex items-center">
        
          <motion.img
            src={user.photoURL}
            className="w-8 h-8 rounded-full object-cover"
            alt="Avatar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.displayName}!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className=" rounded-lg shadow-md p-6 flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center">
                <section.icon className={`w-8 h-8 text-${section.color}-500 mr-4`} />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
                  <p className="text-gray-600">{section.value}</p>
                </div>
              </div>
              <span className={`text-${section.color}-500 text-4xl font-bold`}>{section.increase}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Activity Progress</h2>
          <div className=" rounded-lg shadow-md">
            <BarChart width={350} height={300} data={activityData}>
              <Bar dataKey="value" fill="#66BFBF">
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Activity Breakdown</h2>
          <div className=" rounded-lg shadow-md">
            <PieChart width={400} height={300}>
              <Pie data={activityData} dataKey="value" nameKey="title" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </div>
        </div>
        <div className="mt-8 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Total Views</h2>
          <div className=" rounded-lg shadow-md">
            <BarChart width={400} height={300} data={totalViewsData}>
              <Bar dataKey="views" fill="#8884d8">
                {totalViewsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>

        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
