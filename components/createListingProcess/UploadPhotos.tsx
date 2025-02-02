"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Button,
  Input,
  IconButton,
  Flex,
  createListCollection,
  Textarea,
} from "@chakra-ui/react";

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/chakra-snippets/select";

import {
  Star as StarIcon,
  StarOff as StarOffIcon,
  X as XIcon,
} from "lucide-react";
import { useListingCreationContext } from "@/context/ListingCreationContext";

const tagOptions = createListCollection({
  items: [
    { label: "Living Room", value: "Living Room" },
    { label: "Bedroom", value: "Bedroom" },
    { label: "Kitchen", value: "Kitchen" },
    { label: "Bathroom", value: "Bathroom" },
    { label: "Outdoor", value: "Outdoor" },
  ],
});

// ✅ Correctly create a collection of select options

const UploadPhotos = () => {
  const listingContext = useListingCreationContext();
  if (!listingContext) {
    return (
      <Text color="red.500">
        Error: Context not available. Please check the provider.
      </Text>
    );
  }

  const { uploadedFiles, setUploadedFiles, imageDetails, setImageDetails } =
    listingContext;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const newFiles = files.map((file, index) => ({
      file,
      tag: "Other",
      description: "",
      isFavorite: false,
      order: imageDetails.length + index + 1,
    }));

    setUploadedFiles((prev) => [...prev, ...files]);
    setImageDetails((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveImage = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setImageDetails((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOrderChange = (index: number, newOrder: number) => {
    setImageDetails((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, order: newOrder } : item,
      ),
    );
  };

  const handleTagChange = (index: number, newTag: string) => {
    setImageDetails((prev) =>
      prev.map((item, i) => (i === index ? { ...item, tag: newTag } : item)),
    );
  };

  const handleDescriptionChange = (index: number, newDescription: string) => {
    setImageDetails((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, description: newDescription } : item,
      ),
    );
  };

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
         Upload Photos
        </Text>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
        >
          Upload up to 50 photos of your property.
        </Text>

        <Box
          p="1.5rem"
          margin="2rem auto"
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="md"
        >
          <Flex justify="space-between" align="center">
            <label htmlFor="file-upload">
              <Button
                as="span"
                w={"300px"}
                variant="subtle"
                p={4}
                h={"60px"}
                bg={"white"}
                color={"black"}
                border="1px solid"
                borderColor={"gray.300"}
                borderRadius="8px"
                cursor="pointer"
                transition="all 0.3s ease-in-out"
                _hover={{
                  bg: "black",
                  color: "white",

                  transition: "all 0.3s",
                }}
              >
                Upload Photos
              </Button>
            </label>
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
              display="none"
            />
            <Text color="gray.600">
              {uploadedFiles.length} / 50 photos uploaded
            </Text>
          </Flex>

          {/* Uploaded Images */}
          <Stack direction="row" flexWrap="wrap" gap={2} mt={3} overflow="auto">
            {uploadedFiles.map((file, index) =>
              file instanceof File ? (
                <Box
                  key={index}
                  backgroundColor="white"
                  borderRadius="lg"
                  overflow="hidden"
                  width="300px"
                  position="relative"
                  border={"1px  solid lightgray"}
                >
                  <Box
                    backgroundColor="gray.100"
                    width="100%"
                    height="150px"
                    overflow="hidden"
                    position="relative"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      variant="ghost"
                      size="sm"
                      position="absolute"
                      top="8px"
                      right="8px"
                    >
                      <XIcon />
                    </IconButton>
                  </Box>

                  <Box p={4}>
                    <Text fontWeight="bold" mb={2}>
                      Select Tag
                    </Text>
                    {/* ✅ FIXED Chakra UI Select Component */}

                    <SelectRoot
                      variant="subtle"
                      size="sm"
                      width="100%"
                      collection={tagOptions}
                      value={[imageDetails[index]?.tag]}
                      onValueChange={(selected) =>
                        handleTagChange(index, selected.value[0])
                      }
                      border="1px solid #E2E8F0"
                      bg={"#F4F4F5"}
                      rounded={"sm"}
                    >
                      <SelectTrigger>
                        <SelectValueText
                          placeholder="Select tag"
                          textIndent={2}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {tagOptions.items.map((tag) => (
                          <SelectItem key={tag.value} item={tag} textIndent={2}>
                            {tag.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectRoot>

                    <Text fontWeight="bold" mt={2}>
                      Add Description
                    </Text>
                    <Textarea
                      value={imageDetails[index]?.description || ""}
                      onChange={(e) =>
                        handleDescriptionChange(index, e.target.value)
                      }
                      variant="subtle"
                      textIndent={2}
                      autoFocus
                      placeholder="Enter your address"
                      width="100%"
                      height="50px"
                      border="1px solid #E2E8F0"
                      _focus={{
                        border: "1px solid #E2E8F0", // Keeps the border color unchanged
                        boxShadow: "none", // Removes the default blue glow
                        outline: "none", // Ensures no additional focus outline
                      }}
                    />
                    <Text fontWeight="bold" mt={2}>
                      Set Order
                    </Text>
                    <Input
                      type="number"
                      value={imageDetails[index]?.order || ""}
                      onChange={(e) =>
                        handleOrderChange(index, parseInt(e.target.value, 10))
                      }
                      placeholder="Order"
                      mb={4}
                      variant="subtle"
                      textIndent={2}
                      autoFocus
                      width="100%"
                    
                      border="1px solid #E2E8F0"
                      _focus={{
                        border: "1px solid #E2E8F0", // Keeps the border color unchanged
                        boxShadow: "none", // Removes the default blue glow
                        outline: "none", // Ensures no additional focus outline
                      }}
                    />
                  </Box>
                </Box>
              ) : null,
            )}
          </Stack>

          <Box
            mt={5}
            transition="all 0.3s"
            as="button"
            w={"300px"}
            bg={"white"}
            p={4}
            color={"black"}
            border="1px solid"
            borderRadius="8px"
            borderColor={"gray.300"}
            onClick={() => {
              console.log(imageDetails);
            }}
            _hover={{
              bg: "black",
              color: "white",

              transition: "all 0.3s",
            }}
          >
            Save
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UploadPhotos;
