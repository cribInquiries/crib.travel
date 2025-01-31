import type React from "react";
import { Box, Typography } from "@mui/material";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Adjust path based on your setup
import {
  Bed,
  BedDouble,
  Bath,
  Briefcase,
  Fan,
  Sofa,
  Shirt,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SelectRoomTypeProps {
  chooseAmenities: string[];
  setChooseAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  chooseAmenitiesEnsuite: string[];
  setChooseAmenitiesEnsuite: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  roomType: string | null;
}








const BedroomAmenities = ({
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
  roomType,
}: SelectRoomTypeProps) => {
  const propertyTypes = [
    { value: "singleBed", label: "Single Bed", icon: Bed },
    { value: "doubleBed", label: "Double Bed", icon: BedDouble },
    { value: "queenBed", label: "Queen Bed", icon: Bed },
    { value: "kingBed", label: "King Bed", icon: Bed },
    { value: "bunkBed", label: "Bunk Bed", icon: Bed },
    { value: "crib", label: "Crib", icon: Bed },
    { value: "walkInWardrobe", label: "Walk-in Wardrobe", icon: Briefcase },
    { value: "builtInWardrobe", label: "Built-in Wardrobe", icon: Briefcase },
    { value: "desk", label: "Desk", icon: Briefcase },
    { value: "bedsideTables", label: "Bedside Tables", icon: Sofa },
    { value: "dresser", label: "Dresser", icon: Sofa },
    { value: "mirror", label: "Mirror", icon: Sofa },
    { value: "blackoutCurtains", label: "Blackout Curtains", icon: Sofa },
    { value: "ceilingFan", label: "Ceiling Fan", icon: Fan },
    { value: "airConditioning", label: "Air Conditioning", icon: Fan },
  ];

  const ensuites = [
    { value: "toilet", label: "Toilet", icon: Bath },
    { value: "shower", label: "Shower", icon: Bath },
    { value: "bathtub", label: "Bathtub", icon: Bath },
    { value: "doubleVanity", label: "Double Vanity", icon: Bath },
    { value: "singleVanity", label: "Single Vanity", icon: Bath },
    { value: "hairDryer", label: "Hair Dryer", icon: Shirt },
    { value: "toiletries", label: "Toiletries", icon: Bath },
    { value: "towels", label: "Towels", icon: Bath },
    { value: "bathrobes", label: "Bathrobes", icon: Shirt },
    { value: "heatedTowelRail", label: "Heated Towel Rail", icon: Shirt },
    { value: "bidet", label: "Bidet", icon: Bath },
  ];

  const togglePropertySelection = (value: string) => {
    setChooseAmenities((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value],
    );
  };

  const toggleEnsuiteSelection = (value: string) => {
    setChooseAmenitiesEnsuite((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value],
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          },
          justifyContent:  {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          },
          gap: "16px",
        }}
      >
        {propertyTypes.map((property) => (
          <Box
            className="animate__animated animate__fadeIn"
            component="button"
            key={property.value}
            onClick={() => togglePropertySelection(property.value)}
            sx={{
              p: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              bgcolor: chooseAmenities.includes(property.value)
                ? "#f1f1f1"
                : "white",
              width: {
                xs: "125px",
                sm: "155px",
                md: "155px",
                lg: "175px",
                xl: "175px",
              },

              height: "100%",
              border: "1px solid lightgrey",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-1px) scale(1.1)",
                bgcolor: "#f1f1f1",
              },
            }}
          >
            <property.icon
              style={{
                width: "24px",
                height: "24px",
                marginBottom: "12px",
                color: "black",
              }}
            />
            <Typography variant="body2" align="center" sx={{ color: "black" }}>
              {property.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ShadCN Accordion */}
      <Accordion type="single" collapsible className="w-full h-full">
        <AccordionItem value="ensuite">
          <AccordionTrigger className="text-lg font-semibold">
            Ensuite
          </AccordionTrigger>
          <AccordionContent>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "start",
                  xl: "start",
                },
                justifyContent:  {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "start",
                  xl: "start",
                },
                gap: "16px",
                p: "12px",
              }}
            >
              {ensuites.map((ensuite) => (
                <Box
                  className="animate__animated animate__fadeIn"
                  component="button"
                  key={ensuite.value}
                  onClick={() => toggleEnsuiteSelection(ensuite.value)}
                  sx={{
                    p: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    bgcolor: chooseAmenitiesEnsuite.includes(
                      ensuite.value,
                    )
                      ? "#f1f1f1"
                      : "white",
                    width: {
                      xs: "125px",
                      sm: "155px",
                      md: "155px",
                      lg: "175px",
                      xl: "175px",
                    },
                    height: "100%",
                    border: "1px solid lightgrey",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-1px) scale(1.1)",
                    },
                  }}
                >
                  <ensuite.icon
                    style={{
                      width: "24px",
                      height: "24px",
                      marginBottom: "12px",
                      color: "black",
                    }}
                  />
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "black" }}
                  >
                    {ensuite.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {chooseAmenities.length > 0 ? (
            chooseAmenities.map((item, index) => (
              <Badge key={index} variant="secondary">
                {propertyTypes.find((prop) => prop.value === item)?.label ||
                  item}
              </Badge>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No amenities selected.
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {chooseAmenitiesEnsuite.length > 0 ? (
            chooseAmenitiesEnsuite.map((item, index) => (
              <Badge key={index} variant="secondary">
                {ensuites.find((ensuite) => ensuite.value === item)?.label ||
                  item}
              </Badge>
            ))
          ) : (
            <Typography mt={"10px"} variant="body2" color="text.secondary">
              No ensuite amenities selected.
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default BedroomAmenities;
