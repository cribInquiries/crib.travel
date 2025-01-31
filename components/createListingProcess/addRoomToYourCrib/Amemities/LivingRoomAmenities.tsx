import React, { useState } from "react";

import {
  Bed,
  BedDouble,
  Bath,
  Briefcase,
  Fan,
  Sofa,
  Shirt,
  Tv,
  Flame,
  Book,
  Dices,
} from "lucide-react";

import {
  Box,
  Text,
  Badge,
  Stack,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
interface SelectRoomTypeProps {
  chooseAmenities: string[];
  setChooseAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  chooseAmenitiesEnsuite: string[];
  setChooseAmenitiesEnsuite: React.Dispatch<React.SetStateAction<string[]>>;
}

const LivingRoomAmenities = ({
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
}: SelectRoomTypeProps) => {
  const propertyTypes = [
    { value: "tv", label: "TV", icon: Tv },
    { value: "coffeeTable", label: "Coffee Table", icon: Sofa },
    { value: "armchair", label: "Armchair", icon: Sofa },
    { value: "fireplace", label: "Fireplace", icon: Flame },
    { value: "bookshelf", label: "Bookshelf", icon: Book },
    { value: "smartTv", label: "Smart TV", icon: Sofa },
    { value: "streamingDevice", label: "Streaming Device", icon: Sofa },
    { value: "soundSystem", label: "Sound System", icon: Sofa },
    { value: "boardGames", label: "Board Games", icon: Dices },
  ];

  const ensuites = [
    { value: "toilet", label: "Toilet", icon: Bath },
    { value: "shower", label: "Shower", icon: Bath },
    { value: "bathtub", label: "Bathtub", icon: Bath },
    { value: "doubleVanity", label: "Double Vanity", icon: Bath },
    { value: "singleVanity", label: "Single Vanity", icon: Bath },
    { value: "hairDryer", label: "Hair Dryer", icon: Shirt },
    { value: "toiletries", label: "Toiletries", icon: Bath },
    { value: "towels", label: "Towels", icon: Bath },
    { value: "bathrobes", label: "Bathrobes", icon: Shirt },
    { value: "heatedTowelRail", label: "Heated Towel Rail", icon: Shirt },
    { value: "bidet", label: "Bidet", icon: Bath },
  ];

  const togglePropertySelection = (value: string) => {
    setChooseAmenities((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value],
    );
  };
  const toggleEnsuiteSelection = (value: string) => {
    setChooseAmenitiesEnsuite((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value],
    );
  };
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={{ base: "center", lg: "start" }}
        gap="16px"
      >
        {propertyTypes.map((property) => (
          <Box
            key={property.value}
            as="button"
            onClick={() => togglePropertySelection(property.value)}
            className="animate__animated animate__fadeIn"
            p="18px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            bg={chooseAmenities.includes(property.value) ? "gray.100" : "white"}
            width={{ base: "125px", sm: "155px", lg: "175px" }}
            height="100%"
            border="1px solid lightgrey"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-1px) scale(1.1)",
              bg: "gray.100",
            }}
          >
            <property.icon
              size={24}
              style={{ marginBottom: "12px", color: "black" }}
            />
            <Text fontSize="sm" textAlign="center" color="black">
              {property.label}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Chakra UI Accordion */}
      <AccordionRoot collapsible>
        <AccordionItem value="ensuite">
          <AccordionItemTrigger>
            <Text fontSize="lg" fontWeight="semibold">
              Ensuite
            </Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={{ base: "center", lg: "start" }}
              gap="16px"
              p="12px"
            >
              {ensuites.map((ensuite) => (
                <Box
                  key={ensuite.value}
                  as="button"
                  onClick={() => toggleEnsuiteSelection(ensuite.value)}
                  className="animate__animated animate__fadeIn"
                  p="16px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="8px"
                  bg={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "gray.100"
                      : "white"
                  }
                  width={{ base: "125px", sm: "155px", lg: "175px" }}
                  height="100%"
                  border="1px solid lightgrey"
                  transition="all 0.3s ease-in-out"
                  _hover={{ transform: "translateY(-1px) scale(1.1)" }}
                >
                  <ensuite.icon
                    size={24}
                    style={{ marginBottom: "12px", color: "black" }}
                  />
                  <Text fontSize="sm" textAlign="center" color="black">
                    {ensuite.label}
                  </Text>
                </Box>
              ))}
            </Box>
          </AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>

      <Box mt={4}>
        {/* Selected Living Room Amenities */}
        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          {chooseAmenities.length > 0 ? (
            chooseAmenities.map((item, index) => (
              <Badge key={index} variant="outline">
                {propertyTypes.find((prop) => prop.value === item)?.label ||
                  item}
              </Badge>
            ))
          ) : (
            <Text fontSize="sm" color="gray.500">
              No amenities selected.
            </Text>
          )}
        </Box>

        {/* Selected Ensuite Amenities */}
        <Box display="flex" flexWrap="wrap" gap={1}>
          {chooseAmenitiesEnsuite.length > 0 ? (
            chooseAmenitiesEnsuite.map((item, index) => (
              <Badge key={index} variant="subtle">
                {ensuites.find((ensuite) => ensuite.value === item)?.label ||
                  item}
              </Badge>
            ))
          ) : (
            <Text mt={2} fontSize="sm" color="gray.500">
              No ensuite amenities selected.
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default LivingRoomAmenities;
