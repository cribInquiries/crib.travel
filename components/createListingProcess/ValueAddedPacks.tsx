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
          Value Added Packs
        </Text>
        <Text
          fontSize={["16px", "16px", "16px", "16px", "20px"]}
          color="gray.600"
        >
          Select a value added pack to add to your listing.
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
              borderRadius="32px"
              key={pack.id}
              w={"400px"}
              border={"1px solid lightgray"}
              overflow="hidden"
            >
              {/* Optional Image Placeholder */}

              <Card.Body gap={4}>
                <Text fontSize="2xl" fontWeight="semibold">
                  {pack.title}
                </Text>

                {/* Room Amenities */}
                <Box>
                  <Heading
                    textStyle="2xl"
                    fontWeight="medium"
                    letterSpacing="tight"
                  >
                    ${pack.price}
                  </Heading>
                  <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
                    <Text fontSize="md" color="gray.500">
                      {pack.description}
                    </Text>
                    {/*  <Box>Items:</Box>{" "} */}
                  </Stack>
                  <Text fontSize="md"fontWeight={"semibold"}>Items:</Text>
                  <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
                    {" "}
                    {pack.items.map((item, index) => (
                      <Box
                        key={index}
                        border={"1px solid lightgray"}
                        bg={"gray.50"}
                        p={2}
                        px={3}
                        rounded={"xl"}
                      >
                        {item}
                      </Box>
                    ))}
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
                  borderRadius="16px"
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
                 borderRadius="16px"
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
                borderRadius="16px"
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
              <DialogTitle fontSize="xl" fontWeight="semibold">
                {currentPack ? "Edit Pack" : "Add New Pack"}
              </DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Box display="flex" flexDirection="column" gap={3}>
                <Input
                  variant="subtle"
                  textIndent={2}
                  autoFocus
                  type="text"
                  width="100%"
                  height="50px"
                  border="1px solid #E2E8F0"
                  _focus={{
                    border: "1px solid #E2E8F0", // Keeps the border color unchanged
                    boxShadow: "none", // Removes the default blue glow
                    outline: "none", // Ensures no additional focus outline
                  }}
                  placeholder="Pack Title"
                  value={newPack.title}
                  onChange={(e) =>
                    setNewPack({ ...newPack, title: e.target.value })
                  }
                />
                <Input
                  variant="subtle"
                  textIndent={2}
                  autoFocus
                  type="text"
                  width="100%"
                  height="50px"
                  border="1px solid #E2E8F0"
                  _focus={{
                    border: "1px solid #E2E8F0", // Keeps the border color unchanged
                    boxShadow: "none", // Removes the default blue glow
                    outline: "none", // Ensures no additional focus outline
                  }}
                  type="number"
                  placeholder="Price"
                  value={newPack.price}
                  onChange={(e) =>
                    setNewPack({ ...newPack, price: e.target.value })
                  }
                />
                <Textarea
                  variant="subtle"
                  textIndent={2}
                  autoFocus
                  width="100%"
                  height="50px"
                  border="1px solid #E2E8F0"
                  _focus={{
                    border: "1px solid #E2E8F0", // Keeps the border color unchanged
                    boxShadow: "none", // Removes the default blue glow
                    outline: "none", // Ensures no additional focus outline
                  }}
                  placeholder="Description"
                  value={newPack.description}
                  onChange={(e) =>
                    setNewPack({ ...newPack, description: e.target.value })
                  }
                />
                <Input
                  variant="subtle"
                  textIndent={2}
                  autoFocus
                  type="text"
                  width="100%"
                  height="50px"
                  border="1px solid #E2E8F0"
                  _focus={{
                    border: "1px solid #E2E8F0", // Keeps the border color unchanged
                    boxShadow: "none", // Removes the default blue glow
                    outline: "none", // Ensures no additional focus outline
                  }}
                  placeholder="Items (comma-separated)"
                  value={newPack.items}
                  onChange={(e) =>
                    setNewPack({ ...newPack, items: e.target.value })
                  }
                />
              </Box>
            </DialogBody>
            <DialogFooter display={"flex"} justifyContent={"center"} w={"100%"}>
              <DialogActionTrigger asChild>
                <Button
                  transition="all 0.3s"
                  as="button"
                  w={"225px"}
                  bg={"white"}
                  p={4}
                  color={"black"}
                  border="1px solid"
                  borderRadius="32px"
                  borderColor={"gray.300"}
                  _hover={{
                    bg: "black",
                    color: "white",

                    transition: "all 0.3s",
                  }}
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
              </DialogActionTrigger>
              <Button
                transition="all 0.3s"
                as="button"
                w={"225px"}
                bg={"white"}
                p={4}
                color={"black"}
                border="1px solid"
                borderRadius="32px"
                borderColor={"gray.300"}
                _hover={{
                  bg: "black",
                  color: "white",

                  transition: "all 0.3s",
                }}
                variant="outline"
                colorScheme="blue"
                onClick={handleSavePack}
              >
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
