"use client";

import React from "react";
import Image from "next/image";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, Bed, Bath, Share, Heart } from "lucide-react";

const Summary = () => {
  const {
    title,
    description,
    basePrice,
    uploadedFiles,
    addedRooms,
    address,
    mapUrl,
    progress,
    packs,
    imageDetails,
    rules,
  } = useListingCreationContext();
  console.log(imageDetails);
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Progress Bar */}
      <h1>Preview</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px] mb-8">
        {uploadedFiles.length > 0 ? (
          <>
            {/* Main Image */}
            <div className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden">
              <Image
                src={URL.createObjectURL(imageDetails[0].file)}
                alt="Main property view"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Additional Images */}
            {imageDetails.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${
                  index === 3 ? "rounded-br-xl" : ""
                }`}
              >
                <Image
                  src={URL.createObjectURL(image.file)}
                  alt={image.file}
                  className="object-cover"
                  fill
                />
              </div>
            ))}
          </>
        ) : (
          <div className="col-span-4 flex items-center justify-center bg-gray-100 h-full rounded-xl">
            <p>No images uploaded</p>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-semibold">
                {title || "Default Title"}
              </h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{addedRooms.length || 0} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{addedRooms.length} bedrooms</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>
                  {addedRooms.filter(
                    (room) => room.chooseAmenitiesEnsuite.length > 0,
                  ).length || 0}{" "}
                  bathrooms
                </span>
              </div>
            </div>

            <p className="text-muted-foreground">
              {description || "No description provided."}
            </p>
          </div>

          {/* Location */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <p>{address || "No address provided"}</p>
            {mapUrl ? (
              <iframe
                src={mapUrl}
                className="w-full h-64 rounded-xl mt-2"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <p>No map available</p>
            )}
          </div>

          {/* Packs */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Enhance Your Stay with Packs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {packs.map((pack) => (
                <Card key={pack.id} className="p-4">
                  <h3 className="font-semibold">{pack.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pack.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">${pack.price}</span>
                    <Button variant="outline" size="sm">
                      Add
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">House Rules</h2>
            <div className="grid gap-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-center gap-2">
                  {rule.icon}
                  <span>{rule.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="md:col-span-1">
          <Card className="p-6 sticky top-4">
            <div className="text-2xl font-semibold mb-4">${basePrice}</div>
            <Button
              className="w-full mb-4"
              onClick={() => {
                console.log(imageDetails);
              }}
            >
              Reserve Now
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              You won't be charged yet.
            </p>
          </Card>
        </div>
      </div>
      {/* 
      <Image
        src={URL.createObjectURL(imageDetails[0].file)}
        alt="Property view"
width={100}
height={100}
        sizes="(max-width: 768px) 100vw, 50vw"

      /> */}
    </div>
  );
};

export default Summary;
