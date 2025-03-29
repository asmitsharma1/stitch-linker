
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Ruler, 
  Upload, 
  Camera, 
  Info, 
  Save, 
  HelpCircle,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  User
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MeasurementForm = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [measurementName, setMeasurementName] = useState("");
  const [measurementType, setMeasurementType] = useState("casual");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with measurements");
    // In a real app, you would save measurements to the database
    setFormSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const renderTooltip = (content: string) => (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full">
            <HelpCircle className="h-4 w-4 text-gray-400" />
            <span className="sr-only">Info</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-tailor-800 mb-2">Your Measurements</h1>
        <p className="text-gray-500">Save and manage your measurements for the perfect fit.</p>
      </div>

      {formSubmitted && (
        <div className="mb-8 bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
          <div>
            <h3 className="font-medium text-green-800">Measurements Saved Successfully!</h3>
            <p className="text-green-700 text-sm mt-1">
              Your measurements have been saved and can be used when ordering from tailors.
            </p>
          </div>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full md:w-auto">
          <TabsTrigger value="manual">
            <Ruler className="h-4 w-4 mr-2" />
            Manual Entry
          </TabsTrigger>
          <TabsTrigger value="upload">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </TabsTrigger>
          <TabsTrigger value="guide">
            <Info className="h-4 w-4 mr-2" />
            Measurement Guide
          </TabsTrigger>
        </TabsList>

        {/* Manual Entry */}
        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle>Manual Measurements Entry</CardTitle>
              <CardDescription>
                Enter your measurements manually. Use a measuring tape for accuracy.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleFormSubmit}>
              <CardContent className="space-y-6">
                {/* Measurement Profile Info */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="measurementName">Measurement Profile Name</Label>
                    <Input 
                      id="measurementName" 
                      placeholder="e.g., My Formal Wear"
                      value={measurementName}
                      onChange={(e) => setMeasurementName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="measurementType">Clothing Type</Label>
                    <Select value={measurementType} onValueChange={setMeasurementType}>
                      <SelectTrigger id="measurementType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="formal">Formal Wear</SelectItem>
                        <SelectItem value="casual">Casual Wear</SelectItem>
                        <SelectItem value="traditional">Traditional Wear</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Measurement Notice */}
                <div className="bg-tailor-50 border border-tailor-200 rounded-md p-4 flex items-start">
                  <AlertCircle className="h-5 w-5 text-tailor-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="font-medium text-tailor-800">For Best Results</h3>
                    <p className="text-tailor-700 text-sm mt-1">
                      Have someone else take your measurements when possible. Stand naturally with arms relaxed at your sides.
                    </p>
                  </div>
                </div>

                {/* Upper Body Measurements */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Upper Body Measurements</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="chest">Chest/Bust (inches)</Label>
                        {renderTooltip("Measure around the fullest part of your chest/bust, keeping the tape parallel to the floor.")}
                      </div>
                      <Input id="chest" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="shoulders">Shoulders (inches)</Label>
                        {renderTooltip("Measure from the end of one shoulder to the end of the other shoulder.")}
                      </div>
                      <Input id="shoulders" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="waist">Waist (inches)</Label>
                        {renderTooltip("Measure around your natural waistline, which is the narrowest part of your torso.")}
                      </div>
                      <Input id="waist" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="sleeves">Sleeve Length (inches)</Label>
                        {renderTooltip("Measure from the shoulder seam to your wrist bone with your arm slightly bent.")}
                      </div>
                      <Input id="sleeves" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                  </div>
                </div>

                {/* Lower Body Measurements */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Lower Body Measurements</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="hips">Hips (inches)</Label>
                        {renderTooltip("Measure around the fullest part of your hips, usually about 8 inches below your waist.")}
                      </div>
                      <Input id="hips" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="inseam">Inseam (inches)</Label>
                        {renderTooltip("Measure from the crotch seam to the bottom of the ankle, along the inside of the leg.")}
                      </div>
                      <Input id="inseam" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="outseam">Outseam (inches)</Label>
                        {renderTooltip("Measure from the top of the waistband to the bottom of the ankle, along the outside of the leg.")}
                      </div>
                      <Input id="outseam" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="thigh">Thigh (inches)</Label>
                        {renderTooltip("Measure around the fullest part of your thigh.")}
                      </div>
                      <Input id="thigh" type="number" placeholder="0.0" step="0.1" required />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any special considerations or details about your measurements..." 
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline">Reset</Button>
                <Button type="submit" className="bg-tailor-600 hover:bg-tailor-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Measurements
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Upload */}
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Measurements</CardTitle>
              <CardDescription>
                Upload your existing measurement sheet or photos of you being measured.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <Upload className="h-10 w-10 text-tailor-500 mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Upload Measurement Sheet</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Upload an existing measurement sheet in PDF, JPG, or PNG format.
                  </p>
                  <Button variant="outline" className="mx-auto">Choose File</Button>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <Camera className="h-10 w-10 text-tailor-500 mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Take Measurement Photos</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Capture photos while being measured for accurate results.
                  </p>
                  <Button variant="outline" className="mx-auto">Take Photos</Button>
                </div>
              </div>

              {/* Professional Measurement Request */}
              <Card className="bg-tailor-50 border-tailor-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <User className="h-10 w-10 text-tailor-600 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Request Professional Measurement</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        Not sure about your measurements? Request a professional tailor to visit you and take accurate measurements.
                      </p>
                      <Button className="bg-tailor-600 hover:bg-tailor-700">
                        Request Professional <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Measurement Guide */}
        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle>How to Take Your Measurements</CardTitle>
              <CardDescription>
                Follow this guide to ensure accurate measurements for perfectly fitted clothes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">What You'll Need</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A flexible measuring tape (cloth or plastic)</li>
                  <li>A friend to help (recommended for accuracy)</li>
                  <li>Well-fitting clothes or minimal clothing for accuracy</li>
                  <li>A mirror to ensure proper measuring tape placement</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">General Tips</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stand in a natural, relaxed position</li>
                  <li>Keep the measuring tape snug but not tight</li>
                  <li>Measure twice for accuracy</li>
                  <li>Round to the nearest 0.25 inch</li>
                  <li>Wear similar undergarments as you would with the final garment</li>
                </ul>
              </div>

              {/* Measurement Guide Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chest Measurement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-3">Chest/Bust Measurement</h3>
                    <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1619022373972-2a4031a854d8?q=80&w=500"
                        alt="Chest measurement"
                        className="max-h-full rounded-md"
                      />
                    </div>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Stand with arms relaxed at your sides</li>
                      <li>Measure around the fullest part of your chest/bust</li>
                      <li>Keep the tape parallel to the floor</li>
                      <li>Breathe normally while taking this measurement</li>
                    </ol>
                  </CardContent>
                </Card>

                {/* Waist Measurement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-3">Waist Measurement</h3>
                    <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1634478770021-71d1d283c5cd?q=80&w=500"
                        alt="Waist measurement"
                        className="max-h-full rounded-md"
                      />
                    </div>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Find your natural waistline (the narrowest part)</li>
                      <li>Usually located about 1 inch above your navel</li>
                      <li>Measure around, keeping the tape parallel to the floor</li>
                      <li>Don't pull the tape too tight or hold your breath</li>
                    </ol>
                  </CardContent>
                </Card>

                {/* Shoulder Measurement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-3">Shoulder Measurement</h3>
                    <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1483118714900-540cf339fd46?q=80&w=500"
                        alt="Shoulder measurement"
                        className="max-h-full rounded-md"
                      />
                    </div>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Measure from the end of one shoulder to the other</li>
                      <li>The end of the shoulder is where it meets the arm</li>
                      <li>The tape should go across your upper back</li>
                      <li>Keep your shoulders relaxed, not hunched or pushed back</li>
                    </ol>
                  </CardContent>
                </Card>

                {/* Sleeve Measurement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-3">Sleeve Length Measurement</h3>
                    <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500"
                        alt="Sleeve measurement"
                        className="max-h-full rounded-md"
                      />
                    </div>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Bend your arm slightly (about 30 degrees)</li>
                      <li>Measure from shoulder seam to just past your wrist bone</li>
                      <li>The tape should follow the outside curve of your arm</li>
                      <li>For short sleeves, measure to where you want the sleeve to end</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button className="bg-tailor-600 hover:bg-tailor-700" onClick={() => setActiveTab("manual")}>
                  Start Measuring Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MeasurementForm;
