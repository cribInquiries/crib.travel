import { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Stack,
  Button,
  Input,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  ChefHat,
  Briefcase,
  TreePine,
  Shirt,
  Wifi,
  Tv,
  BatteryCharging,
  Snowflake,
  Fan,
  Microwave,
  Coffee,
  FlameIcon as Grill,
  Car,
  Battery,
  BathIcon as HotTub,
  Dumbbell,
  CableCarIcon as Elevator,
  ShipWheelIcon as Wheelchair,
  StepBackIcon as Stairs,
  Book,
  Gamepad,
  PawPrint,
  Dog,
  Soup,
  Joystick,
  Search,
  Plus,
} from "lucide-react";

const Amenities = () => {
  const {
    selectedAmenities,
    setSelectedAmenities,
    customAmenity,
    setCustomAmenity,
  } = useListingCreationContext();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    {
      name: "Technology",
      amenities: [
        { value: "Wi-Fi", label: "Wi-Fi", icon: Wifi },
        { value: "Smart TV", label: "Smart TV", icon: Tv },
        { value: "Streaming services", label: "Streaming services", icon: Tv },
        { value: "Work space", label: "Work space", icon: Briefcase },
        {
          value: "Charging station",
          label: "Charging station",
          icon: BatteryCharging,
        },
      ],
    },
    {
      name: "Climate Control",
      amenities: [
        {
          value: "Air conditioning",
          label: "Air conditioning",
          icon: Snowflake,
        },
        { value: "Heating", label: "Heating", icon: Shirt },
        { value: "Ceiling fan", label: "Ceiling fan", icon: Fan },
      ],
    },
    {
      name: "Laundry",
      amenities: [
        { value: "Washer", label: "Washer", icon: Shirt },
        { value: "Dryer", label: "Dryer", icon: Shirt },
        { value: "Iron", label: "Iron", icon: Shirt },
      ],
    },
    {
      name: "Cooking",
      amenities: [
        { value: "Kitchen", label: "Kitchen", icon: ChefHat },
        { value: "Microwave", label: "Microwave", icon: Microwave },
        { value: "Coffee maker", label: "Coffee maker", icon: Coffee },
        { value: "Barbecue grill", label: "Barbecue grill", icon: Grill },
      ],
    },
    {
      name: "Parking",
      amenities: [
        { value: "Free parking", label: "Free parking", icon: Car },
        { value: "EV charger", label: "EV charger", icon: Battery },
      ],
    },
    {
      name: "Outdoor",
      amenities: [
        { value: "Pool", label: "Pool", icon: Book },
        { value: "Hot tub", label: "Hot tub", icon: HotTub },
        { value: "Patio", label: "Patio", icon: Book },
        { value: "Garden", label: "Garden", icon: TreePine },
      ],
    },
    {
      name: "Fitness",
      amenities: [
        { value: "Gym", label: "Gym", icon: Dumbbell },
        { value: "Yoga mat", label: "Yoga mat", icon: Book },
      ],
    },
    {
      name: "Accessibility",
      amenities: [
        { value: "Elevator", label: "Elevator", icon: Elevator },
        { value: "Wheelchair", label: "Wheelchair", icon: Wheelchair },
        { value: "Step-free", label: "Step-free", icon: Stairs },
      ],
    },
  ];

  const handleAmenityClick = (value: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleAddCustomAmenity = () => {
    if (customAmenity.trim()) {
      setSelectedAmenities((prev) => [...prev, customAmenity.trim()]);
      setCustomAmenity("");
    }
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    amenities: category.amenities.filter((amenity) =>
      amenity.label.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }));

  return (
    <>
      <Box
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
        <Heading as="h2" size="lg" mb={2}>
          What type of Amenities do you have?
        </Heading>
        <Text color="gray.600">Select all that apply to your property.</Text>
      </Box>

      <Box >
        <Input
          placeholder="Search amenities"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mb={4}
        />

        {/* Container for amenity options */}
        <Box
          maxHeight="350px"
          overflow="auto"
          display="flex"
          flexWrap="wrap"
          gap="16px"
          mt="24px"
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
        >
          {filteredCategories.map((category) =>
            category.amenities.length > 0 ? (
              <Box key={category.name} mb={4} width="100%">
                <Heading as="h3" size="md" mb={2}>
                  {category.name}
                </Heading>

                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap="16px"
                  justifyContent="start"
                >
                  {category.amenities.map((amenity) => {
                    const isSelected = selectedAmenities.includes(
                      amenity.value,
                    );

                    return (
                      <Box
                        key={amenity.value}
                        as="button"
                        onClick={() => handleAmenityClick(amenity.value)}
                        p="18px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="8px"
                        width={{ base: "125px", sm: "155px", lg: "175px" }}
                        height="120px"
                        border="1px solid"
                        borderColor={isSelected ? "blue.400" : "gray.300"}
                        bg={isSelected ? "blue.50" : "white"}
                        transition="all 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.05)", bg: "gray.100" }}
                      >
                        <Icon as={amenity.icon} boxSize={6} color="black" />
                        <Text fontSize="sm" mt="8px" fontWeight="medium">
                          {amenity.label}
                        </Text>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            ) : null,
          )}
        </Box>

        <Box mt={4}>
          <Flex flexWrap="wrap" gap={2}>
            {selectedAmenities.map((amenity) => (
              <Badge key={amenity} colorScheme="blue" variant="solid">
                {amenity}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Stack direction="row" mt={4} spacing={4}>
          <Input
            placeholder="Add custom amenity"
            value={customAmenity}
            onChange={(e) => setCustomAmenity(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleAddCustomAmenity}>
            Add
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Amenities;
