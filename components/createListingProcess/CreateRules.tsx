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

import { toaster, Toaster } from "@/components/chakra-snippets/toaster"

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
    <Box p={6}>
      <Heading as="h2" size="xl" mb={6}>
        Create House Rules
      </Heading>
      <Toaster />

      {/* Predefined Rules */}
      <Box mb={6}>
        <Heading as="h3" size="lg" mb={3}>
          Select Predefined Rules
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {predefinedRules.map((rule) => (
            <Card.Root
              key={rule.id}
              variant="elevated"
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
              transition="background 0.2s"
              onClick={() => addPredefinedRule(rule)}
            >
              <Card.Body
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box mb={2}>{rule.icon}</Box>
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  {rule.title}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </Box>

      {/* Custom Rule Section */}
      <Box mb={6}>
        <Heading as="h3" size="lg" mb={3}>
          Add a Custom Rule
        </Heading>
        <HStack gap={3}>
          <Input
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
            <SelectTrigger>
              <SelectValueText placeholder="Select Icon" />
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
          <VStack gap={3} align="stretch">
            {rules.map((rule, index) => (
              <Flex
                key={index}
                alignItems="center"
                justifyContent="space-between"
                bg="gray.100"
                px={4}
                py={2}
                borderRadius="md"
                boxShadow="sm"
              >
                <HStack gap={2}>
                  <Box>{rule.icon}</Box>
                  <Text fontSize="sm" fontWeight="medium">
                    {rule.title}
                  </Text>
                </HStack>
                <IconButton
                  aria-label="Delete rule"
                  variant="ghost"
                  size="sm"
                  colorScheme="red"
                  onClick={() =>
                    setRules((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <Trash className="w-5 h-5" />
                </IconButton>
              </Flex>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default CreateRules;
