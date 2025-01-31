import React from "react";
import { Box, Text, Input } from "@chakra-ui/react";


interface GeneratedRoomNameProps {
  generatedRoomName: string | null;
  setGeneratedRoomName: React.Dispatch<React.SetStateAction<string | null>>;
  roomType: string | null;
  setRoomType: React.Dispatch<React.SetStateAction<string | null>>;
}

const GeneratedRoomName = ({
  generatedRoomName,
  setGeneratedRoomName,
  roomType,
  setRoomType,
}: GeneratedRoomNameProps) => {
  return (
    <Box>
      <Box
       
        className={"animate__animated animate__fadeInDown"}
      >
        <Text >
          Generated Room Name
        </Text>
        <Text  color="black">
          This name is automatically generated based on the room type and
          amenities.
        </Text>
      </Box>

      {/* Room Type Input */}
      {/* <Input
        type="text"
        placeholder="Enter Room Type"
        className="w-full h-[50px] border border-gray-300 rounded-md px-4 focus:border-gray-500 focus:ring-0"
        value={roomType || ""}
        onChange={(e) => setRoomType(e.target.value)}
      /> */}

      {/* Generated Room Name Input */}
      <Input
        type="text"
        placeholder="Generated Room Name"
        className="w-full h-[50px] border border-gray-300 rounded-md px-4 mt-4 focus:border-gray-500 focus:ring-0"
        value={generatedRoomName || ""}
        onChange={(e) => setGeneratedRoomName(e.target.value)}
      />
    </Box>
  );
};

export default GeneratedRoomName;
