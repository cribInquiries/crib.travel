"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
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
  }, [address]);

  return (
    <>
      <Box
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
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Location
        </Text>
        <Text fontSize="md" color="gray.600">
          Enter the address of your property.
        </Text>
      </Box>

      <Box>
        <Input
          type="text"
          placeholder="Enter your address"
          width="100%"
          height="50px"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Box
          mt={4}
          bg="gray.200"
          borderRadius="15px"
          display="flex"
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="400px"
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
