import Navbar from "@/components/Navbar";
import PetCard from "@/components/PetCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";
import pet4 from "@/assets/pet-4.jpg";
import pet5 from "@/assets/pet-5.jpg";

const Pets = () => {
  const allPets = [
    {
      id: 1,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: "3 months",
      gender: "Male",
      image: pet1,
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Luna",
      type: "Cat",
      breed: "Tabby",
      age: "2 years",
      gender: "Female",
      image: pet2,
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      name: "Charlie",
      type: "Dog",
      breed: "Beagle",
      age: "1 year",
      gender: "Male",
      image: pet3,
      location: "Chicago, IL"
    },
    {
      id: 4,
      name: "Bella",
      type: "Cat",
      breed: "Persian",
      age: "3 years",
      gender: "Female",
      image: pet4,
      location: "Houston, TX"
    },
    {
      id: 5,
      name: "Rocky",
      type: "Dog",
      breed: "Mixed Breed",
      age: "2 years",
      gender: "Male",
      image: pet5,
      location: "Phoenix, AZ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Pet</h1>
          <p className="text-muted-foreground">Browse our available pets and find your new best friend</p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-2xl p-6 mb-8" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name or breed..." 
                className="pl-10"
              />
            </div>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pet Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="dog">Dogs</SelectItem>
                <SelectItem value="cat">Cats</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="young">Young (0-1 year)</SelectItem>
                <SelectItem value="adult">Adult (1-7 years)</SelectItem>
                <SelectItem value="senior">Senior (7+ years)</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="houston">Houston</SelectItem>
                <SelectItem value="phoenix">Phoenix</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{allPets.length}</span> available pets
          </p>
        </div>

        {/* Pet Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allPets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pets;
