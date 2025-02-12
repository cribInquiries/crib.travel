"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Stack, Text, Button } from "@chakra-ui/react";

import BedroomAmenities from "./Amemities/BedroomAmenities";
import BathroomAmenities from "./Amemities/BathroomAmenities";
import KitchenAmenities from "./Amemities/KitchenAmenities";
import LivingRoomAmenities from "./Amemities/LivingRoomAmenities";
import DiningRoomAmenities from "./Amemities/DiningRoomAmenities";
import OfficeAmenities from "./Amemities/OfficeAmenities";
import OutdoorSpaceAmenities from "./Amemities/OutdoorSpaceAmenities";
import LaundryAmenities from "./Amemities/LaundryAmenities";

interface SelectRoomTypeProps {
  roomType: string | null;
  setRoomType: React.Dispatch<React.SetStateAction<string | null>>;
  chooseAmenities: string[];
  setChooseAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  chooseAmenitiesEnsuite: string[];
  setChooseAmenitiesEnsuite: React.Dispatch<React.SetStateAction<string[]>>;
}
const ChooseAmenities = ({
  roomType,
  setRoomType,
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
}: SelectRoomTypeProps) => {
  // const [amenitiesBedroom, setAmenitiesBedroom] = useState([])
  const render = () => {
    if (roomType === "Bedroom") {
      return (
        <BedroomAmenities
          roomType={roomType}
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }

    if (roomType === "Bathroom") {
      return (
        <BathroomAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }

    if (roomType === "Kitchen") {
      return (
        <KitchenAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }

    if (roomType === "Living Room") {
      return (
        <LivingRoomAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }
    if (roomType === "Dining Room") {
      return (
        <DiningRoomAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }

    if (roomType === "Office") {
      return (
        <OfficeAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }

    if (roomType === "Outdoor") {
      return (
        <OutdoorSpaceAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }

    if (roomType === "Laundry") {
      return (
        <LaundryAmenities
          setChooseAmenities={setChooseAmenities}
          chooseAmenities={chooseAmenities}
          chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
          setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
        />
      );
    }
  };

  return <>{render()}</>;
};

export default ChooseAmenities;
