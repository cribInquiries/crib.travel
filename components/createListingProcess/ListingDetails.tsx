"use client";

import React from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ListingDetails = () => {
  const { title, setTitle, description, setDescription } = useListingCreationContext();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Listing</h2>

      <div className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="text-sm font-medium text-gray-700">Title</label>
          <Input
            type="text"
            placeholder="Enter listing title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 rounded-md"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="text-sm font-medium text-gray-700">Description</label>
          <Textarea
            placeholder="Enter listing description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 rounded-md"
            rows={4}
          />
        </div>

        {/* AI Generate Button */}
        <Button className="w-full text-white font-medium rounded-md">
          Generate with AI
        </Button>
      </div>
    </div>
  );
};

export default ListingDetails;
