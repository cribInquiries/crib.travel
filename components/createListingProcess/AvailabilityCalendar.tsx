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
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            gap={"50px"}
            
          >
            <Tabs.Trigger value="calendar">Calendar</Tabs.Trigger>
            <Tabs.Trigger value="insights">Insights</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          {/* CALENDAR TAB */}
          <Tabs.Content value="calendar"   >
            <h3 className="text-lg font-medium text-center mb-4">
              January 2025
            </h3>
            <div className="flex items-center justify-center">
              <Button variant="ghost">
                <ChevronLeft />
              </Button>
              <div className="grid grid-cols-7 gap-2 w-full max-w-3xl text-center">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <p key={day} className="font-bold">
                    {day}
                  </p>
                ))}
                {prices.map((price, index) => {
                  const isSelected = selectedDates.includes(index + 1);
                  return (
                    <div
                      key={index}
                      className={`border p-2 rounded-md cursor-pointer transition ${
                        isSelected
                          ? "bg-gray-200 text-gray-500 font-bold"
                          : "bg-white hover:bg-blue-300"
                      }`}
                      onClick={() => toggleDateSelection(index + 1)}
                    >
                      <p>{index + 1}</p>
                      <p className="text-sm font-semibold">${price}</p>
                    </div>
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
                    transition="all 0.3s"
                    as="button"
                    bg={"white"}
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
                    w={"300px"}
                    disabled={selectedDates.length === 0}
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Edit Selected Dates
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white rounded-md shadow-md p-4 max-w-md">
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
                transition="all 0.3s"
                as="button"
                w={"300px"}
                bg={"white"}
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
                variant="outline"
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
              <Input type="number" placeholder="Default Daily Rate ($)" />
              <Input type="number" placeholder="Default Weekend Rate (%)" />
              <Input
                type="text"
                placeholder="Blackout Dates (e.g., 2025-01-01, 2025-01-02)"
              />
              <Button>Save Settings</Button>
            </div>
          </Tabs.Content>
        </Tabs.Root>
  
    </Box>
  
  );
};

export default AvailabilityCalendar;
