"use client";

import React from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Stack,
  Button,
  Input,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  Icon,
  Flex,
  Textarea,
} from "@chakra-ui/react";

const ListingDetails = () => {
  const { title, setTitle, description, setDescription } =
    useListingCreationContext();

  return (
    <Box
      shadow={"md"}
      rounded={"lg"}
      p={8}
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
        Listing Details
      </Text>
      <Text
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
      >
        Enter the details of your property here.
      </Text>

      <Box   mt={"50px"}>
        {/* Title Input */}
        <Box mt={"16px"}>
          <label className="text-sm font-medium text-gray-700">Title</label>
          <Input
            variant="subtle"
            textIndent={2}
            autoFocus
            width="100%"
            height="50px"
            border="1px solid #E2E8F0"
            _focus={{
              border: "1px solid #E2E8F0", // Keeps the border color unchanged
              boxShadow: "none", // Removes the default blue glow
              outline: "none", // Ensures no additional focus outline
            }}
            type="text"
            placeholder="Enter listing title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 rounded-md"
          />
        </Box>

        {/* Description Input */}
        <Box mt={"16px"}>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            variant="subtle"
            textIndent={2}
            autoFocus
            width="100%"
            height="50px"
            border="1px solid #E2E8F0"
            _focus={{
              border: "1px solid #E2E8F0", // Keeps the border color unchanged
              boxShadow: "none", // Removes the default blue glow
              outline: "none", // Ensures no additional focus outline
            }}
            placeholder="Enter listing description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 rounded-md"
            rows={4}
          />
        </Box>

        {/* AI Generate Button */}
        <Button mt={5}
            transition="all 0.3s"
            as="button"
            w={"300px"}
            h={"50px"}
            bg={"white"}
            p={4}
            color={"black"}
            border="1px solid"
            borderRadius="8px"
            borderColor={"gray.300"}
        
            _hover={{
              bg: "black",
              color: "white",

              transition: "all 0.3s",
            }}
              >Generate with AI</Button>
      </Box>
    </Box>
  );
};

export default ListingDetails;
