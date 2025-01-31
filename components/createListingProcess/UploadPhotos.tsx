import React, { useState } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Star, StarOff, X as Close } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea"

const UploadPhotos = () => {
  const { uploadedFiles, setUploadedFiles, imageDetails, setImageDetails } =
    useListingCreationContext();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const newFiles = files.map((file, index) => ({
      file,
      tag: "Other",
      description: "",
      isFavorite: false,
      order: imageDetails.length + index + 1, // Default order value
    }));

    setUploadedFiles((prev) => [...prev, ...files]);
    setImageDetails((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveImage = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setImageDetails((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSetCover = (index: number) => {
    setImageDetails((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isFavorite: !item.isFavorite } : item,
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

  const handleOrderChange = (index: number, newOrder: number) => {
    setImageDetails((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, order: newOrder } : item,
      ),
    );
  };

  const handleLogAllDetails = () => {
    console.log("All Image Details:", imageDetails);
  };

  return (
    <>
      <Box sx={{ mb: "32px" }} className={"animate__animated animate__fadeIn"}>
        <Typography variant="h4" sx={{ mb: "8px", fontWeight: 600 }}>
          Upload Photos
        </Typography>

        <Typography variant="body1" color="black">
          Upload at least 5 photos, maximum 50. Categorize each photo and add
          optional descriptions. Click the star icon to set a photo as the cover
          image.
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1.5rem",
          maxWidth: "800px",
          margin: "2rem auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <label htmlFor="file-upload">
            <Box
              component="span"
              sx={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "white",
                border: "1px solid lightgrey",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-1px) scale(1.05)",
                },
              }}
            >
              Upload Photos
            </Box>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <Typography variant="body2" color="textSecondary">
            {uploadedFiles.length} / 50 photos uploaded
          </Typography>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
          {uploadedFiles.map((file, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid lightgrey",
                borderRadius: "8px",
                overflow: "hidden",
                width: "200px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  overflow: "hidden",
                  position: "relative",
                }}
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
                  onClick={() => handleSetCover(index)}
                  sx={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    color: imageDetails[index]?.isFavorite ? "gold" : "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  {imageDetails[index]?.isFavorite ? <Star /> : <StarOff />}
                </IconButton>
                <IconButton
                  onClick={() => handleRemoveImage(index)}
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  <Close />
                </IconButton>
              </Box>

              <Box sx={{ padding: "8px" }}>
                <Typography variant="subtitle2" sx={{ marginBottom: "8px" }}>
                  Select Tag
                </Typography>

                <Select
                  value={imageDetails[index]?.tag || "Other"}
                  onValueChange={(newValue) => handleTagChange(index, newValue)}
       
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
        
                      <SelectItem value="Other">Other</SelectItem>
                      <SelectItem value="Exterior">Exterior</SelectItem>
                      <SelectItem value="Living Room">Living Room</SelectItem>
                      <SelectItem value="Kitchen">Kitchen</SelectItem>
                      <SelectItem value="Bedroom">Bedroom</SelectItem>
                      <SelectItem value="Bathroom">Bathroom</SelectItem>
                      <SelectItem value="Dining Room">Dining Room</SelectItem>
                      <SelectItem value="Office">Office</SelectItem>
                      <SelectItem value="Outdoor Space">
                        Outdoor Space
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
               

                <Typography variant="subtitle2" sx={{ marginBottom: "4px" }}>
                  Add Description
                </Typography>
                <Input
                  value={imageDetails[index]?.description || ""}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                  placeholder="Add description (max 50 characters)"
                  multiple={true}
                />
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    textAlign: "right",
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  {imageDetails[index]?.description.length || 0}/50
                </Typography>

                {/* Order Input */}
                <Typography variant="subtitle2" sx={{ marginBottom: "4px" }}>
                  Set Order
                </Typography>
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
          ))}
        </Stack>

        <Button variant="default" onClick={handleLogAllDetails}>
          Save
        </Button>
      </Box>
    </>
  );
};

export default UploadPhotos;
