"use client";
import React, { useState } from "react";
import { Box, Stack, Text, Flex, Group } from "@chakra-ui/react";
import { Progress } from "@/components/ui/progress";
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
} from "lucide-react";

import { useListingCreationContext } from "@/context/ListingCreationContext";
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
import CreateRules from "@/components/createListingProcess/CreateRules";
import Summary from "@/components/createListingProcess/Summary";


const Page = () => {
  const { addedRooms } = useListingCreationContext();
  const [progress, setProgress] = useState<number>(10);

  const next = () => setProgress((prev) => Math.min(prev + 10, 130));
  const previous = () => setProgress((prev) => Math.max(prev - 10, 10));

  const renderComponent = () => {
    switch (progress) {
      case 10:
        return <TypeOfProperty />;
      case 20:
        return <TypeOfSpace />;
      case 30:
        return <AddressOfProperty />;
      case 40:
        return <AddRooms />;
      case 50:
        return <Amenities />;
      case 60:
        return <UploadPhotos />;
      case 80:
        return <ValueAddedPacks />;
      case 90:
        return <ListingDetails />;
      case 100:
        return <CreateRules />;
      case 110:
        return <Pricing />;
      case 120:
        return <AvailabilityCalendar />;
      case 130:
        return <Summary />;
      default:
        return null;
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
    { icon: ClipboardList, label: "Summary", progress: 130 },
  ];

  return (
    <Box px={4} py={6}>
      {/* Progress Bar */}

      <Flex justify="center" px={{ base: "5%", lg: "10%", xl: "10%" }}>
        <Box p={4} px={10} borderRadius="md" mb={6} shadow={"md"} w={"100%"}>
          {/* Navigation Items */}
          <Box position="relative">
            <Flex wrap="wrap" justify="space-between">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = progress >= item.progress;
                return (
                  <Flex
                    key={index}
                    direction="column"
                    align="center"
                    zIndex={1}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="48px"
                      h="48px"
                      borderRadius="full"
                      bg={isActive ? "white" : "gray.200"}
                      shadow={isActive ? "md" : "none"}
                      transition="all 0.3s"
                    >
                      <Icon size={24} color={isActive ? "black" : "gray"} />
                    </Box>
                    <Text
                      fontSize="sm"
                      mt={2}
                      color={isActive ? "black" : "gray.500"}
                    >
                      {item.label}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Box px={{ base: "5%", lg: "10%", xl: "10%" }}> {renderComponent()}</Box>

      {/* Navigation Buttons */}
      <Flex
        justify="space-between"
        mx="auto"
        px={{ base: "5%", lg: "10%", xl: "10%" }}
        gap={{ base: "4%", md: "50%" }}
        transition="all 0.3s"
      >
        <Box
          transition="all 0.3s"
          as="button"
          w={"100%"}
          p={4}
          bg={"white"}
          color={"black"}
          border="1px solid"
          borderRadius="8px"
          borderColor={"gray.300"}
          onClick={previous}
          _hover={{
            bg: "black",
            color: "white",
          }}
        >
          Previous
        </Box>
        <Box
          transition="all 0.3s"
          as="button"
          w={"100%"}
          bg={"white"}
          p={4}
          color={"black"}
          border="1px solid"
          borderRadius="8px"
          borderColor={"gray.300"}
          onClick={next}
          _hover={{
            bg: "black",
            color: "white",

            transition: "all 0.3s",
          }}
          
        >
          Next
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;


