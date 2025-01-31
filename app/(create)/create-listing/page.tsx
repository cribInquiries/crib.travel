"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Stack, Typography, Button } from "@mui/material";
import {
  Home,
  Lock,
  MapPin,
  Bed,
  Grid,
  Image,
  Camera,
  Package,
  FileText,
  DollarSign,
  Calendar,
  ClipboardList,
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
import TypeOfProperty from "@/components/createListingProcess/TypeOfProperty";
import TypeOfSpace from "@/components/createListingProcess/TypeOfSpace";
import AddressOfProperty from "@/components/createListingProcess/AddressOfProperty";
import AddRooms from "@/components/createListingProcess/AddRooms";
import Amenities from "@/components/createListingProcess/Amenities";
import UploadPhotos from "@/components/createListingProcess/UploadPhotos";
import ValueAddedPacks from "@/components/createListingProcess/ValueAddedPacks";
import ListingDetails from "@/components/createListingProcess/ListingDetails";
import Pricing from "@/components/createListingProcess/Pricing";
import AvailabilityCalendar from "@/components/createListingProcess/AvailabilityCalendar";
import { Create } from "@mui/icons-material";
import CreateRules from "@/components/createListingProcess/CreateRules";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import Summary from "@/components/createListingProcess/Summary";
const Page = () => {
  const { addedRooms } = useListingCreationContext();

  const [progress, setProgress] = useState<number>(10);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const next = () => {
    if (progress === 120) {
      // Do nothing if progress is already max
      return;
    }

    // Set progress to the next value
    setProgress((prev) => prev + 10);
  };

  const Previous = () => {
    if (progress === 0) {
      // Do nothing if progress is already min
      return;
    }

    // Set progress to the previous value
    setProgress((prev) => prev - 10);
  };

  const render = () => {
    if (progress === 10) {
      return (
        <>
          <TypeOfProperty />
        </>
      );
    }

    if (progress === 20) {
      return (
        <>
          <TypeOfSpace />
        </>
      );
    }

    if (progress === 30) {
      return (
        <>
          <AddressOfProperty />
        </>
      );
    }

    if (progress === 40) {
      return (
        <>
          <AddRooms />
        </>
      );
    }

    if (progress === 50) {
      return (
        <>
          <Amenities />
        </>
      );
    }

    if (progress === 60) {
      return (
        <>
          <UploadPhotos />
        </>
      );
    }

    if (progress === 70) {
      return (
        <>
          <ValueAddedPacks />
        </>
      );
    }

    if (progress === 80) {
      return (
        <>
          <ListingDetails />
        </>
      );
    }

    if (progress === 90) {
      return (
        <>
          <CreateRules />
        </>
      );
    }

    if (progress === 100) {
      return (
        <>
          <Pricing />
        </>
      );
    }

    if (progress === 110) {
      return (
        <>
          <AvailabilityCalendar />
        </>
      );
    }

    if (progress === 120) {
      return (
        <>
          <Summary />
        </>
      );
    }
  };

  const navItems = [
    { icon: Home, label: "Property Type", progress: 10 },
    { icon: Lock, label: "Privacy", progress: 20 },
    { icon: MapPin, label: "Location", progress: 30 },
    { icon: Bed, label: "Rooms", progress: 40 },
    { icon: Grid, label: "Amenities", progress: 50 },
    { icon: Image, label: "Photos", progress: 60 },
    { icon: Camera, label: "Photo Tour", progress: 70 },
    { icon: Package, label: "Perks", progress: 80 },
    { icon: FileText, label: "Details", progress: 90 },
    { icon: FileText, label: "Rules", progress: 100 },
    { icon: DollarSign, label: "Pricing", progress: 110 },
    { icon: Calendar, label: "Availability", progress: 120 },
    { icon: ClipboardList, label: "Summary", progress: 120 },
  ];

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
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        direction="column"
        sx={{ mt: "30px" }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="column"
          width={{ xs: "95%", sm: "75%", md: "75%", lg: "75%", xl: "75%" }}
          height="100%"
          mb={"24px"}
        >
          <Progress value={progress} className="w-full" />
        </Stack>
      </Stack>

      <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        direction="column"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            mb: "50px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                flexWrap: {
                  xs: "wrap",
                  sm: "wrap",
                  md: "wrap",
                  lg: "wrap",
                  xl: "wrap",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                  xl: "center",
                },
                gap: {
                  xs: "8px",
                  sm: "8px",
                  md: "15px",
                  lg: "28px",
                  xl: "28px",
                },

                mb: "48px",
              }}
            >
            
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = progress >= item.progress;

                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center transition ${
                        isActive ? "text-blue-500 font-bold" : "text-gray-500"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full transition ${
                          isActive
                            ? "bg-blue-100 shadow-md shadow-blue-500"
                            : "bg-gray-200"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-xs mt-2">{item.label}</p>
                    </div>
                  );
                })}
              </Box>
          

            <Box sx={{ textAlign: "center" }}>{render()}</Box>
          </Box>
        </Box>
      </Stack>

      <Box
        sx={{
          width: "100%",
          mb: "32px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: "5px", sm: "5px", md: "50px", lg: "200px", xl: "400px" },
        }}
      >
        <Box
          sx={{
            color: "white",
            borderRadius: "8px",
            p: "10px",
            background: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "100%",
          }}
          component={"button"}
          onClick={() => {
            // Check if selectedProperty is filled
            Previous();
          }}
        >
          {" "}
          Previous
        </Box>
        <Box
          sx={{
            transition: "all 0.3s ease-in-out",
            ":hover": {
              transform: "translateY(-1px) scale(1.1)",
            },
            color: "white",
            borderRadius: "8px",
            p: "10px",
            background: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "100%",
          }}
          component={"button"}
          onClick={() => {
            // Check if selectedProperty is filled
            next();
            console.log(addedRooms);
          }}
        >
          {" "}
          {/*Update 1*/}
          Next
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
