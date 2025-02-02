"use client";

import React, { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Button,
  Input,
  Textarea,
  Flex,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";

interface ValueAddedPack {
  id: number;
  title: string;
  price: number;
  description: string;
  items: string[];
}

const ValueAddedPacks = () => {
  const { packs, setPacks } = useListingCreationContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPack, setCurrentPack] = useState<ValueAddedPack | null>(null);
  const [newPack, setNewPack] = useState({
    title: "",
    price: "",
    description: "",
    items: "",
  });

  const handleOpenAddDialog = () => {
    setCurrentPack(null);
    setNewPack({ title: "", price: "", description: "", items: "" });
    setIsDialogOpen(true);
  };

  const handleOpenEditDialog = (pack: ValueAddedPack) => {
    setCurrentPack(pack);
    setNewPack({
      title: pack.title,
      price: pack.price.toString(),
      description: pack.description,
      items: pack.items.join(", "),
    });
    setIsDialogOpen(true);
  };

  const handleSavePack = () => {
    if (currentPack) {
      setPacks((prevPacks) =>
        prevPacks.map((pack) =>
          pack.id === currentPack.id
            ? {
                ...pack,
                title: newPack.title,
                price: parseFloat(newPack.price),
                description: newPack.description,
                items: newPack.items.split(",").map((item) => item.trim()),
              }
            : pack,
        ),
      );
    } else {
      setPacks([
        ...packs,
        {
          id: packs.length + 1,
          title: newPack.title,
          price: parseFloat(newPack.price),
          description: newPack.description,
          items: newPack.items.split(",").map((item) => item.trim()),
        },
      ]);
    }
    setIsDialogOpen(false);
    setNewPack({ title: "", price: "", description: "", items: "" });
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
          The Location of Your Property
        </Text>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
        >
          Enter the address of your property to show it on the map.
        </Text>

        <Box
          mt={"50px"}
          display={"flex"}
          flexDirection={"row"}
          gap={4}
          flexWrap={"wrap"}
        >
          {packs.map((pack) => (
            <Card.Root
              key={pack.id}
              w={"400px"}
              border={"1px solid lightgray"}
              overflow="hidden"
            >
              {/* Optional Image Placeholder */}

              <Card.Body gap={4}>
                <Text fontSize="xl" fontWeight="semibold">
                  {pack.title}
                </Text>

                {/* Room Amenities */}
                <Box>
                  <Heading as="h4" size="sm" mb={2}>
                    ${pack.price}
                  </Heading>
                  <Stack direction="row" flexWrap="wrap" gap={2}>
                    <Text fontSize="sm" color="gray.500">
                      {pack.description}
                    </Text>
                    <Text fontSize="sm" color="gray.700" mt={2}>
                      <strong>Items:</strong>{" "}
                      {pack.items.slice(0, 3).join(", ")}
                      {pack.items.length > 3 && " ..."}
                    </Text>
                  </Stack>
                </Box>

                {/* Ensuite Amenities */}
              </Card.Body>

              <Card.Footer>
                <Box
                  transition="all 0.3s"
                  as="button"
                  w={"100%"}
                  bg={"white"}
                  p={2}
                  color={"black"}
                  border="1px solid"
                  borderRadius="8px"
                  borderColor={"gray.300"}
                  onClick={() =>
                    setPacks((prevPacks) =>
                      prevPacks.filter((p) => p.id !== pack.id),
                    )
                  }
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                >
                  Delete
                </Box>

                <Box
                  transition="all 0.3s"
                  as="button"
                  w={"100%"}
                  bg={"white"}
                  p={2}
                  color={"black"}
                  border="1px solid"
                  borderRadius="8px"
                  borderColor={"gray.300"}
                  onClick={() => handleOpenEditDialog(pack)}
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                >
                  Edit
                </Box>
              </Card.Footer>
            </Card.Root>
          ))}
        </Box>
        <Box textAlign="center" mt={6}>
          <DialogRoot
            open={isDialogOpen}
            onOpenChange={(details) => setIsDialogOpen(details.open)}
          >
            <DialogTrigger asChild>
              <Button
                transition="all 0.3s"
                as="button"
                w={"100%"}
                h={"50px"}
                bg={"white"}
                p={2}
                color={"black"}
                border="1px solid"
                borderRadius="8px"
                borderColor={"gray.300"}
                onClick={handleOpenAddDialog}
                _hover={{
                  bg: "black",
                  color: "white",

                  transition: "all 0.3s",
                }}
              >
                Add New Pack
              </Button>
            </DialogTrigger>
          </DialogRoot>
        </Box>
        {/* Add New Pack Button */}

        {/* New Dialog Component */}
        <DialogRoot
          open={isDialogOpen}
          onOpenChange={(details) => setIsDialogOpen(details.open)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {currentPack ? "Edit Pack" : "Add New Pack"}
              </DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Box display="flex" flexDirection="column" gap={3}>
                <Input
                  placeholder="Pack Title"
                  value={newPack.title}
                  onChange={(e) =>
                    setNewPack({ ...newPack, title: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={newPack.price}
                  onChange={(e) =>
                    setNewPack({ ...newPack, price: e.target.value })
                  }
                />
                <Textarea
                  placeholder="Description"
                  value={newPack.description}
                  onChange={(e) =>
                    setNewPack({ ...newPack, description: e.target.value })
                  }
                />
                <Input
                  placeholder="Items (comma-separated)"
                  value={newPack.items}
                  onChange={(e) =>
                    setNewPack({ ...newPack, items: e.target.value })
                  }
                />
              </Box>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
              </DialogActionTrigger>
              <Button colorScheme="blue" onClick={handleSavePack}>
                Save Pack
              </Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
      </Box>
    </>
  );
};

export default ValueAddedPacks;
