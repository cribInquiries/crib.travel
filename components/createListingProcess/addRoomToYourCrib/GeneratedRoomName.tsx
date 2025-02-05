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
    <>
      <Text
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
        mt={"50px"}
      >
      This name is automatically generated based on the room type and amenities.
      </Text>

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
      mt={"16px"}
        variant="subtle"
        textIndent={2}
        autoFocus
        type="text"
        placeholder="Standard Standard Bedroom with Comfort Ensuite"
        width="100%"
        height="50px"
        value={generatedRoomName || ""}
        onChange={(e) => setGeneratedRoomName(e.target.value)}
        border="1px solid #E2E8F0"
        _focus={{
          border: "1px solid #E2E8F0", // Keeps the border color unchanged
          boxShadow: "none", // Removes the default blue glow
          outline: "none", // Ensures no additional focus outline
        }}
      />
    </>
  );
};

export default GeneratedRoomName;
