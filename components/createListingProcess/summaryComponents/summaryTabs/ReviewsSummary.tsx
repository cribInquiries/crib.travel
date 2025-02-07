import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { StarIcon } from "lucide-react";
import { Rating } from "@/components/chakra-snippets/rating";

const ReviewsSummary = () => {
  return (
    <Box>
      <Text fontSize={["24px", "30px", "30px"]} fontWeight="bold" mb="8px">
      Reviews
      </Text>
      <HStack align={"start"} w={"100%"} h={"100%"} gap={2} mt={"16px"} justify={"space-between"}>
        <VStack w={"60%"} h={"100%"} justify={"start"} align={"start"}>
          <HStack w={"100%"} h={"100%"} gap={2}>
            <StarIcon fill="true" size={36} />
            <HStack justify={"center"}>
              <Text fontWeight={"bold"} fontSize={"52px"}>
                4.6
              </Text>
              <Text fontSize={"24px"}>/ 5</Text>
            </HStack>
          </HStack>
          <Text fontSize={"24px"} fontWeight={"medium"}>245 reviews</Text>

          {[
            { stars: 5, percentage: "70%", count: 172 },
            { stars: 4, percentage: "20%", count: 49 },
            { stars: 3, percentage: "6%", count: 15 },
            { stars: 2, percentage: "3%", count: 6 },
            { stars: 1, percentage: "1%", count: 3 },
          ].map((rating, index) => (
            <HStack key={index} gap={3} w={"100%"}>
              <VStack gap={0} justify={"start"} align={"start"} w={"100%"}>
                <HStack>
                  <Rating defaultValue={rating.stars} allowHalf colorPalette="yellow" readOnly size="md" />{" "}
                  <Text fontWeight={"semibold"}> ({rating.stars} Stars)</Text>
                </HStack>
                <Box mt={2} h={"8px"} color="gray.600" w={"300px"} borderRadius={"24px"} bg={"gray.100"}>
                  <Box w={rating.percentage} h={"100%"} bg={"yellow.300"} borderRadius={"16px"}></Box>
                </Box>
                <Text fontSize={"14px"} color={"gray.500"}>{rating.count} reviews</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>

        {/* REVIEWS SECTION */}
        <Box w={"100%"} h={"100%"} borderRadius={"16px"}>
          <Box w={"100%"} h={"100%"} borderLeft={"1px solid lightgray"}  p={4} px={6}>
            {[
              {
                name: "Jake M.",
                date: "January 2024",
                rating: 5,
                review: "Absolutely stunning place! The views were breathtaking, and the amenities were top-notch. The host was very accommodating and made sure we had everything we needed. Will definitely come back!",
              },
              {
                name: "Sophia R.",
                date: "December 2023",
                rating: 4,
                review: "Great experience overall! The location was perfect, and the property was well-maintained. Only small downside was that the WiFi was a bit slow at times, but nothing that ruined our stay.",
              },
              {
                name: "David L.",
                date: "November 2023",
                rating: 3,
                review: "The place was nice, but not quite as luxurious as expected. Some minor maintenance issues, but the staff was responsive and helped fix them quickly.",
              },
            ].map((review, index) => (
              <React.Fragment key={index}>
                <VStack w={"100%"} justify={"start"} align={"start"}>
                  <HStack gap={2}>
                    <Box p={8} borderRadius={"full"} bg={"gray.200"}></Box>
                    <VStack gap={0} justify={"start"} align={"start"}>
                      <HStack w={"100%"} justify={"center"} align={"center"} gap={4}>
                        <Text fontWeight={"semibold"} fontSize={"24px"}>{review.name}</Text>
                        <Rating defaultValue={review.rating} allowHalf colorPalette="yellow" readOnly size="md" />
                        <Text fontWeight={"semibold"}> ({review.rating} Stars)</Text>
                      </HStack>
                      <Text color={"gray.600"}>{review.date}</Text>
                    </VStack>
                  </HStack>
                  <Box gap={0} w={"100%"} mt={2}>
                    <Text fontSize={"16px"}>{review.review}</Text>
                  </Box>
                </VStack>
                {index < 2 && <Box w={"100%"} bg={"lightgray"} h={"1px"} my={"16px"} />}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default ReviewsSummary;
