import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Heart, MapPin, Ruler, Weight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import pet1 from "@/assets/pet-1.jpg";

const PetProfile = () => {
  const { id } = useParams();

  // Mock data - will be replaced with real data from database
  const pet = {
    id: 1,
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: "3 months",
    gender: "Male",
    weight: "15 lbs",
    height: "12 inches",
    image: pet1,
    location: "New York, NY",
    description: "Max is an adorable Golden Retriever puppy with a heart full of love and energy. He's playful, friendly, and gets along great with children and other pets. Max is fully vaccinated, microchipped, and ready to become part of your family. He loves playing fetch, going for walks, and cuddling on the couch after a fun day of adventure.",
    traits: ["Playful", "Friendly", "House-trained", "Good with kids", "Vaccinated"],
    postedDate: "2 days ago"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/pets">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pets
          </Button>
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Image */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "var(--card-shadow-hover)" }}>
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full aspect-square object-cover"
              />
              <button 
                className="absolute top-6 right-6 p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
                aria-label="Add to favorites"
              >
                <Heart className="h-6 w-6 text-primary" />
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold">{pet.name}</h1>
                <Badge className="bg-secondary text-secondary-foreground">
                  {pet.type}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-4">{pet.breed}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{pet.location}</span>
              </div>
            </div>

            {/* Quick Info */}
            <Card>
              <CardContent className="p-6 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Age</span>
                  </div>
                  <p className="font-semibold">{pet.age}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Weight className="h-4 w-4" />
                    <span>Weight</span>
                  </div>
                  <p className="font-semibold">{pet.weight}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Ruler className="h-4 w-4" />
                    <span>Height</span>
                  </div>
                  <p className="font-semibold">{pet.height}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm">Gender</p>
                  <p className="font-semibold">{pet.gender}</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Link to="/auth" className="block">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg"
                >
                  Request to Adopt
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full">
                Contact Owner
              </Button>
            </div>

            {/* Posted Date */}
            <p className="text-sm text-muted-foreground text-center">
              Posted {pet.postedDate}
            </p>
          </div>
        </div>

        {/* Description & Traits */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">About {pet.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {pet.description}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Traits</h2>
            <div className="flex flex-wrap gap-2">
              {pet.traits.map((trait, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PetProfile;
