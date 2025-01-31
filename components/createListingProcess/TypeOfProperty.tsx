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
  TreePalmIcon as PalmTree,
  Mountain,
  Building,
  LandPlot,
  BuildingIcon as Barn,
  BuildingIcon as Bungalow,
  Umbrella,
  ConeIcon as Condo,
  CastleIcon as Cottage,
  BedDouble,
  HomeIcon as Farmhouse,
  SpaceIcon as Loft,
  HomeIcon as MobileHome,
  RibbonIcon as Ranch,
  SpaceIcon as Studio,
  BuildingIcon as Townhouse,
  HotelIcon as Villa,
} from "lucide-react";

import { useListingCreationContext } from "@/context/ListingCreationContext";

const TypeOfProperty = () => {
  const { selectedProperty, setSelectedProperty } = useListingCreationContext();

  const propertyTypes = [
    { value: "house", label: "House", icon: Home },
    { value: "apartment", label: "Apartment", icon: Building2 },
    { value: "guesthouse", label: "Guesthouse", icon: Hotel },
    { value: "hotel", label: "Hotel", icon: Building },
    { value: "cabin", label: "Cabin", icon: Warehouse },
    { value: "tent", label: "Tent", icon: Tent },
    { value: "treehouse", label: "Treehouse", icon: TreePine },
    { value: "boat", label: "Boat", icon: Sailboat },
    { value: "rv", label: "RV", icon: Caravan },
    { value: "castle", label: "Castle", icon: Castle },
    { value: "tropical", label: "Tropical", icon: PalmTree },
    { value: "countryside", label: "Countryside", icon: Mountain },
    { value: "barn", label: "Barn", icon: Barn },
    { value: "bungalow", label: "Bungalow", icon: Bungalow },
    { value: "chalet", label: "Chalet", icon: Castle },
    { value: "beachhouse", label: "Beach House", icon: Umbrella },
    { value: "condo", label: "Condo", icon: Condo },
    { value: "cottage", label: "Cottage", icon: Cottage },
    { value: "duplex", label: "Duplex", icon: BedDouble },
    { value: "farmhouse", label: "Farmhouse", icon: Farmhouse },
    { value: "loft", label: "Loft", icon: Loft },
    { value: "mobilehome", label: "Mobile Home", icon: MobileHome },
    { value: "ranch", label: "Ranch", icon: Ranch },
    { value: "studio", label: "Studio", icon: Studio },
    { value: "townhouse", label: "Townhouse", icon: Townhouse },
    { value: "villa", label: "Villa", icon: Villa },
    { value: "other", label: "Other", icon: LandPlot },
  ];

  return (
    <>
      <Box sx={{ mb: "32px" }} className={"animate__animated animate__fadeIn"}>
        <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
          What type of property are you listing?
        </Typography>
        <Typography variant="body1" color="black">
          Choose the category that best describes your property.
        </Typography>
      </Box>

      <Box
        sx={{
          px: { xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" },
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
            onClick={() => setSelectedProperty(property.value)}
            sx={{
              p: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              bgcolor:
                property.value === selectedProperty ? "#f1f1f1" : "white",
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

export default TypeOfProperty;