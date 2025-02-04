"use client";

import React, { useEffect, useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Box, Button, Input, Text } from "@chakra-ui/react";

import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

// NEW import from Chakra’s updated Tabs API
// (this gives you Tabs.Root, Tabs.List, Tabs.Trigger, Tabs.Content, etc.)
import { Tabs } from "@chakra-ui/react";

const AvailabilityCalendar: React.FC = () => {
  const {
    prices,
    setPrices,
    selectedDates,
    setSelectedDates,
    loadingInsights,
    setLoadingInsights,
    insights,
    setInsights,
    editRate,
    setEditRate,
  } = useListingCreationContext();

  const [value, setValue] = useState<string | null>("calendar");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Generate random prices on mount
  // Generate prices for the Calendar once
  useEffect(() => {
    const generatedPrices = [...Array(31)].map(() =>
      Math.floor(Math.random() * (500 - 100) + 100),
    );
    setPrices(generatedPrices);
  }, [setPrices]);

  // EXAMPLE: Simulate loading insights data whenever "insights" tab is selected
  useEffect(() => {
    if (value === "insights") {
      setLoadingInsights(true);
      // Simulate a 2-second async fetch
      const timeoutId = setTimeout(() => {
        // Example data
        setInsights({
          labels: ["January", "February", "March", "April"],
          revenue: [1500, 2000, 2200, 1800],
          occupancy: [70, 75, 80, 65], // Example occupancy data
        });
        setLoadingInsights(false);
      }, 2000);

      // Clean up if the component unmounts or the tab changes
      return () => clearTimeout(timeoutId);
    }
  }, [value, setLoadingInsights, setInsights]);

  // Toggle selected day
  const toggleDateSelection = (day: number) => {
    setSelectedDates((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  // Clear all selected days
  const clearSelection = () => {
    setSelectedDates([]);
  };

  // Save rates for selected days
  const saveEditedRates = () => {
    if (editRate !== "") {
      const updatedPrices = [...prices];
      selectedDates.forEach((date) => {
        updatedPrices[date - 1] = Number(editRate);
      });
      setPrices(updatedPrices);
      setSelectedDates([]);
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
        The Location of Your Property
      </Text>
      <Text
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
      >
        Enter the address of your property to show it on the map.
      </Text>
      {/* New Chakra Tabs */}
      <Tabs.Root
        value={value}
        onValueChange={(details) => setValue(details.value)}
        defaultValue={"calendar"}
      >
        <Tabs.List
          display={"flex"}
          justifyContent={"start"}
          alignContent={"start"}
          w={"100%"}
          gap={"50px"}
        >
          <Tabs.Trigger value="calendar">Calendar</Tabs.Trigger>
          <Tabs.Trigger value="insights">Insights</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        {/* CALENDAR TAB */}
        <Tabs.Content value="calendar">
          <Text
            fontSize={["24px", "24px", "24px", "30px", "36px"]}
            fontWeight="semibold"
            mb="16px"
            textAlign={"center"}
          >
            January
          </Text>
          <div className="flex items-center justify-center">
            <Button variant="ghost">
              <ChevronLeft />
            </Button>
            <div className="grid grid-cols-7 gap-2 w-full  text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <p key={day} className="font-bold">
                  {day}
                </p>
              ))}
              {prices.map((price, index) => {
                const isSelected = selectedDates.includes(index + 1);
                return (
                  <Box
                    as="button"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="8px"
                    width={"100%"}
                    height="100px"
                    border="1px solid"
                    key={index}
                    borderColor={isSelected ? "blue.400" : "gray.300"}
                    bg={isSelected ? "blue.50" : "white"}
                    onClick={() => toggleDateSelection(index + 1)}
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                      bg: "blue.50",
                      borderColor: "blue.400",
                    }}
                    fontWeight={isSelected ? "semibold" : "normal"}
                  >
                    <p>{index + 1}</p>
                    <p className="text-sm font-semibold">${price}</p>
                  </Box>
                );
              })}
            </div>
            <Button variant="ghost">
              <ChevronRight />
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <DialogRoot open={isDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  as="button"
                  w={"300px"}
                  bg={"white"}
                  h={"50px"}
                  p={2}
                  color={"black"}
                  border="1px solid"
                  borderRadius="8px"
                  borderColor={"gray.300"}
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                  disabled={selectedDates.length === 0}
                  onClick={() => setIsDialogOpen(true)}
                >
                  Edit Selected Dates
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Selected Dates</DialogTitle>
                </DialogHeader>
                <Input
                  type="number"
                  placeholder="Set New Rate ($)"
                  value={editRate}
                  onChange={(e) => setEditRate(Number(e.target.value) || "")}
                  className="mt-2"
                />
                <div className="flex justify-end gap-2 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false);
                      clearSelection();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={editRate === ""}
                    onClick={() => {
                      saveEditedRates();
                      setIsDialogOpen(false);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </DialogContent>
            </DialogRoot>

            <Button
              as="button"
              w={"300px"}
              bg={"white"}
              h={"50px"}
              p={2}
              color={"black"}
              border="1px solid"
              borderRadius="8px"
              borderColor={"gray.300"}
              _hover={{
                bg: "black",
                color: "white",

                transition: "all 0.3s",
              }}
              disabled={selectedDates.length === 0}
              onClick={clearSelection}
            >
              Clear Selection
            </Button>
          </div>
        </Tabs.Content>

        {/* INSIGHTS TAB */}
        <Tabs.Content value="insights" className="mt-4">
          <h3 className="text-lg font-medium mb-4">Revenue Insights</h3>
          {loadingInsights ? (
            <p>Loading insights...</p>
          ) : (
            insights && (
              <div className="w-full">
                <Bar
                  data={{
                    labels: insights.labels,
                    datasets: [
                      {
                        label: "Revenue ($)",
                        data: insights.revenue,
                        backgroundColor: "rgba(75, 192, 192, 0.5)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
            )
          )}
        </Tabs.Content>

        {/* SETTINGS TAB */}
        <Tabs.Content value="settings" className="mt-4">
          <h3 className="text-lg font-medium mb-4">Pricing Settings</h3>
          <div className="space-y-3">
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
              placeholder="Enter custom rule"
              type="number"
              placeholder="Default Daily Rate ($)"
            />
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
              type="number"
              placeholder="Default Weekend Rate (%)"
            />
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
              placeholder="Blackout Dates (e.g., 2025-01-01, 2025-01-02)"
            />
            <Button
              transition="all 0.3s"
              as="button"
              w={"200px"}
              bg={"white"}
              h={"50px"}
              p={2}
              color={"black"}
              border="1px solid"
              borderRadius="8px"
              borderColor={"gray.300"}
              _hover={{
                bg: "black",
                color: "white",

                transition: "all 0.3s",
              }}
              colorScheme="blue"
            >
              Save Settings
            </Button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default AvailabilityCalendar;
