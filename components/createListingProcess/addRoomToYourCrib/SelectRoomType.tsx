"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
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
        display="flex"
        flexWrap="wrap"
        alignItems="start"
        justifyContent="start"
        gap="16px"
        mt={"50px"}
      >
        <Text
          display="flex"
          flexWrap="wrap"
          gap="16px"
      w={["100%", "100%", "100%", "100%", "100%"]}
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
        >
          Choose a room type
        </Text>{" "}
        <Box
          display="flex"
          flexWrap="wrap"
          gap="16px"
          mt={"16px"}
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
        >
          {propertyTypes.map((property) => (
            <Box
              key={property.value}
              as="button"
              onClick={() => setRoomType(property.value)}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="32px"
              width={{
                base: "125px",
                sm: "155px",
                md: "155px",
                lg: "155px",
                xl: "155px",
              }}
              height="120px"
              border="1px solid"
              borderColor={
                property.value === roomType ? "blue.400" : "gray.300"
              }
              bg={property.value === roomType ? "blue.50" : "white"}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                bg: "blue.50",
                borderColor: "blue.400",
              }}
              fontWeight={property.value === roomType ? "semibold" : "normal"}
            >
              <property.icon size={28} color="black" />
              <Text fontSize="sm" mt="8px">
                {property.label}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SelectRoomType;
