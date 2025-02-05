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
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!event.dataTransfer.files) return;

    const files = Array.from(event.dataTransfer.files);
    const newFiles = files.map((file, index) => ({
      file,
      tag: "Other",
      description: "",
      isFavorite: false,
      order: imageDetails.length + index + 1,
    }));

    setUploadedFiles((prev) => [...prev, ...files].slice(0, 50));
    setImageDetails((prev) => [...prev, ...newFiles].slice(0, 50));
  };

  return (
    <>
      <Box
        rounded={"lg"}
        // shadow={"md"}
        p={0}
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

        <Box mt={"50px"} backgroundColor="white" borderRadius="lg">
          <Flex justify="space-between" align="start" direction="column">
            {/* Drop Zone */}
            <Box
              w="100%"
              h="250px"
              border="2px dashed gray"
              borderRadius="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              p={4}
              cursor="pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <label htmlFor="file-upload">
                <Button
                  as="span"
                  variant="subtle"
                  p={4}
                  bg={"white"}
                  color={"black"}
                  border="1px solid"
                  borderColor={"gray.300"}
                  borderRadius="32px"
                  cursor="pointer"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    bg: "black",
                    color: "white",
                    transition: "all 0.3s",
                  }}
                >
                  Drag & Drop or Click to Upload
                </Button>
              </label>
            </Box>

            {/* Hidden Input */}
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
              display="none"
            />

            {/* Upload Status */}
            <Text
              color="gray.600"
              fontSize={["16px", "16px", "16px", "16px", "20px"]}
              mt={2}
            >
              {uploadedFiles.length} / 50 photos uploaded
            </Text>
          </Flex>

          {/* Uploaded Images */}
          <Stack direction="row" flexWrap="wrap" gap={4} mt={"16px"} overflow="auto">
            {uploadedFiles.map((file, index) =>
              file instanceof File ? (
                <Box

                  key={index}
                  backgroundColor="white"
                  borderRadius="32px"
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
                      m={1}
                      onClick={() => handleRemoveImage(index)}
                      variant="ghost"
                      size="sm"
                      position="absolute"
                      top="8px"
                      right="8px"
                      bg={"white"}
                      shadow={"md"}
                      borderRadius={"50%"}
                      _hover={{
                        bg: "black",
                        color: "white",
                        transition: "all 0.3s",
                      }}
                    >
                      <XIcon />
                    </IconButton>
                  </Box>

                  <Box p={4}>
                    <Text fontWeight="semibold" my={2}>
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

                    <Text fontWeight="semibold" my={2} >
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
                      placeholder="Enter your description"
                      width="100%"
                      height="50px"
                      border="1px solid #E2E8F0"
                      _focus={{
                        border: "1px solid #E2E8F0", // Keeps the border color unchanged
                        boxShadow: "none", // Removes the default blue glow
                        outline: "none", // Ensures no additional focus outline
                      }}
                    />
                    <Text fontWeight="semibold" my={2}>
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

          {/* <Box
            mt={5}
            transition="all 0.3s"
            as="button"
            w={"300px"}
            bg={"white"}
            p={4}
            color={"black"}
            border="1px solid"
            borderRadius="32px"
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
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default UploadPhotos;
