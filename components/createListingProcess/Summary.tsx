"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import { Rating } from "@/components/chakra-snippets/rating";
import { ChatBubbleIcon, Share1Icon } from "@radix-ui/react-icons";
const Summary = () => {
  const {
    title,
    description,
    basePrice,
    uploadedFiles,
    addedRooms,
    address,
    mapUrl,
    packs,
    imageDetails,
    rules,
  } = useListingCreationContext();
  const [value, setValue] = useState<string | null>("About");
  return (
    <Box
      rounded={"lg"}
      p={0}
      mb={8}
      className="animate__animated animate__fadeIn"
      textAlign={{ base: "center", lg: "start" }}
    >
      <Text fontSize={["24px", "30px", "36px"]} fontWeight="bold" mb="8px">
        Summary
      </Text>
      <Text fontSize={["16px", "20px"]} color="gray.600">
        Here&apos;s a summary of your listing.
      </Text>

      <Box mt={"50px"}>
        <Text fontSize={["24px", "30px", "36px"]} fontWeight="bold" mb="8px">
          Luxury Beachfront Villa with Ocean Views
        </Text>

        <HStack w={"100%"} justify={"space-between"}>
          <HStack
            w={"100%"}
            width={"fit-content"}
            //   border={"1px solid lightgray"}
            //  px={3}
            //   p={2}
            rounded={"full"}
          >
            <Rating
              defaultValue={3.5}
              allowHalf
              colorPalette="yellow"
              readOnly
              size="md"
            />
            <Text fontSize={["16px", "18px"]} color="gray.600">
              {" "}
              4.9 186 reviews
            </Text>

            <Box
              rounded={"full"}
              width={"fit-content"}
              // border={"1px solid lightgray"}
              // px={3}
              // p={2}
              fontSize={["16px", "18px"]}
              color="gray.600"
            >
              186 reviews 123 Ocean View Drive, Malibu, California 90265, United
              States
            </Box>
          </HStack>

          <HStack justify={"end"}>
            <Box
              gap={2}
              justifyContent={"space-between"}
              display={"flex"}
              justifyItems={"center"}
              alignItems={"center"}
              as={"button"}
              p={2}
              px={5}
              border={"1px solid lightgray"}
              rounded={"16px"}
              w={"fit-content"}
            >
              <Heart size={20} color="black" />
              Save
            </Box>

            <Box
              gap={2}
              justifyContent={"space-between"}
              display={"flex"}
              justifyItems={"center"}
              alignItems={"center"}
              as={"button"}
              p={2}
              px={5}
              border={"1px solid lightgray"}
              rounded={"16px"}
              w={"fit-content"}
            >
              <Share size={20} color="black" />
              Share
            </Box>
          </HStack>
        </HStack>

        <Flex gap={2} w={"100%"} h={"500px"} mb={8} mt={8}>
          {/* {uploadedFiles.length > 0 ? ( */}

          <Box
            transition={"all 0.3s"}
            w={"100%"}
            h={"100%"}
            borderRadius={"16px"}
            bg={"gray.200"}
            _hover={{
              scale: 1.01,
            }}
            cursor={"pointer"}
          >
            <Box p={2}>
              <Box
                width={"fit-content"}
                border={"1px solid lightgray"}
                bg={"gray.50"}
                p={2}
                px={3}
                rounded={"full"}
              >
                Living Room
              </Box>
            </Box>
          </Box>

          <Box
            w={"100%"}
            h={"100%"}
            borderRadius={"16px"}
            display={"flex"}
            justifyContent={"start"}
          >
            <VStack
              w={"100%"}
              h={"100%"}
              borderRadius={"16px"}
              display={"flex"}
              justifyContent={"start"}
            >
              <Box w={"100%"} h={"100%"} borderRadius={"16px"}>
                <HStack w={"100%"} h={"100%"} borderRadius={"16px"}>
                  <Box
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        Living Room
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        Living Room
                      </Box>
                    </Box>
                  </Box>
                </HStack>
              </Box>
              <Box w={"100%"} h={"100%"} borderRadius={"16px"}>
                <HStack w={"100%"} h={"100%"} borderRadius={"16px"}>
                  <Box
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        Living Room
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    transition={"all 0.3s"}
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"16px"}
                    bg={"gray.400"}
                    _hover={{
                      scale: 1.025,
                    }}
                  >
                    {" "}
                    <Box p={2}>
                      <Box
                        width={"fit-content"}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"full"}
                      >
                        Living Room
                      </Box>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
      {/* Image Gallery */}

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Left Column */}
        <Box flex={2} mb={8}>
          <Tabs.Root
            w={"100%"}
            variant={"plain"}
            mt="50px"
            value={value}
            onValueChange={(details) => setValue(details.value)}
            defaultValue="calendar"
            borderRadius="lg"
          >
            <Tabs.List
              display="flex"
              justifyContent="space-between"
              w="100%"
              gap="20px"
              bg={"gray.200"}
              p={2}
              borderRadius={"16px"}
            >
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="About"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                About
              </Tabs.Trigger>
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="Amenities"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                Amenities
              </Tabs.Trigger>
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="Reviews"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                Reviews
              </Tabs.Trigger>
              <Tabs.Trigger
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100%"}
                value="Location"
                px="4"
                py="2"
                borderRadius="md"
                fontWeight="medium"
                color={"gray.600"}
                _selected={{
                  bg: "white",
                  color: "black",
                }}
              >
                Location
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content mt={"16px"} value="About" className="mt-4">
              <Box>
                <Text
                  fontSize={["24px", "30px", "30px"]}
                  fontWeight="bold"
                  mb="8px"
                >
                  About this crib
                </Text>
                <Text
                  fontSize={["24px", "30px", "16px"]}
                  color={"gray.600"}
                  mb="8px"
                >
                  Experience the ultimate beachfront getaway in this stunning
                  villa. Enjoy breathtaking ocean views, modern amenities, and
                  exclusive access to a private beach. This newly renovated
                  property offers a perfect blend of luxury and comfort, ideal
                  for families or groups looking for a memorable coastal
                  retreat.
                </Text>
                <HStack></HStack>
              </Box>
              <HStack gap={4} mt={"16px"} w={"100%"} justify={"space-between"}>
                <HStack gap={3}>
                  <Box as={Users} boxSize={6} color="gray.600" />
                  <VStack gap={0} justify={"start"} align={"start"}>
                    <Text fontWeight={"semibold"}>
                      {addedRooms.length || 0} guests
                    </Text>
                    <Text color="gray.600">Max occupancy</Text>
                  </VStack>
                </HStack>
                <HStack gap={3}>
                  <Box as={Bed} boxSize={6} color="gray.600" />
                  <VStack gap={0} justify={"start"} align={"start"}>
                    <Text fontWeight={"semibold"}>
                      {addedRooms.length || 0} Bedroom
                    </Text>
                    <Text color="gray.600">5 beds</Text>
                  </VStack>
                </HStack>
                <HStack gap={3}>
                  <Box as={Bath} boxSize={6} color="gray.600" />
                  <VStack gap={0} justify={"start"} align={"start"}>
                    <Text fontWeight={"semibold"}>
                      {addedRooms.length || 0} Bathroom
                    </Text>
                    <Text color="gray.600">Fullbaths</Text>
                  </VStack>
                </HStack>
                <HStack gap={3}>
                  <Box as={Home} boxSize={6} color="gray.600" />
                  <VStack gap={0} justify={"start"} align={"start"}>
                    <Text fontWeight={"semibold"}>
                      {addedRooms.length || 0} Villa
                    </Text>
                    <Text color="gray.600">Property type</Text>
                  </VStack>
                </HStack>
              </HStack>

              <Box w={"100%"} bg={"lightgray"} h={"1px"} my={"32px"} />
              <Box>
                <Text
                  fontSize={["24px", "24px", "24px"]}
                  fontWeight="bold"
                  my="24px"
                >
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
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDir={"column"}
                  >
                    {" "}
                    <Award size={"32px"} color="#A855F7" />{" "}
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
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDir={"column"}
                  >
                    {" "}
                    <Heart size={"32px"} color="red" />{" "}
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
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDir={"column"}
                  >
                    {" "}
                    <TrendingUp size={"32px"} color="#22C55E" />{" "}
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
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDir={"column"}
                  >
                    {" "}
                    <Star size={"32px"} color="#3B82F6" />{" "}
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
                  <VStack gap={0} justify={"start"} align={"start"}>
                    <HStack
                      w={"100%"}
                      justify={"center"}
                      align={"center"}
                      gap={4}
                    >
                      {" "}
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
                  <VStack gap={0} justify={"start"} align={"start"} w={"100%"}>
                    <Text fontWeight={"semibold"} fontSize={"16px"}>
                      100% response rate
                    </Text>
                    <Text color={"gray.600"}>Responds within an hour</Text>
                  </VStack>

                  <VStack gap={0} justify={"start"} align={"start"} w={"100%"}>
                    <Box
                      display={"flex"}
                      gap={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {" "}
                      <Text fontWeight={"semibold"} fontSize={"16px"}>
                        4.9
                      </Text>
                      <Star size={"18px"} color="orange" />
                    </Box>

                    <Text color={"gray.600"}>186 reviews</Text>
                  </VStack>
                </HStack>

                <Box gap={0} w={"100%"} mt={4}>
                  <Text fontSize={"16px"}>
                    Hi, I'm Emma! I'm a passionate traveler and love to share
                    the beauty of Malibu with guests from around the world. As a
                    local, I can provide insider tips on the best beaches,
                    restaurants, and hidden gems in the area.
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
                  _hover={{
                    bg: "gray.700",
                    color: "black",
                  }}
                >
                  <MessageCircle color="white" size={"18px"} />
                  <Text
                    color={"white"}
                    fontWeight={"semibold"}
                    fontSize={"14px"}
                  >
                    {" "}
                    Contact Host
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text
                  fontSize={["24px", "24px", "24px"]}
                  fontWeight="bold"
                  my="24px"
                >
       Enhance Your Stay with Packs
                </Text>

                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                  align={"start"}
                  flexWrap={{ base: "wrap", md: "wrap" }}
                  gap={4}
                >
                  <Box
                    w={"480px"}
                    h={"350px"}
                    bg={"white"}
                    shadow={"md"}
                    borderRadius={"16px"}
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                    flexDir={"column"}
                  >
                    <Box
                      w={"100%"}
                      h={"500px"}
                      bg={"gray.100"}
                      borderRadius={"16px"}
                      borderBottomRadius={"0px"}
                    ></Box>

                    <Box p={4} w={"100%"} h={"100%"}>
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Package />
                        <Text fontWeight={"semibold"} fontSize={"18px"}>
                          Beach Essentials
                        </Text>
                      </Box>
                      <Box display={"flex"} flexDir={"row"} gap={0.5} mt={2}>
                        <Text fontSize={"16px"} color={"gray.600"}>
                          Beach towels, Umbrellas, Snorkeling Gear, Cooler,
                          Beach towels, Umbrellas, Snorkeling Gear, Cooler
                        </Text>
                      </Box>
                    </Box>
                    <HStack
                      p={4}
                      w={"100%"}
                      gap={2}
                      mt={8}
                      alignItems={"center"}
                      justify={"space-between"}
                    >
                      <Text fontWeight={"semibold"} fontSize={"32px"}>
                        $50
                      </Text>
                      <HStack>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
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
                          1
                        </Box>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
                        >
                          <Minus />
                        </Box>
                      </HStack>
                    </HStack>
                  </Box>

                  <Box
                    w={"480px"}
                    h={"350px"}
                    bg={"white"}
                    shadow={"md"}
                    borderRadius={"16px"}
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                    flexDir={"column"}
                  >
                    <Box
                      w={"100%"}
                      h={"500px"}
                      bg={"gray.100"}
                      borderRadius={"16px"}
                      borderBottomRadius={"0px"}
                    ></Box>

                    <Box p={4} w={"100%"} h={"100%"}>
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Package />
                        <Text fontWeight={"semibold"} fontSize={"18px"}>
                          Beach Essentials
                        </Text>
                      </Box>
                      <Box display={"flex"} flexDir={"row"} gap={0.5} mt={2}>
                        <Text fontSize={"16px"} color={"gray.600"}>
                          Beach towels, Umbrellas, Snorkeling Gear, Cooler
                        </Text>
                      </Box>
                    </Box>

                    <HStack
                      p={4}
                      w={"100%"}
                      gap={2}
                      mt={8}
                      alignItems={"center"}
                      justify={"space-between"}
                    >
                      <Text fontWeight={"semibold"} fontSize={"32px"}>
                        $50
                      </Text>
                      <HStack>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
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
                          1
                        </Box>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
                        >
                          <Minus />
                        </Box>
                      </HStack>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
              <Box>
                <Text
                  fontSize={["24px", "24px", "24px"]}
                  fontWeight="bold"
                  my="24px"
                >
                  Unique Adventures Nearby
                </Text>

                <HStack
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                  align={"start"}
                  flexWrap={{ base: "wrap", md: "wrap" }}
                  gap={4}
                >
                  <Box
                    w={"480px"}
                    h={"350px"}
                    bg={"white"}
                    shadow={"md"}
                    borderRadius={"16px"}
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                    flexDir={"column"}
                  >
                    <Box
                      w={"100%"}
                      h={"500px"}
                      bg={"gray.100"}
                      borderRadius={"16px"}
                      borderBottomRadius={"0px"}
                    ></Box>

                    <Box p={4} w={"100%"} h={"100%"}>
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Package />
                        <Text fontWeight={"semibold"} fontSize={"18px"}>
                          Beach Essentials
                        </Text>
                      </Box>
                      <Box display={"flex"} flexDir={"row"} gap={0.5} mt={2}>
                        <Text fontSize={"16px"} color={"gray.600"}>
                          Beach towels, Umbrellas, Snorkeling Gear, Cooler,
                          Beach towels, Umbrellas, Snorkeling Gear, Cooler
                        </Text>
                      </Box>
                    </Box>
                    <HStack
                      p={4}
                      w={"100%"}
                      gap={2}
                      mt={8}
                      alignItems={"center"}
                      justify={"space-between"}
                    >
                      <Text fontWeight={"semibold"} fontSize={"32px"}>
                        $50
                      </Text>
                      <HStack>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
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
                          1
                        </Box>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
                        >
                          <Minus />
                        </Box>
                      </HStack>
                    </HStack>
                  </Box>

                  <Box
                    w={"480px"}
                    h={"350px"}
                    bg={"white"}
                    shadow={"md"}
                    borderRadius={"16px"}
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                    flexDir={"column"}
                  >
                    <Box
                      w={"100%"}
                      h={"500px"}
                      bg={"gray.100"}
                      borderRadius={"16px"}
                      borderBottomRadius={"0px"}
                    ></Box>

                    <Box p={4} w={"100%"} h={"100%"}>
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Package />
                        <Text fontWeight={"semibold"} fontSize={"18px"}>
                          Beach Essentials
                        </Text>
                      </Box>
                      <Box display={"flex"} flexDir={"row"} gap={0.5} mt={2}>
                        <Text fontSize={"16px"} color={"gray.600"}>
                          Beach towels, Umbrellas, Snorkeling Gear, Cooler
                        </Text>
                      </Box>
                    </Box>

                    <HStack
                      p={4}
                      w={"100%"}
                      gap={2}
                      mt={8}
                      alignItems={"center"}
                      justify={"space-between"}
                    >
                      <Text fontWeight={"semibold"} fontSize={"32px"}>
                        $50
                      </Text>
                      <HStack>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
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
                          1
                        </Box>
                        <Box
                          as={"button"}
                          p={1}
                          border={"1px solid lightgray"}
                          rounded={"6px"}
                        >
                          <Minus />
                        </Box>
                      </HStack>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
              <Box>
                <Text
                  fontSize={["24px", "24px", "24px"]}
                  fontWeight="bold"
                  my="24px"
                >
                  House Rules
                </Text>
                <Box
                  w={"100%"}
                  h={"100%"}
                  border={"1px solid lightgray"}
                  borderRadius={"16px"}
                  p={4}
                  px={6}
                >
                  <HStack
                    w={"100%"}
                    // justify={"start"}
                    // align={"start"}
                    gap={4}
                  >
                    {" "}
                    <VStack
                      w={"100%"}
                      align={"start"}
                      justify={"start"}
                      gap={6}
                    >
                      <HStack gap={3}>
                        <Box as={DoorOpen} boxSize={6} color="gray.600" />
                        <VStack gap={0} justify={"start"} align={"start"}>
                          <Text fontWeight={"semibold"}>
                            {addedRooms.length || 0} Check-in
                          </Text>
                          <Text color="gray.600">4</Text>
                        </VStack>
                      </HStack>
                      <HStack gap={3}>
                        <Box as={CigaretteOff} boxSize={6} color="gray.600" />
                        <VStack gap={0} justify={"start"} align={"start"}>
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
                        <VStack gap={0} justify={"start"} align={"start"}>
                          <Text fontWeight={"semibold"}>
                            {addedRooms.length || 0} No parties or events
                          </Text>
                          <Text color="gray.600">
                            Not suitable for large gatherings
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                    <VStack
                      w={"100%"}
                      align={"start"}
                      justify={"start"}
                      gap={6}
                    >
                      <HStack gap={3}>
                        <Box as={Clock} boxSize={6} color="gray.600" />
                        <VStack gap={0} justify={"start"} align={"start"}>
                          <Text fontWeight={"semibold"}>
                            {addedRooms.length || 0} Checkout
                          </Text>
                          <Text color="gray.600">11</Text>
                        </VStack>
                      </HStack>
                      <HStack gap={3}>
                        <Box as={PawPrint} boxSize={6} color="gray.600" />
                        <VStack gap={0} justify={"start"} align={"start"}>
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
                        <VStack gap={0} justify={"start"} align={"start"}>
                          <Text fontWeight={"semibold"}>
                            {addedRooms.length || 0} Quiet hours
                          </Text>
                          <Text color="gray.600">10</Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </HStack>{" "}
                  <Box
                    mt={4}
                    fontSize={"16px"}
                    fontStyle="italic"
                    color={"gray.600"}
                  >
                    Please respect these house rules to ensure a comfortable
                    stay for everyone. Violation may result in additional fees
                    or termination of your stay.
                  </Box>
                </Box>
              </Box>
            </Tabs.Content>
            {/* <Tabs.Indicator /> */}

            <Tabs.Content mt={"16px"} value="Location" className="mt-4">
              {" "}
              <Box mb={8}>
                <Heading size="md" mb={2}>
                  Location
                </Heading>
                <Text>{address || "No address provided"}</Text>
                {mapUrl ? (
                  <Box mt={2} borderRadius="xl" overflow="hidden">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="250"
                      allowFullScreen
                      loading="lazy"
                      style={{ border: 0 }}
                    />
                  </Box>
                ) : (
                  <Text>No map available</Text>
                )}
              </Box>
            </Tabs.Content>
          </Tabs.Root>
        </Box>

        {/* Right Column: Pricing / Reserve */}
        <Box
          position="sticky"
          top={4}
          flex={1}
          shadow={"md"}
          h={"100%"}
          w={"100%"}
          borderRadius={"16px"}
          pb={8}
        >
          <Box p={6} fontSize={["24px", "30px", "46px"]} fontWeight="bold">
            ${basePrice}{" "}
            <Box
              as={"span"}
              fontSize={"24px"}
              fontWeight="normal"
              color={"gray.600"}
            >
              total{" "}
            </Box>{" "}
          </Box>

          <VStack
            px={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            w={"100%"}
            h={"100%"}
            gap={4}
          >
            <HStack w={"100%"}>
              <Box
                textAlign={"start"}
                as={"button"}
                p={2}
                border={"1px solid lightgray"}
                rounded={"16px"}
                onClick={() => console.log(imageDetails)}
                w={"100%"}
                transition={"all 0.3s"}
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                <Text fontWeight={"semibold"}>CHECK-IN</Text>
                Reserve Now
              </Box>

              <Box
                textAlign={"start"}
                as={"button"}
                p={2}
                border={"1px solid lightgray"}
                rounded={"16px"}
                onClick={() => console.log(imageDetails)}
                w={"100%"}
                transition={"all 0.3s"}
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                <Text fontWeight={"semibold"}>CHECKOUT</Text>
                Reserve Now
              </Box>
            </HStack>

            <Box
              p={2}
              textAlign={"start"}
              as={"button"}
              border={"1px solid lightgray"}
              rounded={"16px"}
              onClick={() => console.log(imageDetails)}
              w={"100%"}
              transition={"all 0.3s"}
              _hover={{
                bg: "black",
                color: "white",
              }}
            >
              <Text fontWeight={"semibold"}>GUEST</Text>1 Adult
            </Box>

            <Box
              mt={2}
              as={"button"}
              gap={2}
              w={"100%"}
              h={"50px"}
              bg={"black"}
              borderRadius={"16px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              transition={"all 0.3s"}
              _hover={{
                bg: "gray.700",
                color: "black",
              }}
            >
              <Text color={"white"} fontWeight={"semibold"} fontSize={"18px"}>
                {" "}
                Reserve
              </Text>
            </Box>

            <HStack w={"100%"} justify={"space-between"} mt={2}>
              <Text textDecoration={"underline"}>$350 × 0 nights</Text>
              <Text>$0</Text>
            </HStack>
            <HStack w={"100%"} justify={"space-between"}>
              <Text textDecoration={"underline"}>Cleaning fee</Text>
              <Text>$350</Text>
            </HStack>
            <Box w={"100%"} bg={"lightgray"} h={"1px"} my={"4px"} />
            <HStack w={"100%"} justify={"space-between"}>
              <Text fontWeight={"semibold"} fontSize={"18px"}>
                Total
              </Text>
              <Text fontWeight={"semibold"} fontSize={"18px"}>
                $350
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Summary;
