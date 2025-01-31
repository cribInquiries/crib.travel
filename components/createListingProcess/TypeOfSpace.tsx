"use client";
import React from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { Users, User, Home } from "lucide-react";
import { useListingCreationContext } from "@/context/ListingCreationContext";

const TypeOfSpace = () => {
  const { selectedProperty, setSelectedProperty } = useListingCreationContext();

  const propertyTypes = [
    {
      value: "house",
      label: "House",
      desc: "Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.",
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
      desc: "Guests sleep in a room or common area that could be shared with others.",
      icon: Users,
    },
  ];

  return (
    <>
      <Box
        mb={8}
        className="animate__animated animate__fadeIn"
        textAlign={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "start",
          xl: "start",
        }}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          What type of space will guests have?
        </Text>
        <Text fontSize="md" color="gray.600">
          Choose the option that best describes your place
        </Text>
      </Box>

      <Box
        display="flex"
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
        gap={4}
      >
        <HStack
          display="flex"
          flexWrap={{
            base: "wrap",
            sm: "wrap",
            md: "wrap",
            lg: "nowrap",
            xl: "nowrap",
          }}
          gap={4}
        >
          {propertyTypes.map((property) => (
            <Box
              key={property.value}
              onClick={() => setSelectedProperty(property.value)}
              className="animate__animated animate__fadeIn"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="start"
              borderRadius="md"
              bg={selectedProperty === property.value ? "gray.200" : "white"}
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
              height="200px"
              borderWidth="1px"
              borderColor="gray.300"
              transition="all 0.3s ease-in-out"
              _hover={{
                bg: "gray.200",
                transform: " scale(1.05)",
              }}
              p={4}
            >
              <property.icon
                size={34}
                color="black"
                style={{ marginBottom: "12px" }}
              />
              <Text
                fontWeight="semibold"
                fontSize="lg"
                textAlign="center"
                color="black"
              >
                {property.label}
              </Text>
              <Text
                fontSize="sm"
                color="gray.500"
                textAlign="center"
                textWrap={"wrap"}
              >
                {property.desc}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default TypeOfSpace;
