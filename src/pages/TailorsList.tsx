
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, MapPin, Filter, Search, ArrowUpDown } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - in a real app this would come from an API
const TAILORS = [
  {
    id: "1",
    name: "Elite Fashion Tailors",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2574",
    rating: 4.8,
    reviewCount: 156,
    specialty: ["Suits", "Formal Wear"],
    location: "Downtown Fashion District",
    distance: "1.2 miles",
    price: "premium",
    availability: "2-3 days"
  },
  {
    id: "2",
    name: "Modern Tailoring Co.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=2670",
    rating: 4.6,
    reviewCount: 98,
    specialty: ["Casual Wear", "Shirts"],
    location: "Midtown Plaza",
    distance: "0.8 miles",
    price: "medium",
    availability: "1-2 days"
  },
  {
    id: "3",
    name: "Creative Stitches",
    image: "https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=2732",
    rating: 4.9,
    reviewCount: 214,
    specialty: ["Evening Wear", "Dresses"],
    location: "Westside Mall",
    distance: "2.5 miles",
    price: "premium",
    availability: "3-4 days"
  },
  {
    id: "4",
    name: "Precision Tailors",
    image: "https://images.unsplash.com/photo-1533471272889-d1dc5dd81fd6?q=80&w=2528",
    rating: 4.7,
    reviewCount: 132,
    specialty: ["Alterations", "Formal Wear"],
    location: "North Shopping Center",
    distance: "1.5 miles",
    price: "economy",
    availability: "Same day"
  },
  {
    id: "5",
    name: "Heritage Custom Tailoring",
    image: "https://images.unsplash.com/photo-1558234610-faa2c2cd3d5c?q=80&w=2670",
    rating: 4.9,
    reviewCount: 189,
    specialty: ["Suits", "Traditional Wear"],
    location: "East Village",
    distance: "3.1 miles",
    price: "premium",
    availability: "4-5 days"
  },
  {
    id: "6",
    name: "Stitch & Style",
    image: "https://images.unsplash.com/photo-1513434007132-441d8689c7f8?q=80&w=2658",
    rating: 4.5,
    reviewCount: 76,
    specialty: ["Casual Wear", "Alterations"],
    location: "South Market",
    distance: "0.7 miles",
    price: "economy",
    availability: "1-2 days"
  }
];

const TailorsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter and sort tailors
  const filteredTailors = TAILORS.filter((tailor) => {
    // Apply search filter
    const matchesSearch = tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tailor.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      tailor.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply price filter
    const matchesPrice = priceFilter ? tailor.price === priceFilter : true;
    
    // Apply specialty filter
    const matchesSpecialty = specialtyFilter 
      ? tailor.specialty.some(s => s.toLowerCase() === specialtyFilter.toLowerCase())
      : true;

    return matchesSearch && matchesPrice && matchesSpecialty;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
    if (sortBy === "price") {
      const priceValues = { economy: 1, medium: 2, premium: 3 };
      return priceValues[a.price as keyof typeof priceValues] - priceValues[b.price as keyof typeof priceValues];
    }
    return 0;
  });

  const getPriceLabel = (price: string) => {
    switch(price) {
      case "economy": return "Budget-friendly";
      case "medium": return "Mid-range";
      case "premium": return "Premium";
      default: return price;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-tailor-800 mb-2">Find Your Perfect Tailor</h1>
        <p className="text-gray-500">Browse and connect with skilled tailors in your area.</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8 border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tailors, specialties, or locations..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-40">
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Prices</SelectItem>
                  <SelectItem value="economy">Budget-friendly</SelectItem>
                  <SelectItem value="medium">Mid-range</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-40">
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  <SelectItem value="suits">Suits</SelectItem>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="casual wear">Casual Wear</SelectItem>
                  <SelectItem value="formal wear">Formal Wear</SelectItem>
                  <SelectItem value="alterations">Alterations</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-40">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                  <SelectItem value="price">Price (Low to High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          {filteredTailors.length} {filteredTailors.length === 1 ? "tailor" : "tailors"} found
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <ArrowUpDown className="h-4 w-4 mr-1" />
          <span>Sorted by: {sortBy === "rating" ? "Highest Rated" : sortBy === "distance" ? "Nearest" : "Price"}</span>
        </div>
      </div>

      {/* Tailors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTailors.map((tailor) => (
          <Card key={tailor.id} className="overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img
                src={tailor.image}
                alt={tailor.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-lg">{tailor.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 font-medium">{tailor.rating}</span>
                    </div>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{tailor.reviewCount} reviews</span>
                  </div>
                </div>
                <Badge variant="outline" className="bg-tailor-50 text-tailor-700 border-tailor-200">
                  {getPriceLabel(tailor.price)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start space-x-2 mb-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm">{tailor.location}</p>
                  <p className="text-xs text-gray-500">{tailor.distance} away</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {tailor.specialty.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>
              <p className="text-sm mt-2 text-gray-500">
                <span className="font-medium text-green-600">Available:</span> {tailor.availability}
              </p>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-between items-center">
                <Link to={`/tailors/${tailor.id}`}>
                  <Button variant="outline">View Profile</Button>
                </Link>
                <Link to={`/tailors/${tailor.id}`}>
                  <Button className="bg-tailor-600 hover:bg-tailor-700">Book Now</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredTailors.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4 text-gray-400">
            <Filter className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium mb-2">No tailors found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <Button 
            onClick={() => {
              setSearchTerm("");
              setPriceFilter("");
              setSpecialtyFilter("");
            }}
            variant="outline"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default TailorsList;
