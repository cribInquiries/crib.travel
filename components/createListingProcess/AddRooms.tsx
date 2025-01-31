"use client";
import React, { useEffect, useState } from "react";

import { Box, Stack, Typography } from "@mui/material";
import {
  Home,
  Building2,
  Hotel,
  Warehouse,
  Tent,
  TreePine,
  Sailboat,
  Caravan,
  Castle,
  TreePine as PalmTree,
  Mountain,
  Building,
  LandPlot,
  Building as Barn,
  Building as Bungalow,
  Umbrella,
  Cone as Condo,
  Castle as Cottage,
  BedDouble,
  Home as Farmhouse,
  Space as Loft,
  Home as MobileHome,
  Ribbon as Ranch,
  Space as Studio,
  Building as Townhouse,
  Hotel as Villa,
  Bed,
  Bath,
  ChefHat,
  Sofa,
  Briefcase,
  Tree,
  Waves,
  Shirt,
  Badge,
  ShowerHead,
  Wifi,
  Coffee,
  X,
} from "lucide-react";
import SelectRoomType from "./addRoomToYourCrib/SelectRoomType";
import ChooseAmenities from "./addRoomToYourCrib/ChooseAmenities";
import GeneratedRoomName from "./addRoomToYourCrib/GeneratedRoomName";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

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
          <div className="w-full flex justify-center items-center">
            <Card
              className="w-full max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* <div className="relative h-48 overflow-hidden">
                <div className="bg-gray-200 h-full w-full" />
              </div> */}
              <CardHeader>
                <CardTitle className="text-sm font-semibold">
                  {roomType}
                </CardTitle>
                <CardTitle className="text-2xl font-semibold">
                  {generatedRoomName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 ">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-start">
                      Room Amenities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {chooseAmenities.length > 0 ? (
                        chooseAmenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full flex items-center gap-1"
                          >
                            {amenity}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-gray-500 text-start">
                          No amenities selected.
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-start">
                      Ensuite Amenities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {chooseAmenitiesEnsuite.length > 0 ? (
                        chooseAmenitiesEnsuite.map((ensuite, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full flex items-center gap-1"
                          >
                            {ensuite}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-gray-500">
                          No ensuite amenities selected.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center px-6 py-4">
                <Button
                  className="w-full bg-black text-white hover:bg-gray-800"
                  onClick={addRoom}
                >
                  Add Room
                </Button>
              </CardFooter>
            </Card>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Box
        sx={{ mb: "32px" }}
        className={"animate__animated animate__fadeInDown"}
      >
        <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
          Add Rooms to Your Crib
        </Typography>
        <Typography variant="body1" color="black">
          Choose the category that best describes your property.
        </Typography>
      </Box>
      <Box px={{ xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          direction="column"
          sx={{
            mt: "30px",
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            width={{ xs: "100%", sm: "75%", md: "75%", lg: "50%", xl: "100%" }}
            height="100%"
            mb={"24px"}
          >
            <Progress value={addRoomProgress} className="w-full" />

            <Stack
              justifyContent="space-between"
              alignItems="start"
              direction="row"
              width={"100%"}
              height="100%"
              mb={"24px"}
            >
              <Typography variant="body1">Select Room Type</Typography>
              <Typography variant="body1">Choose Amenities</Typography>
              <Typography variant="body1">Review Generated Name</Typography>
              <Typography variant="body1">Review and Add</Typography>
            </Stack>
          </Stack>
        </Stack>

        {render()}

        <Box
          sx={{
            width: "100%",
            mt: "32px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: "5px", sm: "5px", md: "50px", lg: "200px", xl: "100" },
          }}
        >
          <Box
            sx={{
              color: "white",
              borderRadius: "8px",
              p: "10px",
              background: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "100%",
            }}
            component={"button"}
            onClick={() => {
              // Check if selectedProperty is filled
              Previous();
            }}
          >
            {" "}
            Previous
          </Box>
          <Box
            sx={{
              transition: "all 0.3s ease-in-out",
              ":hover": {
                transform: "translateY(-1px) scale(1.1)",
              },
              color: "white",
              borderRadius: "8px",
              p: "10px",
              background: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "100%",
            }}
            component={"button"}
            onClick={() => {
              // Check if selectedProperty is filled
              next();
            }}
          >
            {" "}
            Next
          </Box>
        </Box>
        <h2 className="text-xl font-semibold mb-3">Added Rooms</h2>
        <div className="w-full  mt-10 flex flex-row items-start justify-center  ">
          <div className=" mt-10 flex flex-row items-start justify-center gap-8 ">
            {addedRooms.map((room, index) => (
              <div
                className="w-full flex justify-center items-center"
                key={index}
              >
                <Card
                  className="w-full h-[350px] max-w-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl overflow-auto"
                  onMouseEnter={() => setIsHovered?.(true)}
                  onMouseLeave={() => setIsHovered?.(false)}
                >
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold">
                      {room.roomType}
                    </CardTitle>

                    <CardTitle className="text-xl font-semibold">
                      {room.generatedRoomName || "Unnamed Room"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Room Amenities */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-start">
                          Room Amenities
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {room.chooseAmenities.length > 0 ? (
                            room.chooseAmenities.map((amenity, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full"
                              >
                                {amenity}
                              </span>
                            ))
                          ) : (
                            <span className="text-sm text-gray-500 text-start">
                              No amenities selected.
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Ensuite Amenities */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-start">
                          Ensuite Amenities
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {room.chooseAmenitiesEnsuite.length > 0 ? (
                            room.chooseAmenitiesEnsuite.map((ensuite, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full"
                              >
                                {ensuite}
                              </span>
                            ))
                          ) : (
                            <span className="text-sm text-gray-500">
                              No ensuite amenities selected.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center px-6 py-4">
                    <Button
                      onClick={() => deleteRoom(index)}
                      className="w-full bg-black text-white hover:bg-gray-800  botoom-2 right-2"
                    >
                      <X size={18} /> Remove Room
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

export default AddRooms;
