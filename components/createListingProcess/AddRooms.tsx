"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Button, Text, Heading, Badge, Card } from "@chakra-ui/react";
import Image from 'next/image';
import {
 
  X,
} from "lucide-react";
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
      alert("Canot gp back Please select a Room type.");
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
    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
  <Card.Root maxW="sm" overflow="hidden" shadow="lg" _hover={{ shadow: "xl" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    
    <Image src="https://via.placeholder.com/300" alt="Room Preview" width={300} height={200} />


    <Card.Body gap="4">
      <Card.Title fontSize="md">{roomType}</Card.Title>
      <Heading as="h3" size="md">{generatedRoomName}</Heading>

      {/* Room Amenities */}
      <Box>
        <Heading as="h4" size="sm" mb={2}>Room Amenities</Heading>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {chooseAmenities.length > 0 ? (
            chooseAmenities.map((amenity, index) => (
              <Badge key={index} colorScheme="gray" variant="solid">{amenity}</Badge>
            ))
          ) : (
            <Text fontSize="sm" color="gray.500">No amenities selected.</Text>
          )}
        </Stack>
      </Box>

      {/* Ensuite Amenities */}
      <Box>
        <Heading as="h4" size="sm" mb={2}>Ensuite Amenities</Heading>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {chooseAmenitiesEnsuite.length > 0 ? (
            chooseAmenitiesEnsuite.map((ensuite, index) => (
              <Badge key={index} colorScheme="gray" variant="solid">{ensuite}</Badge>
            ))
          ) : (
            <Text fontSize="sm" color="gray.500">No ensuite amenities selected.</Text>
          )}
        </Stack>
      </Box>
    </Card.Body>

    <Card.Footer gap="2">
      <Button colorScheme="blue" variant="solid" width="100%" onClick={addRoom}>
        Add Room
      </Button>
    </Card.Footer>
  </Card.Root>
</Box>

        </>
      );
    }
  };

  return (
 
    <>
      <Box className="animate__animated animate__fadeInDown">
        <Heading as="h2" size="lg" mb={2}>
          Add Rooms to Your Crib
        </Heading>
        <Text color="gray.600">Choose the category that best describes your property.</Text>
      </Box>
    
      <Box>
        <Stack justifyContent="center" alignItems="center" width="100%" height="100%" direction="column">
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            width={{ base: "100%", sm: "75%", md: "75%", lg: "50%", xl: "100%" }}
            height="100%"
            mb={6}
          >
            <Progress value={addRoomProgress}  />
    
            <Stack justifyContent="space-between" alignItems="start" direction="row" width="100%" height="100%" mb={6}>
              <Text fontSize="sm">Select Room Type</Text>
              <Text fontSize="sm">Choose Amenities</Text>
              <Text fontSize="sm">Review Generated Name</Text>
              <Text fontSize="sm">Review and Add</Text>
            </Stack>
          </Stack>
        </Stack>
    
        {render()}
    
        <Box width="100%" mt={8} display="flex" alignItems="center" justifyContent="space-between" px={{ base: "5px", sm: "5px", md: "50px", lg: "200px", xl: "100" }}>
          <Button colorScheme="blue" variant="solid" onClick={Previous}>
            Previous
          </Button>
          <Button colorScheme="blue" variant="solid" onClick={next}>
            Next
          </Button>
        </Box>
    
        <Heading as="h2" size="lg" mt={8} mb={4}>
          Added Rooms
        </Heading>
        <Stack direction="row" gap={6} justifyContent="center" alignItems="center" flexWrap="wrap">
          {addedRooms.map((room, index) => (
            <Card.Root key={index} maxW="sm" shadow="lg" overflow="hidden">
              
              {/* Optional Image Placeholder */}
              <Image src="https://via.placeholder.com/300" alt="Room Preview" width={300} height={200} />
    
              <Card.Body gap={4}>
                <Text fontSize="sm" fontWeight="semibold">{room.roomType}</Text>
                <Heading as="h3" size="md">{room.generatedRoomName || "Unnamed Room"}</Heading>
    
                {/* Room Amenities */}
                <Box>
                  <Heading as="h4" size="sm" mb={2}>Room Amenities</Heading>
                  <Stack direction="row" flexWrap="wrap" gap={2}>
                    {room.chooseAmenities.length > 0 ? (
                      room.chooseAmenities.map((amenity, i) => (
                        <Badge key={i} colorScheme="gray" variant="solid">{amenity}</Badge>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.500">No amenities selected.</Text>
                    )}
                  </Stack>
                </Box>
    
                {/* Ensuite Amenities */}
                <Box>
                  <Heading as="h4" size="sm" mb={2}>Ensuite Amenities</Heading>
                  <Stack direction="row" flexWrap="wrap" gap={2}>
                    {room.chooseAmenitiesEnsuite.length > 0 ? (
                      room.chooseAmenitiesEnsuite.map((ensuite, i) => (
                        <Badge key={i} colorScheme="gray" variant="solid">{ensuite}</Badge>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.500">No ensuite amenities selected.</Text>
                    )}
                  </Stack>
                </Box>
              </Card.Body>
    
              <Card.Footer>
                <Button onClick={() => deleteRoom(index)} colorScheme="red" variant="ghost" size="sm" leftIcon={<X size={18} />}>
                  Remove Room
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Stack>
      </Box>
    </>
    
  );
};

export default AddRooms;
