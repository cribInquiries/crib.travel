"use client";

import React, { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Stack,
  Button,
  Input,
  Heading,
  Text,
  Flex,
  Grid,
  HStack,
  VStack,
  createListCollection,
  Card,
  IconButton,
} from "@chakra-ui/react";

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/chakra-snippets/select";

import { toaster, Toaster } from "@/components/chakra-snippets/toaster";

import {
  Trash,
  Cigarette,
  Dog,
  AlertTriangle,
  Volume2,
  PartyPopper,
  Brush,
  X,
  PlusIcon,
} from "lucide-react";

const CreateRules = () => {
  const { rules, setRules } = useListingCreationContext();
  const [customRule, setCustomRule] = useState<string>("");

  const addCustomRule = () => {
    if (customRule) {
      setRules((prev) => [...prev, { title: customRule }]);
      setCustomRule("");
    }
  };

  const deleteRoom = (index: number) => {
    setRules((prevRooms) => prevRooms.filter((_, i) => i !== index));
  };

  return (
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
        Add Rules
      </Text>
      <Text
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
      >
        Rules help guests know what is allowed and what is not allowed in
      </Text>
      {/* <Toaster /> */}

      {/* Predefined Rules */}
      <Box mb={6} mt={6}></Box>

      {/* Custom Rule Section */}
      <Box mb={6}>
        <HStack gap={3}>
          <Input
            variant="subtle"
            textIndent={2}
            autoFocus
            type="text"
            width="100%"
            height="50px"
            border="1px solid #E2E8F0"
            _focus={{
              border: "1px solid #E2E8F0", // Keeps the border color unchanged
              boxShadow: "none", // Removes the default blue glow
              outline: "none", // Ensures no additional focus outline
            }}
            placeholder="Enter custom rule"
            value={customRule}
            onChange={(e) => setCustomRule(e.target.value)}
          />

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            as={Button}
            onClick={addCustomRule}
            borderColor={"gray.300"}
            bg={"white"}
            border={"1px solid #E2E8F0"}
            w={"50px"}
            h={"50px"}
            _hover={{
              bg: "gray.200",
              color: "white",

              transition: "all 0.3s",
            }}
          >
            <PlusIcon />
          </Box>
        </HStack>
      </Box>

      {/* Added Rules */}
      <Box > 
        <Text mb={2}
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
        >
          Added Rules
        </Text>
        {rules.length === 0 ? (
          <Text color="gray.500">No rules added yet.</Text>
        ) : (
          <HStack flexWrap={"wrap"} gap={3} align="stretch">
            {rules.map((rule, index) => (
              <Box
                shadow={"none"}
                border="1px solid"
                borderColor={"gray.300"}
                p={4}
                w={"200px"}
                key={index}
                borderRadius="md"
                cursor="pointer"
                _hover={{
                  transition: "all 0.3s",
                }}
                transition="background 0.2s"
              >
                <Box onClick={() => deleteRoom(index)} cursor="pointer">
                  <X size={20} />
                </Box>
                <Box
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="left"
                >
                  <Text fontSize="md" fontWeight="medium">
                    {rule.title}
                  </Text>
                </Box>
              </Box>
            ))}
          </HStack>
        )}
      </Box>
    </Box>
  );
};

export default CreateRules;
