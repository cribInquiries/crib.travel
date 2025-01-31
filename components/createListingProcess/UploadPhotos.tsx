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
  createListCollection
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
    { label: "Other", value: "Other" },
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
      <Box mb="32px" className="animate__animated animate__fadeIn">
        <Heading fontWeight="600">Upload Photos</Heading>
        <Text color="gray.600">
          Upload at least 5 photos, maximum 50. Categorize each photo and add
          optional descriptions. Click the star icon to set a photo as the cover
          image.
        </Text>
      </Box>

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
              variant="outline"
              colorScheme="blue"
              fontWeight="bold"
              cursor="pointer"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "translateY(-1px) scale(1.05)" }}
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
                width="200px"
                position="relative"
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
                   size="sm" width="320px"
          
                    variant="outline"
                    collection={tagOptions}
                    value={[imageDetails[index]?.tag]}
                    onValueChange={(selected) =>
                      handleTagChange(index, selected.value[0])
                    }
                 
                  >
                    <SelectLabel>Select Tag</SelectLabel>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select tag" />
                    </SelectTrigger>
                    <SelectContent >
                      {tagOptions.items.map((tag) => (
                        <SelectItem key={tag.value} item={tag}>
                          {tag.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectRoot>


                  <Text fontWeight="bold" mt={2}>
                    Add Description
                  </Text>
                  <Input
                    value={imageDetails[index]?.description || ""}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    placeholder="Add description (max 50 characters)"
                    maxLength={50}
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
                  />
                </Box>
              </Box>
            ) : null,
          )}
        </Stack>

        <Button
          variant="solid"
          colorScheme="blue"
          mt={4}
          onClick={() => console.log(imageDetails)}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default UploadPhotos;
