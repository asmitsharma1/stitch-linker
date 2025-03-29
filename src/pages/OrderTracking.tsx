
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Scissors, 
  Package, 
  CheckCircle, 
  Clock, 
  MapPin,
  Phone,
  MessageCircle,
  Ruler,
  Calendar,
  ArrowLeft
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data - in a real app this would come from an API
const ORDERS = {
  "ORD-1234": {
    id: "ORD-1234",
    tailor: {
      id: "1",
      name: "Elite Fashion Tailors",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2574",
      phone: "+1 (555) 123-4567",
      location: "123 Fashion Avenue, Downtown Fashion District"
    },
    item: "Business Suit",
    description: "Navy blue, two-piece business suit with satin lapels and custom monogram",
    price: 249.99,
    status: "in_progress",
    progress: 70,
    orderDate: "2023-07-15",
    estimatedDelivery: "2023-07-25",
    trackingId: "TC7890123456",
    events: [
      {
        status: "order_placed",
        date: "2023-07-15T10:30:00",
        description: "Order placed and confirmed"
      },
      {
        status: "measurement_confirmed",
        date: "2023-07-16T14:45:00",
        description: "Measurements confirmed by tailor"
      },
      {
        status: "fabric_picked",
        date: "2023-07-17T11:20:00",
        description: "Fabric picked up from customer"
      },
      {
        status: "cutting_started",
        date: "2023-07-18T09:15:00",
        description: "Cutting process started"
      },
      {
        status: "in_progress",
        date: "2023-07-20T16:30:00",
        description: "Stitching in progress"
      }
    ],
    nextEvents: [
      {
        status: "first_fitting",
        estimatedDate: "2023-07-22",
        description: "First fitting scheduled"
      },
      {
        status: "final_alterations",
        estimatedDate: "2023-07-24",
        description: "Final alterations and finishing"
      },
      {
        status: "ready_for_delivery",
        estimatedDate: "2023-07-25",
        description: "Ready for delivery or pickup"
      }
    ]
  }
};

const OrderTracking = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the order data based on the ID
  const order = id ? ORDERS[id as keyof typeof ORDERS] : null;
  
  if (!order) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
        <p className="text-gray-500 mb-6">The order you're looking for doesn't exist or has been removed.</p>
        <Link to="/dashboard">
          <Button>Back to Dashboard</Button>
        </Link>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "order_placed":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "measurement_confirmed":
        return <Ruler className="h-6 w-6 text-blue-500" />;
      case "fabric_picked":
        return <Package className="h-6 w-6 text-yellow-500" />;
      case "cutting_started":
      case "in_progress":
        return <Scissors className="h-6 w-6 text-tailor-500" />;
      case "first_fitting":
        return <Ruler className="h-6 w-6 text-green-500" />;
      case "final_alterations":
        return <Scissors className="h-6 w-6 text-tailor-700" />;
      case "ready_for_delivery":
        return <Package className="h-6 w-6 text-green-500" />;
      case "delivered":
        return <Truck className="h-6 w-6 text-green-700" />;
      default:
        return <Clock className="h-6 w-6 text-gray-500" />;
    }
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div>
      {/* Back Link */}
      <Link to="/dashboard" className="flex items-center text-tailor-600 hover:text-tailor-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Dashboard
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-tailor-800 mb-1">Order #{order.id}</h1>
          <p className="text-gray-500">{order.item}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 flex items-center">
            <div className="h-2 w-2 rounded-full bg-blue-500 mr-1.5"></div>
            In Progress
          </Badge>
          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300 flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {formatDate(order.orderDate)}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tracking Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress */}
          <Card>
            <CardHeader className="pb-0">
              <h2 className="text-xl font-semibold">Order Progress</h2>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Order Placed</span>
                  <span className="text-gray-500">Ready for Delivery</span>
                </div>
                <Progress value={order.progress} className="h-2" />
                <div className="text-right text-sm font-medium mt-2">
                  {order.progress}% Complete
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Estimated Delivery Date</p>
                  <p className="font-medium">{formatDate(order.estimatedDelivery)}</p>
                </div>
                <Link to={`/tailors/${order.tailor.id}`}>
                  <Button variant="outline">
                    <Scissors className="h-4 w-4 mr-2" />
                    Tailor Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader className="pb-0">
              <h2 className="text-xl font-semibold">Order Timeline</h2>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative space-y-8">
                {/* Vertical line */}
                <div className="absolute left-6 top-6 bottom-10 w-0.5 bg-gray-200"></div>

                {/* Completed events */}
                {order.events.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-tailor-100 border-2 border-tailor-500 mr-4 shrink-0">
                      {getStatusIcon(event.status)}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{event.description}</h3>
                      <p className="text-sm text-gray-500">{formatDateTime(event.date)}</p>
                    </div>
                  </div>
                ))}

                {/* Upcoming events - grayed out */}
                {order.nextEvents.map((event, index) => (
                  <div key={index} className="flex items-start opacity-60">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300 mr-4 shrink-0">
                      {getStatusIcon(event.status)}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{event.description}</h3>
                      <p className="text-sm text-gray-500">
                        Estimated: {formatDate(event.estimatedDate)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Details */}
          <Card>
            <CardHeader className="pb-0">
              <h2 className="text-xl font-semibold">Order Details</h2>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-medium">{formatDate(order.orderDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tracking ID</p>
                    <p className="font-medium">{order.trackingId}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Item</p>
                    <p className="font-medium">{order.item}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="font-medium">{order.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium">${order.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Tailor Info and Actions */}
        <div className="space-y-6">
          {/* Tailor Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img 
                    src={order.tailor.image} 
                    alt={order.tailor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{order.tailor.name}</h3>
                  <p className="text-sm text-gray-500">Your Tailor</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-sm">{order.tailor.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-sm">{order.tailor.phone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Order Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-tailor-600 hover:bg-tailor-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Tailor
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Fitting
                </Button>
                <Button variant="outline" className="w-full">
                  <Clock className="h-4 w-4 mr-2" />
                  Request Status Update
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you have any questions or concerns about your order, our customer support team is ready to help you.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
