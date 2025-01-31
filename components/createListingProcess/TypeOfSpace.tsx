"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Stack, Typography, Button } from "@mui/material";
import {
  Users,
  User,
  Key,
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
const TypeOfSpace = () => {
  const { selectedProperty, setSelectedProperty } = useListingCreationContext();

  const propertyTypes = [
    {
      value: "house",
      label: "House",
      desc: " Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.",
      icon: Home,
    },
    {
      value: "apartment",
      label: "Apartment",
      desc: "Guests have their own private room for sleeping. Other areas could be shared.",
      icon: User,
    },
    {
      value: "guesthouse",
      label: "Guesthouse",
      desc: " Guests sleep in a room or common area that could be shared with others.",
      icon: Users,
    },
  ];

  return (
    <>
      <Box sx={{ mb: "32px" }} className={"animate__animated animate__fadeIn"}>
        <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
          What type of space will guests have?
        </Typography>
        <Typography variant="body1" color="black">
          Choose the option that best describes your place
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "nowrap",
            lg: "nowrap",
            xl: "nowrap",
          },
          alignItems: "start",
          justifyContent: "center",
          gap: "16px",
          px: { xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" },
        }}
      >
        {propertyTypes.map((property) => (
          <Box
            className={"animate__animated animate__fadeIn"}
            component={"button"}
            key={property.value}
            onClick={() => setSelectedProperty(property.value)}
            sx={{
              p: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              borderRadius: "8px",
              bgcolor:
                property.value === selectedProperty ? "#f1f1f1" : "white",
              component: "button",
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },

              height: "200px",
              border: "1px solid lightgrey",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                bgcolor: "#f1f1f1",
                transform: "translateY(-1px) scale(1.05)",
              },
            }}
          >
            <property.icon
              style={{
                width: "34px",
                height: "34px",
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
                fontWeight: 600,
                fontSize: "1.2rem",
              }}
            >
              {property.label}
            </Typography>

            <Typography
              variant="text"
              align="center"
              sx={{
                textTransform: "none",
                color: "grey",
              }}
            >
              {property.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TypeOfSpace;
