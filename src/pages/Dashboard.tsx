
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Ruler, 
  User, 
  Clock, 
  CheckCircle, 
  Scissors, 
  AlertCircle,
  PlusCircle,
  Star
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Mock data - in a real app this would come from an API
  const orders = [
    {
      id: "ORD-1234",
      tailor: "Elite Fashion Tailors",
      item: "Business Suit",
      status: "in_progress",
      progress: 70,
      date: "2023-07-15",
      delivery: "2023-07-25",
      price: 249.99
    },
    {
      id: "ORD-1235",
      tailor: "Creative Stitches",
      item: "Evening Gown",
      status: "delivered",
      progress: 100,
      date: "2023-06-10",
      delivery: "2023-06-20",
      price: 349.99
    },
    {
      id: "ORD-1236",
      tailor: "Modern Tailoring Co.",
      item: "Casual Shirt (3)",
      status: "pending",
      progress: 20,
      date: "2023-07-18",
      delivery: "2023-07-28",
      price: 149.99
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Pending</Badge>;
      case "in_progress":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">In Progress</Badge>;
      case "ready":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Ready</Badge>;
      case "delivered":
        return <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">Delivered</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "in_progress":
        return <Scissors className="h-5 w-5 text-blue-500" />;
      case "ready":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "delivered":
        return <Package className="h-5 w-5 text-gray-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-tailor-800">My Dashboard</h1>
          <p className="text-gray-500">Welcome back! Manage your orders and measurements.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/tailors">
            <Button className="bg-tailor-600 hover:bg-tailor-700">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Order
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-tailor-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-tailor-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Orders</p>
                <p className="text-2xl font-bold text-tailor-800">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-ocean-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-ocean-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed Orders</p>
                <p className="text-2xl font-bold text-tailor-800">7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Ruler className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Saved Measurements</p>
                <p className="text-2xl font-bold text-tailor-800">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Favorite Tailors</p>
                <p className="text-2xl font-bold text-tailor-800">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <h2 className="text-xl font-bold mb-4 text-tailor-800">Recent Orders</h2>
      <div className="space-y-6 mb-8">
        {orders.map((order) => (
          <Card key={order.id} className="overflow-hidden card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{order.item}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Scissors className="h-4 w-4 mr-1" />
                    {order.tailor}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    {getStatusBadge(order.status)}
                  </div>
                  <p className="text-sm mt-1 font-medium">${order.price}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Order Progress</span>
                  <span>{order.progress}%</span>
                </div>
                <Progress value={order.progress} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Order Date</p>
                  <p>{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Estimated Delivery</p>
                  <p>{new Date(order.delivery).toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm text-gray-500">Order #{order.id}</p>
                <div className="flex space-x-2">
                  <Link to={`/order-tracking/${order.id}`}>
                    <Button variant="outline" size="sm">Track Order</Button>
                  </Link>
                  {order.status === "delivered" && (
                    <Button size="sm" className="bg-tailor-600 hover:bg-tailor-700">Review</Button>
                  )}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Saved Measurements */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-tailor-800">Saved Measurements</h2>
        <Link to="/measurements">
          <Button variant="outline" size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-tailor-100 p-3 rounded-full">
              <User className="h-6 w-6 text-tailor-600" />
            </div>
            <div>
              <h3 className="font-medium">Personal Measurements</h3>
              <p className="text-sm text-gray-500">Updated 3 weeks ago</p>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t px-6 py-3">
            <Link to="/measurements" className="text-tailor-600 hover:text-tailor-700 text-sm font-medium">
              View Details
            </Link>
          </CardFooter>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-ocean-100 p-3 rounded-full">
              <User className="h-6 w-6 text-ocean-600" />
            </div>
            <div>
              <h3 className="font-medium">Formal Suit Measurements</h3>
              <p className="text-sm text-gray-500">Updated 1 month ago</p>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t px-6 py-3">
            <Link to="/measurements" className="text-tailor-600 hover:text-tailor-700 text-sm font-medium">
              View Details
            </Link>
          </CardFooter>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium">Casual Wear Measurements</h3>
              <p className="text-sm text-gray-500">Updated 2 months ago</p>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t px-6 py-3">
            <Link to="/measurements" className="text-tailor-600 hover:text-tailor-700 text-sm font-medium">
              View Details
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
