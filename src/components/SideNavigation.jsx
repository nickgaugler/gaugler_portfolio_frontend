import { Link, useLocation } from 'react-router-dom'
// import logoImage from "../assets/images/logo.png"
import {
  Github,
  Linkedin,
  FileText,
} from 'lucide-react';

const Sidebar = ({ navItems }) => {
  // We use useLocation() to determine the current path and highlight the active link.
  const location = useLocation();
  const excludePaths = ['/'];

  if (excludePaths.includes(location.pathname)) {// || location.pathname.startsWith('/code/')) {
    return null;
  }

  return (
    <aside className="w-full md:w-64 bg-gray-800 text-white shadow-xl md:flex md:flex-col md:justify-between p-4 md:p-8 rounded-lg md:rounded-l-none md:rounded-r-3xl m-4 md:m-0 md:ml-4">
      <div className="flex flex-col h-full">
        {/* Profile Header Section */}
        <div className="flex items-center space-x-4 mb-8">
          <div
            className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-xl font-bold text-white shadow-lg"
          ><Link to='/'>
            NG
          </Link>
          </div>
          <h1 className="text-xl font-bold">Nick Gaugler</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium text-lg">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          {/* Replace with your actual URLs */}
          <a href="https://github.com/nickgaugler/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nickgaugler-code-interviews/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
            <FileText size={24} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
