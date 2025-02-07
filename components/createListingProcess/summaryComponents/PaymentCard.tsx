"use client";

import { VStack, HStack, Text,Box } from "@chakra-ui/react";

import React from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
const PaymentCard = () => {
      const {
        title,
        description,
        basePrice,
        uploadedFiles,
        addedRooms,
        address,
        mapUrl,
        packs,
        imageDetails,
        rules,
      } = useListingCreationContext();
  return (
    <>
      <Box p={6} fontSize={["24px", "30px", "46px"]} fontWeight="bold">
        ${basePrice}{" "}
        <Box
          as={"span"}
          fontSize={"24px"}
          fontWeight="normal"
          color={"gray.600"}
        >
          total{" "}
        </Box>{" "}
      </Box>

      <VStack
        px={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        w={"100%"}
        h={"100%"}
        gap={4}
      >
        <HStack w={"100%"}>
          <Box
            textAlign={"start"}
            as={"button"}
            p={2}
            border={"1px solid lightgray"}
            rounded={"16px"}
            onClick={() => console.log(imageDetails)}
            w={"100%"}
            transition={"all 0.3s"}
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            <Text fontWeight={"semibold"}>CHECK-IN</Text>
            Reserve Now
          </Box>

          <Box
            textAlign={"start"}
            as={"button"}
            p={2}
            border={"1px solid lightgray"}
            rounded={"16px"}
            onClick={() => console.log(imageDetails)}
            w={"100%"}
            transition={"all 0.3s"}
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            <Text fontWeight={"semibold"}>CHECKOUT</Text>
            Reserve Now
          </Box>
        </HStack>

        <Box
          p={2}
          textAlign={"start"}
          as={"button"}
          border={"1px solid lightgray"}
          rounded={"16px"}
          onClick={() => console.log(imageDetails)}
          w={"100%"}
          transition={"all 0.3s"}
          _hover={{
            bg: "black",
            color: "white",
          }}
        >
          <Text fontWeight={"semibold"}>GUEST</Text>1 Adult
        </Box>

        <Box
          mt={2}
          as={"button"}
          gap={2}
          w={"100%"}
          h={"50px"}
          bg={"black"}
          borderRadius={"16px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          transition={"all 0.3s"}
          _hover={{
            bg: "gray.700",
            color: "black",
          }}
        >
          <Text color={"white"} fontWeight={"semibold"} fontSize={"18px"}>
            {" "}
            Reserve
          </Text>
        </Box>

        <HStack w={"100%"} justify={"space-between"} mt={2}>
          <Text textDecoration={"underline"}>$350 × 0 nights</Text>
          <Text>$0</Text>
        </HStack>
        <HStack w={"100%"} justify={"space-between"}>
          <Text textDecoration={"underline"}>Cleaning fee</Text>
          <Text>$350</Text>
        </HStack>
        <Box w={"100%"} bg={"lightgray"} h={"1px"} my={"4px"} />
        <HStack w={"100%"} justify={"space-between"}>
          <Text fontWeight={"semibold"} fontSize={"18px"}>
            Total
          </Text>
          <Text fontWeight={"semibold"} fontSize={"18px"}>
            $350
          </Text>
        </HStack>
      </VStack>
    </>
  );
};

export default PaymentCard;
