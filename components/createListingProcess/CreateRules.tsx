"use client";

import React, { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trash,
  Cigarette,
  Dog,
  AlertTriangle,
  Volume2,
  PartyPopper,
  Brush,
} from "lucide-react";
import Box from "@mui/material/Box";

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

const availableIcons = [
  { value: "Cigarette", icon: <Cigarette className="w-5 h-5" /> },
  { value: "Dog", icon: <Dog className="w-5 h-5" /> },
  { value: "AlertTriangle", icon: <AlertTriangle className="w-5 h-5" /> },
  { value: "Volume2", icon: <Volume2 className="w-5 h-5" /> },
  { value: "PartyPopper", icon: <PartyPopper className="w-5 h-5" /> },
  { value: "Brush", icon: <Brush className="w-5 h-5" /> },
];

const CreateRules = () => {
  const { rules, setRules } = useListingCreationContext();
  const [customRule, setCustomRule] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const addPredefinedRule = (rule: { title: string; icon: JSX.Element }) => {
    setRules((prev) => [...prev, rule]);
  };

  const addCustomRule = () => {
    const selectedIconData = availableIcons.find(
      (icon) => icon.value === selectedIcon,
    );
    if (customRule && selectedIconData) {
      setRules((prev) => [
        ...prev,
        { title: customRule, icon: selectedIconData.icon },
      ]);
      setCustomRule("");
      setSelectedIcon("");
    }
  };

  return (
    <Box
      sx={{
      
        px: { xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" },
      }}
    >
      <div className="p-6  mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Create House Rules</h2>

        {/* Predefined Rules */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Select Predefined Rules</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {predefinedRules.map((rule) => (
              <Card
                key={rule.id}
                className="p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                onClick={() => addPredefinedRule(rule)}
              >
                <div className="mb-2">{rule.icon}</div>
                <p className="text-sm font-medium text-gray-700">
                  {rule.title}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Rule Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Add a Custom Rule</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              placeholder="Enter custom rule"
              value={customRule}
              onChange={(e) => setCustomRule(e.target.value)}
              className="w-full"
            />

            <Select value={selectedIcon} onValueChange={setSelectedIcon}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Icon" />
              </SelectTrigger>
              <SelectContent>
                {availableIcons.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      {option.icon} {option.value}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={addCustomRule}
              disabled={!customRule || !selectedIcon}
            >
              Add Rule
            </Button>
          </div>
        </div>

        {/* Added Rules */}
        <div>
  <h3 className="text-lg font-medium mb-3">Added Rules</h3>
  {rules.length === 0 ? (
    <p className="text-gray-500">No rules added yet.</p>
  ) : (
    <div className="flex flex-wrap gap-3">
      {rules.map((rule, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-md shadow-sm"
        >
          <div className="flex items-center gap-2">
            <div>{rule.icon}</div>
            <p className="text-sm font-medium">{rule.title}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setRules((prev) => prev.filter((_, i) => i !== index))}
          >
            <Trash className="w-5 h-5 text-red-600" />
          </Button>
        </div>
      ))}
    </div>
  )}
</div>

      </div>
    </Box>
  );
};

export default CreateRules;
