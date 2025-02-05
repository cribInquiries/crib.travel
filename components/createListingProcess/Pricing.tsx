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

import { X } from "lucide-react";

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/chakra-snippets/select";

import { Slider } from "@/components/chakra-snippets/slider";
interface PackageDiscount {
  packs: string | number;
  discount: string | number;
}

interface AdvancedDiscount {
  rule: string; // Must be a string
  discount: string | number; // Can be string or number
  daysBefore?: string | number;
}

const Pricing: React.FC = () => {
  const {
    basePrice,
    setBasePrice,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    weekendAdjustment,
    setWeekendAdjustment,
    seasonalAdjustment,
    setSeasonalAdjustment,
    packageDiscounts,
    setPackageDiscounts,
    season,
    setSeason,
  } = useListingCreationContext();

  const [advancedDiscounts, setAdvancedDiscounts] = useState<
    AdvancedDiscount[]
  >([]);

  const discountTypes = createListCollection({
    items: [
      { label: "Last Minute Booking", value: "lastMinute" },
      { label: "Early Bird", value: "earlyBird" },
    ],
  });

  const seasonOptions = createListCollection({
    items: [
      { value: "Summer" },
      { value: "Winter" },
      { value: "Spring" },
      { value: "Fall" },
    ],
  });

  const addPackageDiscount = () => {
    setPackageDiscounts([...packageDiscounts, { packs: "", discount: "" }]);
  };

  const removeAdvancedDiscount = (index: number) => {
    const updatedDiscounts = advancedDiscounts.filter((_, i) => i !== index);
    setAdvancedDiscounts(updatedDiscounts);
  };

  const removePackageDiscount = (index: number) => {
    const updatedDiscounts = packageDiscounts.filter((_, i) => i !== index);
    setPackageDiscounts(updatedDiscounts);
  };

  const updatePackageDiscount = (
    index: number,
    field: keyof PackageDiscount,
    value: number | string,
  ) => {
    const updatedDiscounts = [...packageDiscounts];
    updatedDiscounts[index][field] = value === "" ? "" : Number(value);
    setPackageDiscounts(updatedDiscounts);
  };

  const addAdvancedDiscount = () => {
    setAdvancedDiscounts([
      ...advancedDiscounts,
      { rule: "", discount: "", daysBefore: "" },
    ]);
  };

  const updateAdvancedDiscount = (
    index: number,
    field: keyof AdvancedDiscount,
    value: string | number | "",
  ) => {
    const updatedDiscounts = [...advancedDiscounts];

    // If the field is "rule", we only allow a string.
    if (field === "rule") {
      // Cast it to string to silence type errors, or ensure
      // you're actually passing a string if it's "rule".
      updatedDiscounts[index].rule = value as string;
    } else {
      // For "discount" or "daysBefore", we assign number or ""
      updatedDiscounts[index][field] = value === "" ? "" : Number(value);
    }

    setAdvancedDiscounts(updatedDiscounts);
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
        Price Details
      </Text>
      <Text
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
      >
        Set the prices and discounts for your property.
      </Text>

      {/* Base Price */}
      <Box mt={"50px"}>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
          mb={2}
        >
          Base Price
        </Text>
        <Input
          type="number"
          placeholder="Base Price ($)"
          value={basePrice}
          onChange={(e) => setBasePrice(Number(e.target.value))}
          mb={4}
          variant="subtle"
          textIndent={2}
          autoFocus
          width="100%"
          border="1px solid #E2E8F0"
          _focus={{
            border: "1px solid #E2E8F0", // Keeps the border color unchanged
            boxShadow: "none", // Removes the default blue glow
            outline: "none", // Ensures no additional focus outline
          }}
        />
        <Slider
          value={[minPrice, maxPrice]}
          min={0}
          max={500}
          step={5}
          defaultValue={[30, 60]}
          onValueChange={(details: { value: [number, number] }) => {
            setMinPrice(details.value[0]);
            setMaxPrice(details.value[1]);
          }}
          className="mt-4"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Minimum Price: ${minPrice}</span>
          <span>Maximum Price: ${maxPrice}</span>
        </div>
      </Box>

      {/* Weekend Pricing */}
      <Box mt={"16px"}>
        <label className="text-md font-medium">Weekend Pricing</label>
        <Input
          type="number"
          placeholder="Weekend Adjustment (%)"
          value={weekendAdjustment}
          onChange={(e) => setWeekendAdjustment(Number(e.target.value))}
          mb={4}
          variant="subtle"
          textIndent={2}
          autoFocus
          width="100%"
          border="1px solid #E2E8F0"
          _focus={{
            border: "1px solid #E2E8F0", // Keeps the border color unchanged
            boxShadow: "none", // Removes the default blue glow
            outline: "none", // Ensures no additional focus outline
          }}
        />
      </Box>

      {/* Seasonal Pricing */}
      <Box mt={"16px"}>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
          mb={2}
        >
          Seasonal Pricing
        </Text>
        <Input
          type="number"
          placeholder="Seasonal Adjustment (%)"
          value={seasonalAdjustment}
          onChange={(e) => setSeasonalAdjustment(Number(e.target.value))}
          mb={4}
          variant="subtle"
          textIndent={2}
          autoFocus
          width="100%"
          border="1px solid #E2E8F0"
          _focus={{
            border: "1px solid #E2E8F0", // Keeps the border color unchanged
            boxShadow: "none", // Removes the default blue glow
            outline: "none", // Ensures no additional focus outline
          }}
        />
        <SelectRoot
          collection={seasonOptions}
          value={season ? [season] : []}
          onValueChange={(selected) => setSeason(selected.value[0])}
          border="1px solid #E2E8F0"
          bg={"#F4F4F5"}
          rounded={"sm"}
          variant="subtle"
          width="100%"
        >
          <SelectTrigger>
            <SelectValueText placeholder="Select Season " textIndent={2} />
          </SelectTrigger>
          <SelectContent>
            {seasonOptions.items.map((option: { value: string }) => (
              <SelectItem key={option.value} item={option}>
                <HStack gap={2}>
                  <Text>{option.value}</Text>
                </HStack>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>

      {/* Package Discounts */}
      <Box mt={"16px"}>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
          mb={2}
        >
          Package Discounts
        </Text>
        <Box className="space-y-3 mt-3">
          {packageDiscounts.map((discount, index) => (
            <Box key={index} className=" rounded-md p-2 " bg={"gray.200"}>
              <Box mt={2} display={"flex"} w={"100%"} justifyContent={"end"}>
                {" "}
                <Input
                  color={"black"}
                  border={"1px solid #E2E8F0"}
                  bg={"#F4F4F5"}
                  type="number"
                  placeholder="Packs"
                  value={discount.packs}
                  onChange={(e) =>
                    updatePackageDiscount(
                      index,
                      "packs",
                      Number(e.target.value) || "",
                    )
                  }
                  mb={2}
                  variant="subtle"
                  textIndent={2}
                  autoFocus
                  width="100%"
                  _focus={{
                    border: "1px solid #E2E8F0", // Keeps the border color unchanged
                    boxShadow: "none", // Removes the default blue glow
                    outline: "none", // Ensures no additional focus outline
                  }}
                />
                <Button
                  className="mb-2"
                  variant="ghost"
                  size="sm"
                  onClick={() => removePackageDiscount(index)}
                >
                  <X className="w-5 h-5 text-red-600" />
                </Button>
              </Box>

              <Input
                color={"black"}
                type="number"
                placeholder="Discount (%)"
                value={discount.discount}
                onChange={(e) =>
                  updatePackageDiscount(
                    index,
                    "discount",
                    Number(e.target.value) || "",
                  )
                }
                mb={2}
                variant="subtle"
                textIndent={2}
                autoFocus
                width="100%"
                border="1px solid #E2E8F0"
                _focus={{
                  border: "1px solid #E2E8F0", // Keeps the border color unchanged
                  boxShadow: "none", // Removes the default blue glow
                  outline: "none", // Ensures no additional focus outline
                }}
              />
            </Box>
          ))}
          <Box
            as="button"
            w={"100%"}
            p={4}
            h={"60px"}
            bg={"white"}
            color={"black"}
            border="1px solid"
            borderColor={"gray.300"}
            borderRadius="16px"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "black",
              color: "white",

              transition: "all 0.3s",
            }}
            onClick={addPackageDiscount}
          >
            Add Package Discount
          </Box>
        </Box>
      </Box>

      {/* Advanced Discounts */}
      <Box mt={"16px"}>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
          mb={2}
        >
          Advanced Discounts
        </Text>
        <Box className="space-y-3 mt-3">
          {advancedDiscounts.map((discount, index) => (
            <Box key={index} className=" rounded-md p-2 " bg={"gray.200"}>
              <Box mt={2} display={"flex"} w={"100%"} justifyContent={"end"}>
                <SelectRoot
                  mb={2}
                  border={"1px solid #E2E8F0"}
                  bg={"#F4F4F5"}
                  borderRadius={"6px"}
                  collection={discountTypes}
                  value={discount.rule ? [discount.rule] : []}
                  onValueChange={(selected) =>
                    updateAdvancedDiscount(index, "rule", selected.value[0])
                  }
                >
                  <SelectTrigger>
                    <SelectValueText
                      textIndent={2}
                      placeholder="Select  Discount Type"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {discountTypes.items.map((option) => (
                      <SelectItem key={option.value} item={option}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
                <Button
                  className="mb-2"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeAdvancedDiscount(index)}
                >
                  <X className="w-5 h-5 text-red-600" />
                </Button>
              </Box>
              <Input
                type="number"
                placeholder="Discount (%)"
                value={discount.discount}
                onChange={(e) =>
                  updateAdvancedDiscount(
                    index,
                    "discount",
                    Number(e.target.value) || "",
                  )
                }
                mb={2}
                variant="subtle"
                textIndent={2}
                autoFocus
                width="100%"
                border="1px solid #E2E8F0"
                _focus={{
                  border: "1px solid #E2E8F0", // Keeps the border color unchanged
                  boxShadow: "none", // Removes the default blue glow
                  outline: "none", // Ensures no additional focus outline
                }}
              />
              {discount.rule === "lastMinute" && (
                <Input
                  type="number"
                  placeholder="Days Before Check-in"
                  value={discount.daysBefore}
                  onChange={(e) =>
                    updateAdvancedDiscount(
                      index,
                      "daysBefore",
                      Number(e.target.value) || "",
                    )
                  }
                  mb={4}
                  variant="subtle"
                  textIndent={2}
                  autoFocus
                  width="100%"
                  border="1px solid #E2E8F0"
                  _focus={{
                    border: "1px solid #E2E8F0", // Keeps the border color unchanged
                    boxShadow: "none", // Removes the default blue glow
                    outline: "none", // Ensures no additional focus outline
                  }}
                />
              )}
            </Box>
          ))}
          <Box
            as="button"
            w={"100%"}
            p={4}
            h={"60px"}
            bg={"white"}
            color={"black"}
            border="1px solid"
            borderColor={"gray.300"}
            borderRadius="16px"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "black",
              color: "white",

              transition: "all 0.3s",
            }}
            onClick={addAdvancedDiscount}
          >
            Add Discount Rule
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
