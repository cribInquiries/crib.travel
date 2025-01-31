"use client";

import React, { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { X } from "lucide-react";
import Box from "@mui/material/Box";

interface PackageDiscount {
  packs: number | "";
  discount: number | "";
}

interface AdvancedDiscount {
  rule: string;
  discount: number | "";
  daysBefore?: number | "";
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

  const discountTypes = [
    { label: "Last Minute Booking", value: "lastMinute" },
    { label: "Early Bird", value: "earlyBird" },
  ];

  const seasonOptions = ["Summer", "Winter", "Spring", "Fall"];

  const addPackageDiscount = () => {
    setPackageDiscounts([...packageDiscounts, { packs: "", discount: "" }]);
  };

  const updatePackageDiscount = (
    index: number,
    field: keyof PackageDiscount,
    value: number | "",
  ) => {
    const updatedDiscounts = [...packageDiscounts];
    updatedDiscounts[index][field] = value;
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
    updatedDiscounts[index][field] = value;
    setAdvancedDiscounts(updatedDiscounts);
  };

  const removeAdvancedDiscount = (index: number) => {
    setAdvancedDiscounts(advancedDiscounts.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        px: { xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" },
      }}
    >
      <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">Pricing Configuration</h1>

        {/* Base Price */}
        <div className="mb-6">
          <label className="text-md font-medium">Base Price</label>
          <Input
            type="number"
            placeholder="Base Price ($)"
            value={basePrice}
            onChange={(e) => setBasePrice(Number(e.target.value))}
            className="mt-2"
          />
          <Slider
            value={[minPrice, maxPrice]}
            min={0}
            max={500}
            step={5}
            onValueChange={(newValue) => {
              setMinPrice(newValue[0]);
              setMaxPrice(newValue[1]);
            }}
            className="mt-4"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Minimum Price: ${minPrice}</span>
            <span>Maximum Price: ${maxPrice}</span>
          </div>
        </div>

        {/* Weekend Pricing */}
        <div className="mb-6">
          <label className="text-md font-medium">Weekend Pricing</label>
          <Input
            type="number"
            placeholder="Weekend Adjustment (%)"
            value={weekendAdjustment}
            onChange={(e) => setWeekendAdjustment(Number(e.target.value))}
            className="mt-2"
          />
        </div>

        {/* Seasonal Pricing */}
        <div className="mb-6">
          <label className="text-md font-medium">Seasonal Pricing</label>
          <Input
            type="number"
            placeholder="Seasonal Adjustment (%)"
            value={seasonalAdjustment}
            onChange={(e) => setSeasonalAdjustment(Number(e.target.value))}
            className="mt-2"
          />
          <Select value={season} onValueChange={setSeason} className="mt-2">
            <SelectTrigger>
              <SelectValue placeholder="Select Season" />
            </SelectTrigger>
            <SelectContent>
              {seasonOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Package Discounts */}
        <div className="mb-6">
          <label className="text-md font-medium">Package Discounts</label>
          <div className="space-y-3 mt-3">
            {packageDiscounts.map((discount, index) => (
              <div key={index} className="flex gap-2">
                <Input
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
                />
                <Input
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
                />
              </div>
            ))}
            <Button variant="outline" onClick={addPackageDiscount}>
              Add Package Discount
            </Button>
          </div>
        </div>

        {/* Advanced Discounts */}
        <div>
          <label className="text-md font-medium">Advanced Discounts</label>
          <div className="space-y-3 mt-3">
            {advancedDiscounts.map((discount, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
                <div className="flex items-center justify-between">
                  <Select
                    value={discount.rule}
                    onValueChange={(value) =>
                      updateAdvancedDiscount(index, "rule", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Discount Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {discountTypes.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAdvancedDiscount(index)}
                  >
                    <X className="w-5 h-5 text-red-600" />
                  </Button>
                </div>
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
                  className="mt-3"
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
                    className="mt-3"
                  />
                )}
              </div>
            ))}
            <Button variant="outline" onClick={addAdvancedDiscount}>
              Add Discount Rule
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Pricing;
