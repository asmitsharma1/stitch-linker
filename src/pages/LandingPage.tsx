
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Ruler, Package, Star, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Scissors className="h-8 w-8 text-tailor-500" />,
      title: "Expert Tailors",
      description: "Connect with skilled tailors specialized in various styles and fabrics."
    },
    {
      icon: <Ruler className="h-8 w-8 text-tailor-500" />,
      title: "Easy Measurements",
      description: "Upload your measurements or follow our simple guide to get accurate fits."
    },
    {
      icon: <Package className="h-8 w-8 text-tailor-500" />,
      title: "Pickup & Delivery",
      description: "Convenient doorstep pickup and delivery of fabric and finished clothes."
    },
    {
      icon: <Clock className="h-8 w-8 text-tailor-500" />,
      title: "Real-time Tracking",
      description: "Track your order status in real-time from fabric pickup to delivery."
    },
    {
      icon: <Star className="h-8 w-8 text-tailor-500" />,
      title: "Reviews & Ratings",
      description: "Read reviews and ratings to find the perfect tailor for your needs."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-tailor-500" />,
      title: "Secure Payments",
      description: "Enjoy safe and secure transactions with encrypted payment verification."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      content: "TailorConnect transformed my tailoring experience. The measurements were precise and my dress fits perfectly!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Business Professional",
      content: "Getting suits made has never been easier. The pick-up service saves me so much time and the quality is outstanding.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Fashion Designer",
      content: "As someone in the fashion industry, I appreciate the attention to detail. My clients love the results!",
      rating: 4
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to an email service
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thanks for subscribing! We'll keep you updated.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-tailor-700 to-ocean-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=2574')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6" />
              <span className="font-bold text-xl">TailorConnect</span>
            </div>
            <div className="space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tailor-700">
                  Login
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-white text-tailor-700 hover:bg-gray-100">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom Tailoring, <br />
              <span className="text-ocean-200">At Your Fingertips</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Connect with skilled tailors, share your measurements, and get your perfect fit delivered to your doorstep. Experience tailoring reimagined.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/tailors">
                <Button size="lg" className="bg-white text-tailor-700 hover:bg-gray-100 w-full sm:w-auto">
                  Find a Tailor
                </Button>
              </Link>
              <Link to="/measurements">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tailor-700 w-full sm:w-auto">
                  Upload Measurements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 mt-10">
            <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-xs card-hover">
              <div className="w-16 h-16 bg-tailor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tailor-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Tailor</h3>
              <p className="text-gray-600">Browse profiles, check ratings, and find the perfect tailor for your needs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-xs card-hover">
              <div className="w-16 h-16 bg-tailor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tailor-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Measurements</h3>
              <p className="text-gray-600">Upload your measurements or schedule a professional measurement session.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-xs card-hover">
              <div className="w-16 h-16 bg-tailor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tailor-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Order</h3>
              <p className="text-gray-600">Track your order in real-time and receive your perfectly tailored clothes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Why Choose TailorConnect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md card-hover">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-tailor-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md card-hover">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tailor-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Tailoring Experience?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join thousands of satisfied customers who have discovered the perfect fit with TailorConnect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/tailors">
              <Button size="lg" className="bg-white text-tailor-800 hover:bg-gray-100 w-full sm:w-auto">
                Get Started Now
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tailor-800 w-full sm:w-auto">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest tailoring trends and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tailor-500"
              required
            />
            <Button type="submit" className="bg-tailor-600 hover:bg-tailor-700">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tailor-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-6 w-6" />
                <span className="font-bold text-xl">TailorConnect</span>
              </div>
              <p className="text-gray-300">
                Connecting customers with tailors for a perfect fit, every time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/tailors" className="hover:text-white">Find Tailors</a></li>
                <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="/measurements" className="hover:text-white">Measurements</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">
                123 Tailor Street<br />
                Fashion District, FD 12345<br />
                support@tailorconnect.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TailorConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
