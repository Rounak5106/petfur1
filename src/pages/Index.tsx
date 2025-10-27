import Navbar from "@/components/Navbar";
import PetCard from "@/components/PetCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Home, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pets.jpg";
import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";

const Index = () => {
  const featuredPets = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
          style={{ background: "var(--hero-gradient)", opacity: 0.1 }}
        />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pet Companion
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect with loving pets looking for their forever homes. 
                Every adoption saves a life and brings joy to yours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/pets">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg"
                  >
                    Browse Pets
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" variant="outline" className="text-lg">
                    List a Pet
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-20" />
              <img
                src={heroImage}
                alt="Happy pets"
                className="relative rounded-3xl shadow-2xl"
                style={{ boxShadow: "var(--card-shadow-hover)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose PetPals?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-gradient-to-br from-primary to-accent rounded-2xl">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Verified Listings</h3>
              <p className="text-muted-foreground">
                Every pet and owner is verified to ensure safe and trustworthy adoptions.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-gradient-to-br from-secondary to-primary rounded-2xl">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Forever Homes</h3>
              <p className="text-muted-foreground">
                We match pets with loving families to ensure happy, lasting relationships.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-gradient-to-br from-accent to-secondary rounded-2xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Adoption Support</h3>
              <p className="text-muted-foreground">
                Get guidance throughout the adoption process and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Pets</h2>
            <Link to="/pets">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} {...pet} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary to-accent"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of happy pet parents who found their perfect match through PetPals.
            </p>
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
                <Heart className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="font-bold">PetPals</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 PetPals. Connecting pets with loving homes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
