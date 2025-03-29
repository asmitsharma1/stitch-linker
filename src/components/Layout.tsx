
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="bg-tailor-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">TailorConnect</h3>
              <p className="text-sm text-gray-300">
                Connecting customers with tailors for a perfect fit, every time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/tailors" className="hover:text-white">Find Tailors</a></li>
                <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-sm text-gray-300">
                support@tailorconnect.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TailorConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
