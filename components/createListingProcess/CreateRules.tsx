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
} from "lucide-react";

const predefinedRules = [
  {
    id: 1,
    title: "No Smoking",
    icon: <Cigarette className="w-6 h-6 text-gray-700" />,
  },
  { id: 2, title: "No Pets", icon: <Dog className="w-6 h-6 text-gray-700" /> },
  {
    id: 3,
    title: "Emergency Only",
    icon: <AlertTriangle className="w-6 h-6 text-gray-700" />,
  },
  {
    id: 4,
    title: "No Loud Music",
    icon: <Volume2 className="w-6 h-6 text-gray-700" />,
  },
  {
    id: 5,
    title: "No Parties",
    icon: <PartyPopper className="w-6 h-6 text-gray-700" />,
  },
  {
    id: 6,
    title: "Clean After Use",
    icon: <Brush className="w-6 h-6 text-gray-700" />,
  },
];

const availableIcons = createListCollection({
  items: [
    { value: "Cigarette", icon: <Cigarette className="w-5 h-5" /> },
    { value: "Dog", icon: <Dog className="w-5 h-5" /> },
    { value: "AlertTriangle", icon: <AlertTriangle className="w-5 h-5" /> },
    { value: "Volume2", icon: <Volume2 className="w-5 h-5" /> },
    { value: "PartyPopper", icon: <PartyPopper className="w-5 h-5" /> },
    { value: "Brush", icon: <Brush className="w-5 h-5" /> },
  ],
});

const CreateRules = () => {
  const { rules, setRules } = useListingCreationContext();
  const [customRule, setCustomRule] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const addPredefinedRule = (rule: { title: string; icon: JSX.Element }) => {
    setRules((prev) => [...prev, rule]);
    toaster.create({
      title: "Rule added.",
      description: `${rule.title} has been added to the rules.`,
      type: "success",
      duration: 3000,
    });
  };

  const addCustomRule = () => {
    const selectedIconData = availableIcons.items.find(
      (icon: { value: string }) => icon.value === selectedIcon,
    );
    if (customRule && selectedIconData) {
      setRules((prev) => [
        ...prev,
        { title: customRule, icon: selectedIconData.icon },
      ]);
      setCustomRule("");
      setSelectedIcon("");
      toaster.create({
        title: "Custom rule added.",
        description: `${customRule} has been added to the rules.`,
        type: "success",
        duration: 3000,
      });
    }
  };

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
      <Box mb={6} mt={6}>
        <Flex wrap="wrap" gap={4}>
          {predefinedRules.map((rule) => (
            <Box
              shadow={"none"}
              border="1px solid"
              borderColor={"gray.300"}
              p={4}
              w={"200px"}
              key={rule.id}
              borderRadius="md"
              cursor="pointer"
              _hover={{
               
                color: "white",

                transition: "all 0.3s",
              }}
              transition="background 0.2s"
              onClick={() => addPredefinedRule(rule)}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2}>{rule.icon}</Box>
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  {rule.title}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

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
            flex={1}
          />

          <SelectRoot
            size="sm"
            width="320px"
            variant="outline"
            collection={availableIcons}
            value={[selectedIcon]}
            onValueChange={(selected) => setSelectedIcon(selected.value[0])}
          >
            <SelectTrigger
              height="50px"
              w={"100%"}
              rounded={"md"}
              textAlign={"center"}
              border="1px solid #E2E8F0"
            >
              <SelectValueText placeholder="Select Icon" textAlign={"center"} />
            </SelectTrigger>
            <SelectContent>
              {availableIcons.items.map(
                (option: { value: string; icon: JSX.Element }) => (
                  <SelectItem key={option.value} item={option}>
                    <HStack gap={2}>
                      {option.icon} <Text>{option.value}</Text>
                    </HStack>
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </SelectRoot>

          <Button
            colorScheme="blue"
            onClick={addCustomRule}
            disabled={!customRule || !selectedIcon}
          >
            Add Rule
          </Button>
        </HStack>
      </Box>

      {/* Added Rules */}
      <Box>
        <Heading as="h3" size="lg" mb={3}>
          Added Rules
        </Heading>
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
               
                color: "white",

                transition: "all 0.3s",
              }}
              transition="background 0.2s"
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box mb={2}>{rule.icon}</Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
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
