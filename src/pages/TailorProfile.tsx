
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Clock, 
  Scissors, 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle,
  MessageCircle,
  Image,
  ThumbsUp,
  Award
} from "lucide-react";

// Mock data - in a real app this would come from an API
const TAILORS = {
  "1": {
    id: "1",
    name: "Elite Fashion Tailors",
    about: "With over 15 years of experience, Elite Fashion Tailors specializes in high-quality custom suits and formal wear. Our team of master tailors combines traditional craftsmanship with modern techniques to create perfect-fitting garments for any occasion.",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2574",
      "https://images.unsplash.com/photo-1534093607318-f025413f49cb?q=80&w=2574",
      "https://images.unsplash.com/photo-1619022373972-2a4031a854d8?q=80&w=2574",
      "https://images.unsplash.com/photo-1637225177329-57e928f6e2ad?q=80&w=2574"
    ],
    coverImage: "https://images.unsplash.com/photo-1605518219778-6d3b81fac274?q=80&w=2574",
    rating: 4.8,
    reviewCount: 156,
    specialty: ["Custom Suits", "Formal Wear", "Alterations", "Bespoke Tailoring"],
    location: "123 Fashion Avenue, Downtown Fashion District",
    distance: "1.2 miles",
    price: "premium",
    availability: "Mon-Sat: 9:00 AM - 6:00 PM",
    turnaroundTime: "7-10 days for custom pieces, 2-3 days for alterations",
    contactPhone: "+1 (555) 123-4567",
    contactEmail: "info@elitefashiontailors.com",
    services: [
      { name: "Custom Suit", price: "$799+", time: "10 days" },
      { name: "Dress Shirt", price: "$129+", time: "5 days" },
      { name: "Dress Alterations", price: "$99+", time: "3 days" },
      { name: "Suit Alterations", price: "$149+", time: "3 days" },
      { name: "Tuxedo Rental with Fitting", price: "$249+", time: "Available immediately" }
    ],
    reviews: [
      {
        id: "r1",
        user: "Michael Johnson",
        date: "2023-06-15",
        rating: 5,
        comment: "Absolutely amazing work on my wedding suit. The attention to detail was impeccable, and the fit is perfect. Would highly recommend to anyone looking for quality tailoring.",
        helpful: 24
      },
      {
        id: "r2",
        user: "Sarah Williams",
        date: "2023-05-22",
        rating: 4,
        comment: "Great experience overall. The suit came out beautifully, though the process took a little longer than expected. The quality makes up for the wait.",
        helpful: 17
      },
      {
        id: "r3",
        user: "David Chen",
        date: "2023-04-10",
        rating: 5,
        comment: "I've been coming to Elite for years, and they never disappoint. My most recent alterations were done perfectly and ahead of schedule. The team is always professional and friendly.",
        helpful: 32
      }
    ],
    achievements: [
      "Best Tailor Award 2022",
      "Featured in Fashion Weekly Magazine",
      "Certified Master Tailor",
      "Sustainable Practices Certificate"
    ]
  }
};

const TailorProfile = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // In a real app, you would fetch the tailor data based on the ID
  const tailor = TAILORS[id as keyof typeof TAILORS];
  
  if (!tailor) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Tailor Not Found</h2>
        <p className="text-gray-500 mb-6">The tailor you're looking for doesn't exist or has been removed.</p>
        <Link to="/tailors">
          <Button>Back to Tailors</Button>
        </Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.round(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 -mx-4 md:-mx-6 lg:-mx-8 mb-8 rounded-b-xl overflow-hidden">
        <img
          src={tailor.coverImage}
          alt={`${tailor.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{tailor.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {renderStars(tailor.rating)}
              <span className="ml-2 font-medium">{tailor.rating}</span>
              <span className="mx-1">•</span>
              <span>{tailor.reviewCount} reviews</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{tailor.distance} away</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Info */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">About Us</h2>
                  <p className="text-gray-700 mb-6">{tailor.about}</p>
                  
                  <h3 className="font-semibold mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tailor.specialty.map((spec, index) => (
                      <Badge key={index} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {tailor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-tailor-500 mr-2 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Location & Hours</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600">{tailor.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="text-gray-600">{tailor.availability}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-gray-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Turnaround Time</h3>
                        <p className="text-gray-600">{tailor.turnaroundTime}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">{tailor.contactPhone}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">{tailor.contactEmail}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="services">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Our Services</h2>
                  <div className="space-y-6">
                    {tailor.services.map((service, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{service.name}</h3>
                          <Badge variant="outline" className="bg-tailor-50 text-tailor-700 border-tailor-200">
                            {service.price}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Estimated time: {service.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Customer Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(tailor.rating)}
                      </div>
                      <span className="font-medium">{tailor.rating}</span>
                      <span className="mx-1">•</span>
                      <span className="text-gray-500">{tailor.reviewCount} reviews</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {tailor.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{review.user}</h3>
                            <p className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{review.comment}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{review.helpful} found this helpful</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="portfolio">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Our Work</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tailor.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-video rounded-md overflow-hidden cursor-pointer"
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${tailor.name} work sample ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Booking & Image */}
        <div>
          <div className="sticky top-6 space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <img
                  src={tailor.images[activeImageIndex]}
                  alt={tailor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
                <p className="text-gray-600 mb-6">
                  Ready to transform your wardrobe with custom-tailored clothing? Book an appointment with us today.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-tailor-600 hover:bg-tailor-700">
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Tailor
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold mb-4">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free initial consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free alterations for 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Premium quality materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorProfile;
