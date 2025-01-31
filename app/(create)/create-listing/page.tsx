"use client";
import React, { useState } from "react";
import { Box, Stack, Button, Text, Flex } from "@chakra-ui/react";
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

  const next = () => setProgress((prev) => Math.min(prev + 10, 120));
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
      // case 90:
      //   return <ListingDetails />;
      // case 100:
      //   return <CreateRules />;
      // case 110:
      //   return <Pricing />;
      // case 120:
      //   return <AvailabilityCalendar />;
      // case 130:
      //   return <Summary />;
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
    { icon: ClipboardList, label: "Summary", progress: 120 },
  ];

  return (
    <Box px={4} py={6}>
      {/* Progress Bar */}
      <Flex justify="center" mb={6}>
        <Progress value={progress} color="blue" />
      </Flex>

      {/* Navigation Items */}
      <Flex wrap="wrap" justify="center" gap={4} mb={6}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = progress >= item.progress;
          return (
            <Flex key={index} direction="column" align="center">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="48px"
                h="48px"
                borderRadius="full"
                bg={isActive ? "blue.100" : "gray.200"}
                shadow={isActive ? "md" : "none"}
                transition="all 0.3s"
              >
                <Icon size={24} color={isActive ? "blue" : "gray"} />
              </Box>
              <Text
                fontSize="sm"
                mt={2}
                color={isActive ? "blue.500" : "gray.500"}
              >
                {item.label}
              </Text>
            </Flex>
          );
        })}
      </Flex>

      {/* Dynamic Content */}
      <Box px={{ base: "5%", lg: "10%", xl: "10%" }}> {renderComponent()}</Box>

      {/* Navigation Buttons */}
      <Flex justify="space-between" maxW="600px" mx="auto">
        <Button
          colorScheme="gray"
          size="lg"
          onClick={previous}
          disabled={progress === 10}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={next}
          disabled={progress === 120}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default Page;
