"use client";

import React, { useState } from "react";
import { useListingCreationContext } from "@/context/ListingCreationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface ValueAddedPack {
  id: number;
  title: string;
  price: number;
  description: string;
  items: string[];
}

const ValueAddedPacks = () => {
  const { packs, setPacks } = useListingCreationContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPack, setCurrentPack] = useState<ValueAddedPack | null>(null);
  const [newPack, setNewPack] = useState({
    title: "",
    price: "",
    description: "",
    items: "",
  });

  const handleOpenAddModal = () => {
    setCurrentPack(null);
    setNewPack({ title: "", price: "", description: "", items: "" });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (pack: ValueAddedPack) => {
    setCurrentPack(pack);
    setNewPack({
      title: pack.title,
      price: pack.price.toString(),
      description: pack.description,
      items: pack.items.join(", "),
    });
    setIsModalOpen(true);
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
            : pack
        )
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

    setIsModalOpen(false);
    setNewPack({ title: "", price: "", description: "", items: "" });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Value-Added Packs</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {packs.map((pack) => (
          <Card key={pack.id} className="shadow-md">
            <CardHeader>
              <h3 className="text-lg font-semibold">{pack.title}</h3>
              <span className="text-gray-600">${pack.price}</span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">{pack.description}</p>
              <p className="text-gray-700 text-sm mt-2">
                <strong>Items:</strong> {pack.items.slice(0, 3).join(", ")}
                {pack.items.length > 3 && " ..."}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => handleOpenEditModal(pack)}>
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setPacks((prevPacks) => prevPacks.filter((p) => p.id !== pack.id))}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenAddModal}>+ Add New Pack</Button>
          </DialogTrigger>
          <DialogContent className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                {currentPack ? "Edit Pack" : "Add New Pack"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Input
                placeholder="Pack Title"
                value={newPack.title}
                onChange={(e) => setNewPack({ ...newPack, title: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Price"
                value={newPack.price}
                onChange={(e) => setNewPack({ ...newPack, price: e.target.value })}
              />
              <Textarea
                placeholder="Description"
                value={newPack.description}
                onChange={(e) => setNewPack({ ...newPack, description: e.target.value })}
              />
              <Input
                placeholder="Items (comma-separated)"
                value={newPack.items}
                onChange={(e) => setNewPack({ ...newPack, items: e.target.value })}
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSavePack}>Save Pack</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ValueAddedPacks;
