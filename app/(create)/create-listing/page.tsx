"use client";
import React, { useState } from "react";
import { Box, Stack, Text, Flex, Group, HStack } from "@chakra-ui/react";
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
  ArrowRight,
  ArrowLeft,
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

  const progressSplitBar = [
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
    <Box py={6}>
      {/* Progress Bar */}

      <Flex justify="center" px={{ base: "5%", lg: "10%", xl: "10%" }}>
        <Box mb={"50px"} w={"100%"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={"5px"}
            mb={"20px"}
          >
            {navItems.map((item, index) => {
              return (
                <Box
                  key={index}
                  w={"100%"}
                  h={"10px"}
                  bg={"gray.200"}
                  borderRadius={"3px"}
                  transition="all 0.3s"
                  _hover={{ bg: "black" }}
                  zIndex={1}
                  onClick={() => setProgress(item.progress)}
                  cursor="pointer"
                  position="relative"
                  bgColor={progress >= item.progress ? "gray.700" : "gray.200"}
                ></Box>
              );
            })}
          </Box>
          {/* Navigation Items */}
          <Box position="relative" w="100%" display={{ base: "none", md: "block" }}>
            <HStack
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              w={"100%"}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isDoneDoing = progress >= item.progress;
                const isActive = progress === item.progress;
                return (
                  <HStack
                    key={index}
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    w={"100%"}
                  >
                    <HStack
                      key={index}
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      onClick={() => setProgress(item.progress)}
                      position="relative"
                      transition="all 0.3s"
                      _hover={{ color: "black" }}
                      zIndex={1}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w={{ base: "18px", sm: "35px", md: "45px",  lg: "58px", xl: "58px" }}
                        h={{ base: "18px", sm: "35px", md: "45px",  lg: "58px", xl: "58px" }}
                        borderRadius="full"
                        bg={isDoneDoing ? "white" : "gray.200"}
                        shadow={isActive ? "xl" : "none"}
                        border={isActive ? "2px solid gray" : isDoneDoing ? "1px solid gray" : "none"}
                        transition="all 0.3s"
                      >
                        <Icon size={24} color={isDoneDoing ? "black" : "gray"} />
                      </Box>
                      {/* <Text
                      fontSize="sm"
                      mt={2}
                      color={isActive ? "black" : "gray.500"}
                    >
                      {item.label}
                    </Text> */}
                    </HStack>
                  </HStack>
                );
              })}
            </HStack>
          </Box>
        </Box>
      </Flex>

      <Box px={{ base: "5%", lg: "10%", xl: "10%" }}> {renderComponent()}</Box>

      {/* Navigation Buttons */}
      <Flex
        justify="space-between"
        mx="auto"
        px={{ base: "5%", lg: "10%", xl: "10%" }}
        transition="all 0.3s"
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          transition="all 0.3s"
          as="button"
          w={"auto"}
          h={"auto"}
          p={8}
          bg={"white"}
          color={"black"}
          border="1px solid"
          rounded={"full"}
          borderColor={"gray.300"}
          onClick={previous}
          _hover={{
            bg: "gray.200",
            color: "white",
          }}
          visibility={progress === 10 ? "hidden" : "visible"}
        >
          <ArrowLeft size={24} color={"black"} />
        </Box>
        <Box
          visibility={progress === 130 ? "hidden" : "visible"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          transition="all 0.3s"
          as="button"
          w={"auto"}
          bg={"white"}
          h={"auto"}
          p={8}
          rounded={"full"}
          color={"black"}
          border="1px solid"
      
          borderColor={"gray.300"}
          onClick={next}
          _hover={{
            bg: "gray.200",
            color: "white",

            transition: "all 0.3s",
          }}
        >
          <ArrowRight size={24} color={"black"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;
