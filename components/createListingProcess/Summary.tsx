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
import AboutSummary from "./summaryComponents/summaryTabs/AboutSummary";
import PaymentCard from "./summaryComponents/PaymentCard";
import LoactionSummary from "./summaryComponents/summaryTabs/LocationSummary";
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
              <AboutSummary />
            </Tabs.Content>
            {/* <Tabs.Indicator /> */}

            <Tabs.Content mt={"16px"} value="Location" className="mt-4">
              {" "}
              <LoactionSummary />
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
          <PaymentCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default Summary;
