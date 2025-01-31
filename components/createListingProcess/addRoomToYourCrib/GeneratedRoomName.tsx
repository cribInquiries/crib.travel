import React from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "@/components/ui/input"; // ShadCN Input

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
        sx={{ mb: "32px" }}
        className={"animate__animated animate__fadeInDown"}
      >
        <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
          Generated Room Name
        </Typography>
        <Typography variant="body1" color="black">
          This name is automatically generated based on the room type and
          amenities.
        </Typography>
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
