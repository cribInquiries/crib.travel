import type React from "react";
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
// Adjust path based on your setup
import {
  Bed,
  BedDouble,
  Bath,
  Briefcase,
  Fan,
  Sofa,
  Shirt,
} from "lucide-react";

interface SelectRoomTypeProps {
  chooseAmenities: string[];
  setChooseAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  chooseAmenitiesEnsuite: string[];
  setChooseAmenitiesEnsuite: React.Dispatch<React.SetStateAction<string[]>>;
  roomType: string | null;
}

const BedroomAmenities = ({
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
  roomType,
}: SelectRoomTypeProps) => {
  const propertyTypes = [
    { value: "singleBed", label: "Single Bed", icon: Bed },
    { value: "doubleBed", label: "Double Bed", icon: BedDouble },
    { value: "queenBed", label: "Queen Bed", icon: Bed },
    { value: "kingBed", label: "King Bed", icon: Bed },
    { value: "bunkBed", label: "Bunk Bed", icon: Bed },
    { value: "crib", label: "Crib", icon: Bed },
    { value: "walkInWardrobe", label: "Walk-in Wardrobe", icon: Briefcase },
    { value: "builtInWardrobe", label: "Built-in Wardrobe", icon: Briefcase },
    { value: "desk", label: "Desk", icon: Briefcase },
    { value: "bedsideTables", label: "Bedside Tables", icon: Sofa },
    { value: "dresser", label: "Dresser", icon: Sofa },
    { value: "mirror", label: "Mirror", icon: Sofa },
    { value: "blackoutCurtains", label: "Blackout Curtains", icon: Sofa },
    { value: "ceilingFan", label: "Ceiling Fan", icon: Fan },
    { value: "airConditioning", label: "Air Conditioning", icon: Fan },
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
      <Text
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
        mt={"50px"}
      >
        Choose Amenities for Bedroom
      </Text>
      <Box
        display="flex"
        flexWrap="wrap"
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
        gap="16px"
        mt={"16px"}
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
            borderRadius="32px"
            borderColor={
              chooseAmenities.includes(property.value) ? "blue.400" : "gray.300"
            }
            borderWidth="1px"
            bg={chooseAmenities.includes(property.value) ? "blue.50" : "white"}
            width={{
              base: "125px",
              sm: "155px",
              md: "155px",
              lg: "155px",
              xl: "155px",
            }}
            height="120px"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              bg: "blue.50",
              borderColor: "blue.400",
            }}
            fontWeight={
              chooseAmenities.includes(property.value) ? "semibold" : "normal"
            }
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
        <AccordionItem value={""}>
          <AccordionItemTrigger>
            <Text
              transition="all 0.3s"
              w={"155px"}
              p={4}
              bg={"white"}
              color={"black"}
              border="1px solid"
              borderRadius="16px"
              borderColor={"gray.300"}
              _hover={{
                bg: "black",
                color: "white",
              }}
            >
              Add Ensuite
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
                  p="18px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="32px"
                  borderColor={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "blue.400"
                      : "gray.300"
                  }
                  borderWidth="1px"
                  bg={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "blue.50"
                      : "white"
                  }
                  width={{
                    base: "125px",
                    sm: "155px",
                    md: "155px",
                    lg: "155px",
                    xl: "155px",
                  }}
                  height="120px"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                    bg: "blue.50",
                    borderColor: "blue.400",
                  }}
                  fontWeight={
                    chooseAmenitiesEnsuite.includes(ensuite.value)
                      ? "semibold"
                      : "normal"
                  }
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
        {/* Selected Bedroom Amenities */}
        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          {chooseAmenities.length > 0 ? (
            chooseAmenities.map((item, index) => (
              <Box
              key={index}
              border={"1px solid lightgray"}
              bg={"gray.50"}
              p={2}
              px={3}
              rounded={"xl"}
              >
                {propertyTypes.find((prop) => prop.value === item)?.label ||
                  item}
              </Box>
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
              <Box
                key={index}
                border={"1px solid lightgray"}
                bg={"gray.50"}
                p={2}
                px={3}
                rounded={"xl"}
              >
                {propertyTypes.find((prop) => prop.value === item)?.label ||
                  item}
              </Box>
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

export default BedroomAmenities;
