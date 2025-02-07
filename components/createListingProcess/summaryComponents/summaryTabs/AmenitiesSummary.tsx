import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { AirVent, AlarmCheck, CarFront, ChefHat, Gamepad, HeaterIcon, Lock, Tv, Wifi } from "lucide-react";
import { IconFirstAidKit, IconGrill, IconPool } from "@tabler/icons-react";

const AmenitiesSummary = () => {
  return (
    <Box>
      <Text fontSize={["24px", "30px", "30px"]} fontWeight="bold" mb="8px">
        Indulge in These Amenities
      </Text>

      <HStack mt={"16px"} w={"100%"} justify={"space-between"} align={"start"}>
        <Box
          w={"100%"}
          h={"100%"}
          border={"1px solid lightgray"}
          borderRadius={"16px"}
          p={4}
          px={6}
        > <Text fontWeight={"semibold"} fontSize={"24px"} mb={4}>
        Essentials
      </Text>
          <HStack w={"100%"} gap={4}>
            <VStack w={"100%"} align={"start"} justify={"start"} gap={6}>
              <HStack gap={3}>
                <Box as={Wifi} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Free Wi-Fi</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={ChefHat} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Fully Equipped Kitchen</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={AirVent} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Air Conditioning</Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Box
          w={"100%"}
          h={"100%"}
          border={"1px solid lightgray"}
          borderRadius={"16px"}
          p={4}
          px={6}
        >
             <Text fontWeight={"semibold"} fontSize={"24px"} mb={4}>
             Facilities
          </Text>
          <HStack w={"100%"} gap={4}>
            <VStack w={"100%"} align={"start"} justify={"start"} gap={6}>
              <HStack gap={3}>
                <Box as={HeaterIcon} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Heating</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={CarFront} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Free Parking</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={IconPool} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Swimming Pool</Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </HStack>
      <HStack mt={"16px"} w={"100%"} justify={"space-between"} align={"start"}>
        <Box
          w={"100%"}
          h={"100%"}
          border={"1px solid lightgray"}
          borderRadius={"16px"}
          p={4}
          px={6}
        >
            <Text fontWeight={"semibold"} fontSize={"24px"} mb={4}>
            Safety
          </Text>
          <HStack w={"100%"} gap={4}>
            <VStack w={"100%"} align={"start"} justify={"start"} gap={6}>
              <HStack gap={3}>
                <Box as={Lock} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Security system</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={IconFirstAidKit} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>First aid kit</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={AlarmCheck} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Smoke alarm</Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Box
          w={"100%"}
          h={"100%"}
          border={"1px solid lightgray"}
          borderRadius={"16px"}
          p={4}
          px={6}
        >
          <Text fontWeight={"semibold"} fontSize={"24px"} mb={4}>
          Entertainment
          </Text>
          <HStack w={"100%"} gap={4}>
            <VStack w={"100%"} align={"start"} justify={"start"} gap={6}>
              <HStack gap={3}>
                <Box as={IconGrill} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>BBQ grill</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={Tv} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Home theater</Text>
                </VStack>
              </HStack>
              <HStack gap={3}>
                <Box as={Gamepad} boxSize={6} color="gray.600" />
                <VStack gap={0} justify={"start"} align={"start"}>
                  <Text fontWeight={"semibold"}>Game console</Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
          
        </Box>
        
      </HStack>
      <Box
          as={"button"}
          gap={2}
          w={"100%"}
          h={"50px"}
          mt={"24px"}
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
          
          <Text color={"white"} fontWeight={"semibold"} fontSize={"14px"}>
            {" "}
          Expand Amenities
          </Text>
        </Box>
    </Box>
  );
};

export default AmenitiesSummary;
