import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface PetCardProps {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  image: string;
  location: string;
}

const PetCard = ({ id, name, type, breed, age, gender, image, location }: PetCardProps) => {
  return (
    <Card 
      className="group overflow-hidden transition-all hover:scale-[1.02]" 
      style={{ 
        boxShadow: "var(--card-shadow)",
        transition: "var(--transition-smooth)"
      }}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform group-hover:scale-110"
          style={{ transition: "var(--transition-smooth)" }}
        />
        <button 
          className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5 text-primary" />
        </button>
        <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
          {type}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-xl text-foreground">{name}</h3>
            <p className="text-muted-foreground text-sm">{breed}</p>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {age}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {gender}
            </Badge>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <Link to={`/pet/${id}`} className="block">
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
              View Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCard;
