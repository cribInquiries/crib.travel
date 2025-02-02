"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/chakra-snippets/field";
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

        <Box flexWrap="wrap" gap="16px" mt="50px">
        <Input
  variant="subtle"
  textIndent={2}
  autoFocus
  type="text"
  placeholder="Enter your address"
  width="100%"
  height="50px"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  border="1px solid #E2E8F0"
  _focus={{
    border: "1px solid #E2E8F0", // Keeps the border color unchanged
    boxShadow: "none", // Removes the default blue glow
    outline: "none", // Ensures no additional focus outline
  }}
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
      </Box>
    </>
  );
};

export default AddressOfProperty;
