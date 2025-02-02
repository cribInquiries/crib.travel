"use client";

import React from "react";
import Image from "next/image";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Button,
  Heading,
  Text,
  Card,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Star, Users, Bed, Bath, Share, Heart } from "lucide-react";

const Summary = () => {
  const {
    title,
    description,
    basePrice,
    uploadedFiles,
    addedRooms,
    address,
    mapUrl,
    progress,
    packs,
    imageDetails,
    rules,
  } = useListingCreationContext();

  return (
    <Box maxW="6xl" mx="auto" p={4}>
      {/* Heading */}
      <Heading mb={4}>Preview</Heading>

      {/* Image Gallery */}
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={2}
        h="400px"
        mb={8}
      >
        {uploadedFiles.length > 0 ? (
          <>
            {/* Main Image */}
            <GridItem
              colSpan={2}
              rowSpan={2}
              position="relative"
              borderRadius="xl"
              overflow="hidden"
            >
              <Image
                src={URL.createObjectURL(imageDetails[0].file)}
                alt="Main property view"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </GridItem>

            {/* Additional Images */}
            {imageDetails.slice(1, 5).map((image, index) => (
              <GridItem
                key={index}
                position="relative"
                overflow="hidden"
                borderRadius={index === 3 ? "0 0.75rem 0.75rem 0" : "md"}
              >
                <Image
                  src={URL.createObjectURL(image.file)}
                  alt={image.file.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </GridItem>
            ))}
          </>
        ) : (
          <GridItem
            colSpan={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
            borderRadius="xl"
          >
            <Text>No images uploaded</Text>
          </GridItem>
        )}
      </Grid>

      {/* Main Content Grid */}
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8}>
        {/* Left Column */}
        <Box>
          {/* Property Header */}
          <Box mb={8}>
            <Flex justifyContent="space-between" alignItems="flex-start" mb={4}>
              <Heading size="lg">{title || "Default Title"}</Heading>
              <HStack gap={2}>
                <IconButton variant="outline" aria-label="Share">
                  <Share size="1rem" />
                </IconButton>
                <IconButton variant="outline" aria-label="Like">
                  {" "}
                  <Heart size="1rem" />
                </IconButton>
              </HStack>
            </Flex>

            {/* Guests / Rooms */}
            <HStack gap={4} mb={4}>
              <HStack gap={1}>
                <Box as={Users} boxSize={4} />
                <Text>{addedRooms.length || 0} guests</Text>
              </HStack>
              <HStack gap={1}>
                <Box as={Bed} boxSize={4} />
                <Text>{addedRooms.length} bedrooms</Text>
              </HStack>
              <HStack gap={1}>
                <Box as={Bath} boxSize={4} />
                <Text>
                  {addedRooms.filter(
                    (room) => room.chooseAmenitiesEnsuite.length > 0,
                  ).length || 0}{" "}
                  bathrooms
                </Text>
              </HStack>
            </HStack>

            <Text color="gray.600">
              {description || "No description provided."}
            </Text>
          </Box>

          {/* Location */}
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

          {/* Packs */}
          <Box mb={8}>
            <Heading size="md" mb={4}>
              Enhance Your Stay with Packs
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
              gap={4}
            >
              {packs.map((pack) => (
                <Card.Root key={pack.id} p={4}>
                  <Card.Header size="sm" mb={2}>
                    {pack.title}
                  </Card.Header>
                  <Card.Body fontSize="sm" color="gray.600" mb={2}>
                    {pack.description}
                  </Card.Body>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="semibold">${pack.price}</Text>
                    <Button variant="outline" size="sm">
                      Add
                    </Button>
                  </Flex>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          {/* Rules */}
          <Box mb={8}>
            <Heading size="md" mb={4}>
              House Rules
            </Heading>
            <VStack align="start" gap={3}>
              {rules.map((rule, index) => (
                <HStack key={index} gap={2}>
                  {/* If `rule.icon` is a Lucide icon, you can wrap it similarly: */}
                  {/* <Box as={SomeLucideIcon} boxSize={4} /> */}
                  {rule.icon}
                  <Text>{rule.title}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Box>

        {/* Right Column: Pricing / Reserve */}
        <Card.Root p={6} position="sticky" top={4}>
          <Card.Header fontSize="2xl" fontWeight="semibold" mb={4}>
            ${basePrice}
          </Card.Header>
          <Button
            width="full"
            mb={4}
            onClick={() => {
              console.log(imageDetails);
            }}
          >
            Reserve Now
          </Button>
          <Text fontSize="sm" textAlign="center" color="gray.500">
            You won't be charged yet.
          </Text>
        </Card.Root>
      </Grid>
    </Box>
  );
};

export default Summary;
