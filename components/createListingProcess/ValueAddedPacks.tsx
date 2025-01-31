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
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Location
        </Text>
        <Text fontSize="md" color="gray.600">
          Enter the address of your property.
        </Text>
      </Box>

      <Box p={6} mx="auto">
        <Heading size="lg" mb={4}>
          Value-Added Packs
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {packs.map((pack) => (
            <Card.Root key={pack.id} shadow="md">
              <Card.Header>
                <Flex justify="space-between">
                  <Box>
                    <Heading size="md">{pack.title}</Heading>
                    <Text color="gray.600">${pack.price}</Text>
                  </Box>
                </Flex>
              </Card.Header>
              <Card.Body>
                <Text fontSize="sm" color="gray.500">
                  {pack.description}
                </Text>
                <Text fontSize="sm" color="gray.700" mt={2}>
                  <strong>Items:</strong> {pack.items.slice(0, 3).join(", ")}
                  {pack.items.length > 3 && " ..."}
                </Text>
              </Card.Body>
              <Card.Footer>
                <DialogRoot
                  open={isDialogOpen}
                  onOpenChange={(details) => setIsDialogOpen(details.open)}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenEditDialog(pack)}
                    >
                      Edit
                    </Button>
                  </DialogTrigger>
                </DialogRoot>
                <Spacer />
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() =>
                    setPacks((prevPacks) =>
                      prevPacks.filter((p) => p.id !== pack.id),
                    )
                  }
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* Add New Pack Button */}
        <Box textAlign="center" mt={6}>
          <DialogRoot
            open={isDialogOpen}
            onOpenChange={(details) => setIsDialogOpen(details.open)}
          >
            <DialogTrigger asChild>
              <Button onClick={handleOpenAddDialog}>+ Add New Pack</Button>
            </DialogTrigger>
          </DialogRoot>
        </Box>

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
