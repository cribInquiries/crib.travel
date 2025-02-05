"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Button,
  Text,
  Heading,
  Badge,
  Card,
  Flex,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronDown, X } from "lucide-react";
import SelectRoomType from "./addRoomToYourCrib/SelectRoomType";
import ChooseAmenities from "./addRoomToYourCrib/ChooseAmenities";
import GeneratedRoomName from "./addRoomToYourCrib/GeneratedRoomName";

import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Progress } from "../ui/progress";

interface RoomCardProps {
  roomType: string;
  generatedRoomName: string;
  chooseAmenities: string[];
  chooseAmenitiesEnsuite: string[];
  imageUrl: string;
}

const AddRooms = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { addedRooms, setAddedRooms, addRoomProgress, setAddRoomProgress } =
    useListingCreationContext();

  const [roomType, setRoomType] = useState<string | null>(null);
  const [generatedRoomName, setGeneratedRoomName] = useState<string | null>(
    null,
  );
  const [chooseAmenities, setChooseAmenities] = useState<Array<string>>([]);
  const [chooseAmenitiesEnsuite, setChooseAmenitiesEnsuite] = useState<
    Array<string>
  >([]);

  const deleteRoom = (index: number) => {
    setAddedRooms((prevRooms) => prevRooms.filter((_, i) => i !== index));
  };

  const next = () => {
    if (!roomType) {
      alert("Canot go back Please select a Room type.");
    }
    if (addRoomProgress === 25) {
      // Set addRoomProgress to 20 if selectedProperty is filled
      setAddRoomProgress((prev) => prev + 25);
    }
    if (addRoomProgress === 50) {
      // Set addRoomProgress to 20 if selectedProperty is filled
      setAddRoomProgress((prev) => prev + 25);
    }

    if (addRoomProgress === 75) {
      // Set addRoomProgress to 20 if selectedProperty is filled
      setAddRoomProgress((prev) => prev + 25);
    }
  };

  const Previous = () => {
    if (!roomType) {
      alert("Canot gp back Please select a Room type.");
    }
    if (addRoomProgress === 50) {
      // Set addRoomProgress to 20 if selectedProperty is filled
      setAddRoomProgress((prev) => prev - 25);
    }

    if (addRoomProgress === 75) {
      // Set addRoomProgress to 20 if selectedProperty is filled
      setAddRoomProgress((prev) => prev - 25);
    }

    if (addRoomProgress === 100) {
      // Set addRoomProgress to 20 if selectedProperty is filled
      setAddRoomProgress((prev) => prev - 25);
    }

    // if (addRoomProgress === 20 && selectedProperty) {
    //   // Set addRoomProgress to 20 if selectedProperty is filled
    //   setAddRoomProgress((prev) => prev - 10);
    // } else {
    //   // Optionally, you could show an alert or error message if no property is selected
    //   alert("Please select a property type.");
    // }
  };

  const addRoom = () => {
    if (roomType && generatedRoomName) {
      const newRoom = {
        roomType,
        generatedRoomName,
        chooseAmenities,
        chooseAmenitiesEnsuite,
      };
      setAddedRooms((prev) => [...prev, newRoom]);
      resetForm();
    } else {
      alert("Please complete all steps to add a room.");
    }
  };

  const resetForm = () => {
    setRoomType(null);
    setGeneratedRoomName(null);
    setChooseAmenities([]);
    setChooseAmenitiesEnsuite([]);
    setAddRoomProgress(25);
  };

  // const roomsNavItems = [
  //   { icon: Home, label: "Property Type", progress: 10 },
  //   { icon: Lock, label: "Privacy", progress: 20 },
  //   { icon: MapPin, label: "Location", progress: 30 },
  //   { icon: Bed, label: "Rooms", progress: 40 },

  // ];

  const render = () => {
    if (addRoomProgress === 25) {
      return (
        <>
          <SelectRoomType roomType={roomType} setRoomType={setRoomType} />
        </>
      );
    }

    if (addRoomProgress === 50) {
      return (
        <>
          <ChooseAmenities
            roomType={roomType}
            setRoomType={setRoomType}
            setChooseAmenities={setChooseAmenities}
            chooseAmenities={chooseAmenities}
            chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
            setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
          />
        </>
      );
    }

    if (addRoomProgress === 75) {
      return (
        <>
          <GeneratedRoomName
            roomType={roomType}
            setRoomType={setRoomType}
            generatedRoomName={generatedRoomName}
            setGeneratedRoomName={setGeneratedRoomName}
          />
        </>
      );
    }

    if (addRoomProgress === 100) {
      return (
        <>
          <Text
            fontSize={["16px", "16px", "16px", "16px", "20px"]}
            color="gray.600"
            mt={"50px"}
            textAlign={"center"}
            w={"100%"}
          >
            Review your and confirm your rooms
          </Text>

          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card.Root
              w={"400px"}
              border={"1px solid lightgray"}
              overflow="hidden"
              borderRadius={"16px"}
            >
              {/* Optional Image Placeholder */}

              <Card.Body gap={4} >
                <Text fontSize="xl" fontWeight="semibold">
                  {roomType} : {generatedRoomName}
                </Text>

                {/* Room Amenities */}
                <Box>
                  <Heading as="h4" size="sm" mb={2}>
                    {roomType} Amenities
                  </Heading>
                  <Stack direction="row" flexWrap="wrap" gap={2}>
                    {chooseAmenities.length > 0 ? (
                      chooseAmenities.map((amenity, i) => (
                        <Box
                          key={i}
                          border={"1px solid lightgray"}
                          bg={"gray.50"}
                          p={1}
                          px={2}
                          fontSize={"sm"}
                          rounded={"xl"}
                          color={"gray.600"}
                        >
                          {amenity}
                        </Box>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.500">
                        No amenities selected.
                      </Text>
                    )}
                  </Stack>
                </Box>

                {/* Ensuite Amenities */}
                <Box>
                  <Heading as="h4" size="sm" mb={2}>
                    Ensuite Amenities
                  </Heading>
                  <Stack direction="row" flexWrap="wrap" gap={2}>
                    {chooseAmenitiesEnsuite.length > 0 ? (
                      chooseAmenitiesEnsuite.map((ensuite, i) => (
                        <Box
                          key={i}
                          border={"1px solid lightgray"}
                          bg={"gray.50"}
                          p={1}
                          px={2}
                          fontSize={"sm"}
                          rounded={"xl"}
                          color={"gray.600"}
                        >
                          {ensuite}
                        </Box>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.500">
                        No ensuite amenities selected.
                      </Text>
                    )}
                  </Stack>
                </Box>
              </Card.Body>

              <Card.Footer>
                <Box
                  transition="all 0.3s"
                  as="button"
                  w={"100%"}
                  bg={"white"}
                  p={2}
                  color={"black"}
                  border="1px solid"
                  borderRadius="16px"
                  borderColor={"gray.300"}
                  onClick={addRoom}
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                >
                  Add Room
                </Box>
              </Card.Footer>
            </Card.Root>
          </Box>
        </>
      );
    }
  };

  return (
    <>
      <Box
        rounded={"lg"}
        // shadow={"md"}
        p={0}
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
        <Text
          fontSize={["24px", "24px", "24px", "30px", "36px"]}
          fontWeight="bold"
          mb="8px"
        >
          What type of rooms are you listing?
        </Text>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
        >
          Choose the category that best describes your rooms.
        </Text>

        <Box
          display="flex"
          flexWrap="wrap"
          gap="16px"
          mt="50px"
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
          <Stack
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            direction="column"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="column"
              width={{
                base: "100%",
                sm: "75%",
                md: "75%",
                lg: "100%",
                xl: "100%",
              }}
              height="100%"
            >
              <Stack
                justifyContent="space-between"
                alignItems="start"
                direction="row"
                width="100%"
                height="100%"
                transition={"all 0.3s"}
              >
                <Box
                  bg={"gray.700"}
                  w={"100%"}
                  h={"10px"}
                  textAlign={"center"}
                  borderRadius={"3px"}
                >
                  {" "}
                  <Text
                    fontSize={["16px", "16px", "16px", "16px", "20px"]}
                    color="gray.600"
                    mt={4}
                  >
                    Room Type
                  </Text>
                </Box>
                <Box
                  bg={addRoomProgress >= 50 ? "gray.700" : "gray.200"}
                  w={"100%"}
                  h={"10px"}
                  textAlign={"center"}
                  borderRadius={"3px"}
                  transition={"all 0.3s"}
                >
                  {" "}
                  <Text
                    fontSize={["16px", "16px", "16px", "16px", "20px"]}
                    color="gray.600"
                    mt={4}
                  >
                    Amenities
                  </Text>
                </Box>
                <Box
                  bg={addRoomProgress >=  75 ? "gray.700" : "gray.200"}
                  w={"100%"}
                  h={"10px"}
                  textAlign={"center"}
                  borderRadius={"3px"}
                  transition={"all 0.3s"}
                >
                  <Text
                    fontSize={["16px", "16px", "16px", "16px", "20px"]}
                    color="gray.600"
                    mt={4}
                  >
                    Generated Name
                  </Text>
                </Box>
                <Box
                  bg={addRoomProgress >=  100 ? "gray.700" : "gray.200"}
                  w={"100%"}
                  h={"10px"}
                  textAlign={"center"}
                  borderRadius={"3px"}
                  transition={"all 0.3s"}
                >
                  {" "}
                  <Text
                    fontSize={["16px", "16px", "16px", "16px", "20px"]}
                    color="gray.600"
                    mt={4}
                  >
                    Review
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Stack>

          {render()}

          <Box
            width="100%"
            mt={8}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              transition="all 0.3s"
              as="button"
              w={"auto"}
              p={4}
              bg={"white"}
              color={"black"}
              border="1px solid"
              borderRadius="16px"
              borderColor={"gray.300"}
              onClick={Previous}
              _hover={{
                bg: "gray.200",
                color: "white",
                transition: "all 0.3s",
              }}
            >
              <ArrowLeft size={24} color={"black"} />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              transition="all 0.3s"
              as="button"
              w={"auto"}
              bg={"white"}
              p={4}
              color={"black"}
              border="1px solid"
              borderRadius="16px"
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
          </Box>

          {/* <Heading as="h2" size="lg" mt={8} mb={4}>
            Added Rooms
          </Heading> */}

          <HStack
            direction="row"
            gap={6}
            justifyContent="start"
            alignItems="start"
            flexWrap="wrap"
          >
            {" "}
            <HStack
              direction="row"
              gap={6}
              justifyContent="start"
              alignItems="start"
              flexWrap="wrap"
            >
              {addedRooms.map((room, index) => (
                <AccordionRoot collapsible key={index} w={"400px"}>
                  <AccordionItem value={`item-${index}`} >
                  
                    <AccordionItemTrigger mb={1}>
                      <Box
                        transition="all 0.3s"
                        p={4}
                        bg={"white"}
                        color={"black"}
                        border="1px solid"
                        borderRadius="32px"
                        borderColor={"gray.300"}
                        display={"flex"}
                        gap={4}
                        justifyContent={"space-between"}
                        w={"100%"}
                      >
          
                     
                        <Text
                          transition="all 0.3s"
                          color={"black"}
                          borderColor={"gray.300"}
                        >
                          { room.roomType}:  {room.generatedRoomName && room.generatedRoomName.length > 20
                            ? `${room.generatedRoomName.slice(0, 17)}...`
                            : room.generatedRoomName}
                        </Text>

                                  
                        <ChevronDown />{" "}
                      </Box>
                    </AccordionItemTrigger>

                    <AccordionItemContent>
                      <Card.Root
                       borderRadius={"16px"}
                        w={"400px"}
                        border={"1px solid lightgray"}
                        overflow="hidden"
                      >
                        {/* Optional Image Placeholder */}

                        <Card.Body gap={4}>
                          <Text fontSize="xl" fontWeight="semibold">
                            {room.roomType} : {room.generatedRoomName}
                          </Text>

                          {/* Room Amenities */}
                          <Box>
                            <Heading as="h4" size="sm" mb={2}>
                              {room.roomType} Amenities
                            </Heading>
                            <Stack direction="row" flexWrap="wrap" gap={2}>
                              {room.chooseAmenities.length > 0 ? (
                                room.chooseAmenities.map((amenity, i) => (
                                  <Box
                                    key={i}
                                    border={"1px solid lightgray"}
                                    bg={"gray.50"}
                                    p={1}
                                    px={2}
                                    fontSize={"sm"}
                                    rounded={"xl"}
                                    color={"gray.600"}
                                  >
                                    {amenity}
                                  </Box>
                                ))
                              ) : (
                                <Text fontSize="sm" color="gray.500">
                                  No amenities selected.
                                </Text>
                              )}
                            </Stack>
                          </Box>

                          {/* Ensuite Amenities */}
                          <Box>
                            <Heading as="h4" size="sm" mb={2}>
                              Ensuite Amenities
                            </Heading>
                            <Stack direction="row" flexWrap="wrap" gap={2}>
                              {room.chooseAmenitiesEnsuite.length > 0 ? (
                                room.chooseAmenitiesEnsuite.map(
                                  (ensuite, i) => (
                                    <Box
                                      key={i}
                                      border={"1px solid lightgray"}
                                      bg={"gray.50"}
                                      p={1}
                                      px={2}
                                      fontSize={"sm"}
                                      rounded={"xl"}
                                      color={"gray.600"}
                                    >
                                      {ensuite}
                                    </Box>
                                  ),
                                )
                              ) : (
                                <Text fontSize="sm" color="gray.500">
                                  No ensuite amenities selected.
                                </Text>
                              )}
                            </Stack>
                          </Box>
                        </Card.Body>

                        <Card.Footer>
                          <Box
                            transition="all 0.3s"
                            as="button"
                            w={"100%"}
                            bg={"white"}
                            p={2}
                            color={"black"}
                            border="1px solid"
                            borderRadius="32px"
                            borderColor={"gray.300"}
                            onClick={() => deleteRoom(index)}
                            _hover={{
                              bg: "black",
                              color: "white",

                              transition: "all 0.3s",
                            }}
                          >
                            Remove Room
                          </Box>
                        </Card.Footer>
                      </Card.Root>
                    </AccordionItemContent>
                  </AccordionItem>
                </AccordionRoot>
              ))}
            </HStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default AddRooms;
