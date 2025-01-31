"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "../ui/input";

import { useListingCreationContext } from "@/context/ListingCreationContext";

const AddressOfProperty = () => {
  const { address, setAddress, mapUrl, setMapUrl } =
    useListingCreationContext();

  useEffect(() => {
    if (address) {
      const encodedAddress = encodeURIComponent(address);
      setMapUrl(
        `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`,
      );
    }
  }, [address]); // Update the map URL when the address changes

  return (
    <>
      <Box
        sx={{ mb: "32px" }}
        className={"animate__animated animate__fadeInDown"}
      >
        <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
          Location
        </Typography>
        <Typography variant="body1" color="black">
          Enter the address of your property.
        </Typography>
      </Box>

      {/* Address Input */}
      <Box px={{ xs: "5%", sm: "5%", md: "5%", lg: "10%", xl: "15%" }}>
        <Input
          type="text"
          placeholder="Enter your address"
          width={"100%"}
          style={{ height: "50px" }}
          value={address}
          onChange={(e) => setAddress(e.target.value)} // Update the address state on input change
        />

        {/* Map iframe */}

        <Box sx={{ mt: "16px" }} bgcolor={"grey.200"} borderRadius={"15px"}>
          <iframe
            src={mapUrl}
            width="100%"
            height="400px" // Set a fixed height for the map
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default AddressOfProperty;
