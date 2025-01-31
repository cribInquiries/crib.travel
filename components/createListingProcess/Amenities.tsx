"use client";
import React, { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  ChefHat,
  Briefcase,
  TreePine,
  Shirt,
  Wifi,
  Tv,
  BatteryCharging,
  Snowflake,
  Fan,
  Microwave,
  Coffee,
  FlameIcon as Grill,
  Car,
  Battery,
  BathIcon as HotTub,
  Dumbbell,
  CableCarIcon as Elevator,
  ShipWheelIcon as Wheelchair,
  StepBackIcon as Stairs,
  Book,
  Gamepad,
  PawPrint,
  Dog,
  Soup,
  Joystick,
  Search,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Typography, Stack } from "@mui/material";

const Amenities = () => {
  const {
    selectedAmenities,
    setSelectedAmenities,
    customAmenity,
    setCustomAmenity,
  } = useListingCreationContext();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    {
      name: "Technology",
      amenities: [
        { value: "Wi-Fi", label: "Wi-Fi", icon: Wifi },
        { value: "Smart TV", label: "Smart TV", icon: Tv },
        { value: "Streaming services", label: "Streaming services", icon: Tv },
        { value: "Work space", label: "Work space", icon: Briefcase },
        { value: "Charging station", label: "Charging station", icon: BatteryCharging },
      ],
    },
    {
      name: "Climate Control",
      amenities: [
        { value: "Air conditioning", label: "Air conditioning", icon: Snowflake },
        { value: "Heating", label: "Heating", icon: Shirt },
        { value: "Ceiling fan", label: "Ceiling fan", icon: Fan },
      ],
    },
    {
      name: "Laundry",
      amenities: [
        { value: "Washer", label: "Washer", icon: Shirt },
        { value: "Dryer", label: "Dryer", icon: Shirt },
        { value: "Iron", label: "Iron", icon: Shirt },
      ],
    },
    {
      name: "Cooking",
      amenities: [
        { value: "Kitchen", label: "Kitchen", icon: ChefHat },
        { value: "Microwave", label: "Microwave", icon: Microwave },
        { value: "Coffee maker", label: "Coffee maker", icon: Coffee },
        { value: "Barbecue grill", label: "Barbecue grill", icon: Grill },
      ],
    },
    {
      name: "Parking",
      amenities: [
        { value: "Free parking", label: "Free parking", icon: Car },
        { value: "EV charger", label: "EV charger", icon: Battery },
      ],
    },
    {
      name: "Outdoor",
      amenities: [
        { value: "Pool", label: "Pool", icon: Book },
        { value: "Hot tub", label: "Hot tub", icon: HotTub },
        { value: "Patio", label: "Patio", icon: Book },
        { value: "Garden", label: "Garden", icon: TreePine },
      ],
    },
    {
      name: "Fitness",
      amenities: [
        { value: "Gym", label: "Gym", icon: Dumbbell },
        { value: "Yoga mat", label: "Yoga mat", icon: Book },
      ],
    },
    {
      name: "Accessibility",
      amenities: [
        { value: "Elevator", label: "Elevator", icon: Elevator },
        { value: "Wheelchair", label: "Wheelchair", icon: Wheelchair },
        { value: "Step-free", label: "Step-free", icon: Stairs },
      ],
    },
  ];

  const handleAmenityClick = (value: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleAddCustomAmenity = () => {
    if (customAmenity.trim()) {
      setSelectedAmenities((prev) => [...prev, customAmenity.trim()]);
      setCustomAmenity("");
    }
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    amenities: category.amenities.filter((amenity) =>
      amenity.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <>
  <Box sx={{ mb: "32px" }} className={"animate__animated animate__fadeIn"}>
          <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
            What type of Amenities do you have?
          </Typography>
          <Typography variant="body1" color="black">
            Select all that apply to your property.
          </Typography>
        </Box>

      <Box sx={{ px: { xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" } }}>
        <Input
          placeholder="Search amenities"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Box sx={{ maxHeight: "350px", overflowY: "auto"}}>
        {filteredCategories.map((category) =>
  category.amenities.length > 0 ? (
    <Box key={category.name}>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", p: "10px" }}>
        {category.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          p: "10px",
        }}
      >
        {category.amenities.map((amenity) => {
          const Icon = amenity.icon;
          const isSelected = selectedAmenities.includes(amenity.value);

          return (
            <Box
              key={amenity.value}
              component="button"
              onClick={() => handleAmenityClick(amenity.value)}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                backgroundColor: isSelected ? "#f1f1f1" : "white",
                width: { xs: "125px", sm: "155px", md: "175px" },
                height: "100%",
                border: "1px solid lightgrey",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-1px) scale(1.1)",
                  bgcolor: "#f1f1f1",
                },
              }}
            >
              <Icon
                style={{
                  width: "24px",
                  height: "24px",
                  marginBottom: "12px",
                  color: "black",
                }}
              />
              <Typography
                variant="body2"
                align="center"
                sx={{
                  textTransform: "none",
                  color: "black",
                }}
              >
                {amenity.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  ) : null
)}

        </Box>

        <Box sx={{ mt: 4 }}>
    
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {selectedAmenities.map((amenity) => (
              <Badge key={amenity} variant="outline" color="primary">
                {amenity}
              </Badge>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Input
            placeholder="Add custom amenity"
            value={customAmenity}
            onChange={(e) => setCustomAmenity(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddCustomAmenity}>
            Add
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Amenities;
