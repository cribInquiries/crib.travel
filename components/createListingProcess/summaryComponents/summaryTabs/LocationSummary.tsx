import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Card,
  IconButton,
  VStack,
  HStack,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Amphora, Landmark, MapPin, Store, Utensils } from "lucide-react";
const LoactionSummary = () => {
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
      <Box>
        <Text fontSize={["24px", "30px", "30px"]} fontWeight="bold" mb="8px">
          Where you'll be
        </Text>
        <VStack mt={"16px"}>
          <HStack w={"100%"} justify={"start"} align={"start"} h={"100%"}>
            <Box as={MapPin} boxSize={6} color="gray.600" />
            <Text
              fontSize={["24px", "30px", "18px"]}
              fontWeight={"semibold"}
              mb="8px"
            >
              123 Ocean View Drive, Malibu, California 90265, United States
            </Text>
          </HStack>

          <Text fontSize={["24px", "30px", "16px"]} color={"gray.600"} mb="8px">
            Located in an exclusive neighborhood, just steps away from a
            pristine private beach. High-end restaurants and boutique shops are
            within a short drive. Enjoy breathtaking sunsets and the sound of
            waves from your private terrace.
          </Text>
        </VStack>
      </Box>

      {mapUrl ? (
        <Box mt={"16px"} borderRadius="xl" overflow="hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          />
        </Box>
      ) : (
        <Text>No map available</Text>
      )}

      <Text
        mt={"16px"}
        fontSize={["24px", "30px", "30px"]}
        fontWeight="bold"
        mb="8px"
      >
        Nearby attractions
      </Text>
      <HStack
        mt={"16px"}
        w={"100%"}
        justify={"start"}
        align={"center"}
        h={"100%"}
      >
        {" "}
        <Box
          bg={"gray.100"}
          w={"100%"}
          h={"85px"}
          p={2}
          borderRadius={"16px"}
          _hover={{ bg: "gray.300" }}
          transition={"all 0.3s"}
          cursor={"pointer"}
        >
          <HStack
            gap={3}
            w={"100%"}
            h={"100%"}
            justify={"start"}
            align={"center"}
          >
            <Box color="gray.600" p={2} bg={"white"} rounded={"full"}>
              <Amphora />
            </Box>
            <VStack gap={0} justify={"start"} align={"start"}>
              <Text fontWeight={"semibold"}>Nobu Malibu</Text>
              <HStack>
                <Box p={1} bg={"green.500"} borderRadius={"full"} />
                <Text color="gray.600">4</Text>
              </HStack>
            </VStack>
          </HStack>{" "}
        </Box>
        <Box
          bg={"gray.100"}
          w={"100%"}
          h={"85px"}
          p={2}
          borderRadius={"16px"}
          cursor={"pointer"}
          _hover={{ bg: "gray.300" }}
          transition={"all 0.3s"}
        >
          <HStack
            gap={3}
            w={"100%"}
            h={"100%"}
            justify={"start"}
            align={"center"}
          >
            <Box color="gray.600" p={2} bg={"white"} rounded={"full"}>
              <Utensils />
            </Box>
            <VStack gap={0} justify={"start"} align={"start"}>
              <Text fontWeight={"semibold"}>Nobu Malibu</Text>
              <HStack>
                <Box p={1} bg={"green.500"} borderRadius={"full"} />
                <Text color="gray.600">4.0</Text>
              </HStack>
            </VStack>
          </HStack>{" "}
        </Box>
      </HStack>
      <HStack
        mt={"16px"}
        w={"100%"}
        justify={"start"}
        align={"center"}
        h={"100%"}
      >
        {" "}
        <Box
          bg={"gray.100"}
          w={"100%"}
          h={"85px"}
          p={2}
          borderRadius={"16px"}
          cursor={"pointer"}
          _hover={{ bg: "gray.300" }}
          transition={"all 0.3s"}
        >
          <HStack
            gap={3}
            w={"100%"}
            h={"100%"}
            justify={"start"}
            align={"center"}
          >
            <Box color="gray.600" p={2} bg={"white"} rounded={"full"}>
              <Landmark />
            </Box>
            <VStack gap={0} justify={"start"} align={"start"}>
              <Text fontWeight={"semibold"}>Nobu Malibu</Text>
              <HStack>
                <Box p={1} bg={"green.500"} borderRadius={"full"} />
                <Text color="gray.600">4</Text>
              </HStack>
            </VStack>
          </HStack>{" "}
        </Box>
        <Box
          bg={"gray.100"}
          w={"100%"}
          h={"85px"}
          p={2}
          cursor={"pointer"}
          borderRadius={"16px"}
          _hover={{ bg: "gray.300" }}
          transition={"all 0.3s"}
        >
          <HStack
            gap={3}
            w={"100%"}
            h={"100%"}
            justify={"start"}
            align={"center"}
          >
            <Box color="gray.600" p={2} bg={"white"} rounded={"full"}>
              <Store />
            </Box>
            <VStack gap={0} justify={"start"} align={"start"}>
              <Text fontWeight={"semibold"}>Nobu Malibu</Text>
              <HStack>
                <Box p={1} bg={"green.500"} borderRadius={"full"} />
                <Text color="gray.600">4</Text>
              </HStack>
            </VStack>
          </HStack>{" "}
        </Box>
      </HStack>
    </>
  );
};

export default LoactionSummary;
