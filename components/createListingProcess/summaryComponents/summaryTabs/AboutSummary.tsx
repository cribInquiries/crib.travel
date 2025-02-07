"use client";

import React, { useState } from "react";

import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Card,
  IconButton,
  VStack,
  HStack,
  Tabs,
} from "@chakra-ui/react";
import {
  Star,
  Users,
  Bed,
  Bath,
  Share,
  Heart,
  Home,
  StarIcon,
  Award,
  TrendingUp,
  MessageCircle,
  Package,
  Plus,
  Minus,
  DoorOpen,
  CigaretteOff,
  Music,
  Clock,
  PawPrint,
  Moon,
  Share2,
} from "lucide-react";

// A reusable component for a pack card with its own quantity state and functions.
const PackCard = ({ title, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  // Function to increment the pack quantity
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to decrement the pack quantity (ensuring at least 1 is selected)
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  

  return (
    <Box
      w={"480px"}
      h={"350px"}
      bg={"white"}
      shadow={"md"}
      borderRadius={"16px"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"start"}
      justifyContent={"start"}
    >
      <Box
        w={"100%"}
        h={"500px"}
        bg={"gray.100"}
        borderRadius={"16px"}
        borderBottomRadius={"0px"}
      ></Box>

      <Box p={4} w={"100%"} h={"100%"}>
        <HStack align={"center"} gap={2}>
          <Package />
          <Text fontWeight={"semibold"} fontSize={"18px"}>
            {title}
          </Text>
        </HStack>
        <Box mt={2}>
          <Text fontSize={"16px"} color={"gray.600"}>
            {description}
          </Text>
        </Box>
      </Box>

      <HStack
        p={4}
        w={"100%"}
        gap={2}
        mt={8}
        align={"center"}
        justify={"space-between"}
      >
        <Text fontWeight={"semibold"} fontSize={"32px"}>
          ${price}
        </Text>
        <HStack>
          <Box
            as={"button"}
            p={1}
            border={"1px solid lightgray"}
            rounded={"6px"}
            onClick={increment}
          >
            <Plus />
          </Box>
          <Box
            as={"button"}
            p={1}
            rounded={"6px"}
            fontWeight={"semibold"}
            fontSize={"18px"}
          >
            {quantity}
          </Box>
          <Box
            as={"button"}
            p={1}
            border={"1px solid lightgray"}
            rounded={"6px"}
            onClick={decrement}
          >
            <Minus />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

const AboutSummary = () => {
 const {
    season,
        setSeason,
        progress,
        setProgress,
        selectedProperty,
        setSelectedProperty,
        title,
        setTitle,
        description,
        setDescription,
        address,
        setAddress,
        mapUrl,
        setMapUrl,
        addedRooms,
        setAddedRooms,
        addRoomProgress,
        setAddRoomProgress,
        uploadedFiles,
        setUploadedFiles,
        imageDetails,
        setImageDetails,
        basePrice,
        setBasePrice,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        weekendAdjustment,
        setWeekendAdjustment,
        seasonalAdjustment,
        setSeasonalAdjustment,
        packageDiscounts,
        setPackageDiscounts,
        rules,
        setRules,
        recommendations,
        setRecommendations,
        packs,
        setPacks,
        selectedAmenities,
        setSelectedAmenities,
        customAmenity,
        setCustomAmenity,
        selectedTab,
        setSelectedTab,
        prices,
        setPrices,
        selectedDates,
        setSelectedDates,
        loadingInsights,
        setLoadingInsights,
        insights,
        setInsights,
        editDialogOpen,
        setEditDialogOpen,
        editRate,
        setEditRate,
  } = useListingCreationContext();
  console.log({
    season,
    selectedProperty,
    title,
    description,
    address,
    mapUrl,
    addedRooms,
    addRoomProgress,
    uploadedFiles,
    imageDetails,
    basePrice,
    minPrice,
    maxPrice,
    weekendAdjustment,
    seasonalAdjustment,
    packageDiscounts,
    rules,
    recommendations,
    packs,
    selectedAmenities,
    customAmenity,
    selectedTab,
    prices,
    selectedDates,
    loadingInsights,
    insights,
    editDialogOpen,
    editRate,
  });
  return (
    <>
      <Box>
        <Text fontSize={["24px", "30px", "30px"]} fontWeight="bold" mb="8px">
          About this crib
        </Text>
        <Text fontSize={["24px", "30px", "16px"]} color={"gray.600"} mb="8px">
         {description}
        </Text>
        <HStack></HStack>
      </Box>

      <HStack gap={4} mt={"16px"} w={"100%"} justify={"space-between"}>
        <HStack gap={3}>
          <Box as={Users} boxSize={6} color="gray.600" />
          <VStack gap={0} align={"start"}>
            <Text fontWeight={"semibold"}>
              {addedRooms.length || 0} guests
            </Text>
          
          </VStack>
        </HStack>
        <HStack gap={3}>
          <Box as={Bed} boxSize={6} color="gray.600" />
          <VStack gap={0} align={"start"}>
            <Text fontWeight={"semibold"}>
              {addedRooms.length || 0} Rooms
            </Text>
           
          </VStack>
        </HStack>
        <HStack gap={3}>
          <Box as={Bath} boxSize={6} color="gray.600" />
          <VStack gap={0} align={"start"}>
            <Text fontWeight={"semibold"}>
              {addedRooms.length || 0} Bathroom
            </Text>
          
          </VStack>
        </HStack>
        <HStack gap={3}>
          <Box as={Home} boxSize={6} color="gray.600" />
          <VStack gap={0} align={"start"}>
            <Text fontWeight={"semibold"}>
              {selectedProperty}
            </Text>
          
          </VStack>
        </HStack>
      </HStack>

      <Box w={"100%"} bg={"lightgray"} h={"1px"} my={"32px"} />

      {/* Awards & Recognition */}
      <Box>
        <Text fontSize={"24px"} fontWeight="bold" my="24px">
          Awards & Recognition
        </Text>

        <HStack
          w={"100%"}
          h={"150px"}
          justify={"space-between"}
          gap={2}
          align={"start"}
        >
          <Box
            w={"100%"}
            h={"100%"}
            bg={"purple.100"}
            borderRadius={"16px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Award size={"32px"} color="#A855F7" />
            <Text mt={"8px"} fontWeight={"semibold"} fontSize={"18px"}>
              Crib Overlord
            </Text>
            <Text fontSize={"16px"} color={"gray.600"}>
              5 years of excellence
            </Text>
          </Box>
          <Box
            w={"100%"}
            h={"100%"}
            bg={"red.100"}
            borderRadius={"16px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heart size={"32px"} color="red" />
            <Text mt={"8px"} fontWeight={"semibold"} fontSize={"18px"}>
              Guests' Favorite
            </Text>
            <Text fontSize={"16px"} color={"gray.600"}>
              Saved by 1000+
            </Text>
          </Box>
          <Box
            w={"100%"}
            h={"100%"}
            bg={"green.100"}
            borderRadius={"16px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <TrendingUp size={"32px"} color="#22C55E" />
            <Text mt={"8px"} fontWeight={"semibold"} fontSize={"18px"}>
              High Demand
            </Text>
            <Text fontSize={"16px"} color={"gray.600"}>
              Booked 95% of the time
            </Text>
          </Box>
          <Box
            w={"100%"}
            h={"100%"}
            bg={"blue.100"}
            borderRadius={"16px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Star size={"32px"} color="#3B82F6" />
            <Text mt={"8px"} fontWeight={"semibold"} fontSize={"18px"}>
              Top Rated
            </Text>
            <Text fontSize={"16px"} color={"gray.600"}>
              4.9 out of 5 stars
            </Text>
          </Box>
        </HStack>
      </Box>

      <Box w={"100%"} bg={"lightgray"} h={"1px"} my={"32px"} />

      {/* Host Information */}
      <Box
        w={"100%"}
        h={"100%"}
        border={"1px solid lightgray"}
        borderRadius={"16px"}
        p={4}
        px={6}
      >
        <HStack gap={2}>
          <Box p={8} borderRadius={"full"} bg={"gray.200"}></Box>
          <VStack gap={0} align={"start"}>
            <HStack w={"100%"} justify={"center"} align={"center"} gap={4}>
              <Text fontWeight={"semibold"} fontSize={"24px"}>
                Emma
              </Text>
              <Box>
                <Box
                  w={"fit-content"}
                  bg="linear-gradient(135deg, rgba(103,58,183,1) 40%, rgba(69,123,207,1) 100%)"
                  py={1}
                  px={4}
                  rounded={"full"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  fontWeight={"semibold"}
                  color={"white"}
                  fontSize={"12px"}
                >
                  <Award color="white" size={"18px"} /> Crib Overlord
                </Box>
              </Box>
            </HStack>
            <Text color={"gray.600"}>Joined in 2018</Text>
          </VStack>
        </HStack>
        <HStack mt={4} w={"100%"}>
          <VStack align={"start"} w={"100%"}>
            <Text fontWeight={"semibold"} fontSize={"16px"}>
              100% response rate
            </Text>
            <Text color={"gray.600"}>Responds within an hour</Text>
          </VStack>
          <VStack align={"start"} w={"100%"}>
            <HStack gap={2} justify={"center"} align={"center"}>
              <Text fontWeight={"semibold"} fontSize={"16px"}>
                4.9
              </Text>
              <Star size={"18px"} color="orange" />
            </HStack>
            <Text color={"gray.600"}>186 reviews</Text>
          </VStack>
        </HStack>
        <Box w={"100%"} mt={4}>
          <Text fontSize={"16px"}>
            Hi, I'm Emma! I'm a passionate traveler and love to share the beauty
            of Malibu with guests from around the world. As a local, I can
            provide insider tips on the best beaches, restaurants, and hidden
            gems in the area.
          </Text>
        </Box>
        <Box
          as={"button"}
          gap={2}
          w={"100%"}
          h={"50px"}
          mt={"24px"}
          bg={"black"}
          borderRadius={"16px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          transition={"all 0.3s"}
          _hover={{ bg: "gray.700", color: "black" }}
        >
          <MessageCircle color="white" size={"18px"} />
          <Text color={"white"} fontWeight={"semibold"} fontSize={"14px"}>
            Contact Host
          </Text>
        </Box>
      </Box>

      {/* Enhance Your Stay with Packs Section */}
      <Box>
        <Text fontSize={"24px"} fontWeight="bold" my="24px">
          Enhance Your Stay with Packs
        </Text>
        <HStack
          w={"100%"}
          justify={"space-between"}
          align={"start"}
          flexWrap={{ base: "wrap", md: "wrap" }}
          gap={4}
        >
           {packs.map((pack) => (
      <PackCard
        key={pack.id}
        title={pack.title}
        description={pack.description}
        price={pack.price}
      />
    ))}
        </HStack>
      </Box>

      {/* Unique Adventures Nearby Section */}
      <Box>
        <Text fontSize={"24px"} fontWeight="bold" my="24px">
          Unique Adventures Nearby
        </Text>
        <HStack
          w={"100%"}
          justify={"space-between"}
          align={"start"}
          flexWrap={{ base: "wrap", md: "wrap" }}
          gap={4}
        >
          <PackCard
            title="Beach Essentials"
            description="Beach towels, Umbrellas, Snorkeling Gear, Cooler, Beach towels, Umbrellas, Snorkeling Gear, Cooler"
            price={50}
          />
          <PackCard
            title="Beach Essentials"
            description="Beach towels, Umbrellas, Snorkeling Gear, Cooler"
            price={50}
          />
        </HStack>
      </Box>

      {/* House Rules Section */}
      <Box>
        <Text fontSize={"24px"} fontWeight="bold" my="24px">
          House Rules
        </Text>
        <Box
          w={"100%"}
          border={"1px solid lightgray"}
          borderRadius={"16px"}
          p={4}
          px={6}
        >
          <HStack gap={4}>
            <VStack w={"100%"} align={"start"} gap={6}>
              <HStack gap={3}>
                <Box as={DoorOpen} boxSize={6} color="gray.600" />
                <VStack align={"start"}>
                  <Text fontWeight={"semibold"}>
                    {addedRooms.length || 0} Check-in
                  </Text>
                  <Text color="gray.600">4</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={CigaretteOff} boxSize={6} color="gray.600" />
                <VStack align={"start"}>
                  <Text fontWeight={"semibold"}>
                    {addedRooms.length || 0} No smoking
                  </Text>
                  <Text color="gray.600">
                    Strictly prohibited inside the property
                  </Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={Music} boxSize={6} color="gray.600" />
                <VStack align={"start"}>
                  <Text fontWeight={"semibold"}>
                    {addedRooms.length || 0} No parties or events
                  </Text>
                  <Text color="gray.600">
                    Not suitable for large gatherings
                  </Text>
                </VStack>
              </HStack>
            </VStack>
            <VStack w={"100%"} align={"start"} gap={6}>
              <HStack gap={3}>
                <Box as={Clock} boxSize={6} color="gray.600" />
                <VStack align={"start"}>
                  <Text fontWeight={"semibold"}>
                    {addedRooms.length || 0} Checkout
                  </Text>
                  <Text color="gray.600">11</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={PawPrint} boxSize={6} color="gray.600" />
                <VStack align={"start"}>
                  <Text fontWeight={"semibold"}>
                    {addedRooms.length || 0} No pets
                  </Text>
                  <Text color="gray.600">
                    Unfortunately, we cannot accommodate pets
                  </Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={Moon} boxSize={6} color="gray.600" />
                <VStack align={"start"}>
                  <Text fontWeight={"semibold"}>
                    {addedRooms.length || 0} Quiet hours
                  </Text>
                  <Text color="gray.600">10</Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
          <Box mt={4} fontSize={"16px"} fontStyle="italic" color={"gray.600"}>
            Please respect these house rules to ensure a comfortable stay for
            everyone. Violation may result in additional fees or termination of
            your stay.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutSummary;