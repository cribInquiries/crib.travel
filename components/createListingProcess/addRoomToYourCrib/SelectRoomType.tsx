"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Stack, Typography, Button } from "@mui/material";
import {
  Home,
  Building2,
  Hotel,
  Warehouse,
  Tent,
  TreePine,
  Sailboat,
  Caravan,
  Castle,
  TreePine as PalmTree,
  Mountain,
  Building,
  LandPlot,
  Building as Barn,
  Building as Bungalow,
  Umbrella,
  Cone as Condo,
  Castle as Cottage,
  BedDouble,
  Home as Farmhouse,
  Space as Loft,
  Home as MobileHome,
  Ribbon as Ranch,
  Space as Studio,
  Building as Townhouse,
  Hotel as Villa,
  Bed,
  Bath,
  ChefHat,
  Sofa,
  Briefcase,
  Tree,
  Waves,
  Shirt,
} from "lucide-react";

const propertyTypes = [
  { value: "Bedroom", label: "Bedroom", icon: Home },
  { value: "Bathroom", label: "Bathroom", icon: Bath },
  { value: "Kitchen", label: "Kitchen", icon: ChefHat },
  { value: "Living Room", label: "Living Room", icon: Sofa },
  { value: "Dining Room", label: "Dining Room", icon: ChefHat },
  { value: "Office", label: "Office", icon: Briefcase },
  { value: "Outdoor", label: "Outdoor", icon: TreePine },
  { value: "Laundry", label: "Laundry", icon: Shirt },
];

interface SelectRoomTypeProps {
  roomType: string | null;

  setRoomType: React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectRoomType = ({ roomType, setRoomType }: SelectRoomTypeProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "start",
          gap: "16px",
        }}
      >
        {propertyTypes.map((property) => (
          <Box
            className={"animate__animated animate__fadeIn"}
            component={"button"}
            key={property.value}
            onClick={() => setRoomType(property.value)}
            sx={{
              p: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              bgcolor: property.value === roomType ? "#f1f1f1" : "white",
              component: "button",
              width: {
                xs: "125px",
                sm: "155px",
                md: "155px",
                lg: "175px",
                xl: "175px",
              },

              height: "100%",
              border: "1px solid lightgrey",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-1px) scale(1.1)",
                bgcolor: "#f1f1f1",
              },
            }}
          >
            <property.icon
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
              {property.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SelectRoomType;
