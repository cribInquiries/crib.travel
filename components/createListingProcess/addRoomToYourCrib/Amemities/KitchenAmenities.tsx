import React, { useState } from "react";

import {
  Bed,
  BedDouble,
  Bath,
  Briefcase,
  Fan,
  Sofa,
  Shirt,
  ChefHat,
  Utensils,
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

const KitchenAmenities = ({
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
}: SelectRoomTypeProps) => {
  const propertyTypes = [
    { value: "refrigerator", label: "Refrigerator", icon: ChefHat },
    { value: "oven", label: "Oven", icon: ChefHat },
    { value: "microwave", label: "Microwave", icon: ChefHat },
    { value: "dishwasher", label: "Dishwasher", icon: ChefHat },
    { value: "coffeeMaker", label: "Coffee Maker", icon: ChefHat },
    { value: "toaster", label: "Toaster", icon: ChefHat },
    { value: "kitchenware", label: "Kitchenware", icon: Utensils },
    { value: "cookingUtensils", label: "Cooking Utensils", icon: Utensils },
    {
      value: "dishesAndSilverware",
      label: "Dishes and Silverware",
      icon: Utensils,
    },
    { value: "diningTable", label: "Dining Table", icon: ChefHat },
    { value: "chairs", label: "Chairs", icon: ChefHat },
    { value: "kitchenIsland", label: "Kitchen Island", icon: ChefHat },
    { value: "blender", label: "Blender", icon: ChefHat },
    { value: "foodProcessor", label: "Food Processor", icon: ChefHat },
    { value: "electricKettle", label: "Electric Kettle", icon: ChefHat },
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
             mt={"16px"}
           >
             Choose Amenities for your Kitchen 
           </Text>
           <Box
             display="flex"
             flexWrap="wrap"
             alignItems={{ base: "center", lg: "start" }}
             justifyContent={{ base: "center", lg: "start" }}
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
                   borderRadius="32px"
                   borderColor={"gray.300"}
                   _hover={{
                     bg: "black",
                     color: "white",
                   }}
                 >
                   Add Ensuite
                 </Text>
               </AccordionItemTrigger>
               <AccordionItemContent >
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
                chooseAmenitiesEnsuite.includes(ensuite.value) ? "blue.400" : "gray.300"
              }
              borderWidth="1px"
              bg={
                chooseAmenitiesEnsuite.includes(ensuite.value) ? "blue.50" : "white"
              }
              width={{
                base: "125px",
                sm: "155px",
                md: "155px",
                lg: "155px",
                xl: "155px",
              }}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                bg: "blue.50",
                borderColor: "blue.400",
              }}
              fontWeight={
                chooseAmenitiesEnsuite.includes(ensuite.value) ? "semibold" : "normal"
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

export default KitchenAmenities;
