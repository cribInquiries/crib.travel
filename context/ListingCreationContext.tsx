"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ValueAddedPack {
  id: number;
  title: string;
  price: number;
  description: string;
  items: string[];
}

// Define the shape of the context
interface ListingCreationContextType {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  selectedProperty: string | null;
  setSelectedProperty: React.Dispatch<React.SetStateAction<string | null>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  mapUrl: string;
  setMapUrl: React.Dispatch<React.SetStateAction<string>>;
  addedRooms: Array<{
    roomType: string | null;
    generatedRoomName: string | null;
    chooseAmenities: string[];
    chooseAmenitiesEnsuite: string[];
  }>;
  setAddedRooms: React.Dispatch<
    React.SetStateAction<
      Array<{
        roomType: string | null;
        generatedRoomName: string | null;
        chooseAmenities: string[];
        chooseAmenitiesEnsuite: string[];
      }>
    >
  >;
  addRoomProgress: number;
  setAddRoomProgress: React.Dispatch<React.SetStateAction<number>>;
  uploadedFiles: File[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  imageDetails: any[];
  setImageDetails: React.Dispatch<React.SetStateAction<any[]>>;
  basePrice: number;
  setBasePrice: React.Dispatch<React.SetStateAction<number>>;
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  weekendAdjustment: number;
  setWeekendAdjustment: React.Dispatch<React.SetStateAction<number>>;
  seasonalAdjustment: number;
  setSeasonalAdjustment: React.Dispatch<React.SetStateAction<number>>;
  packageDiscounts: Array<{ packs: number | ""; discount: number | "" }>;
  setPackageDiscounts: React.Dispatch<
    React.SetStateAction<Array<{ packs: number | ""; discount: number | "" }>>
  >;
  rules: { title: string; }[];
  setRules: React.Dispatch<
    React.SetStateAction<{ title: string }[]>
  >;
  recommendations: Array<{
    id: number;
    title: string;
    description: string;
    applied: boolean;
  }>;
  setRecommendations: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: number;
        title: string;
        description: string;
        applied: boolean;
      }>
    >
  >;
  packs: ValueAddedPack[];
  setPacks: React.Dispatch<React.SetStateAction<ValueAddedPack[]>>;
  selectedAmenities: string[];
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  customAmenity: string;
  setCustomAmenity: React.Dispatch<React.SetStateAction<string>>;
  // Newly added states
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  prices: number[];
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
  selectedDates: number[];
  setSelectedDates: React.Dispatch<React.SetStateAction<number[]>>;
  loadingInsights: boolean;
  setLoadingInsights: React.Dispatch<React.SetStateAction<boolean>>;
  insights: {
    revenue: number[];
    occupancy: number[];
    labels: string[];
  } | null;
  setInsights: React.Dispatch<
    React.SetStateAction<{
      revenue: number[];
      occupancy: number[];
      labels: string[];
    } | null>
  >;
  editDialogOpen: boolean;
  setEditDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editRate: number | "";
  setEditRate: React.Dispatch<React.SetStateAction<number | "">>;
  season: string | null;
  setSeason: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context
const ListingCreationContext = createContext<
  ListingCreationContextType | undefined
>(undefined);

// Provider component
export const ListingCreationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [progress, setProgress] = useState<number>(10);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mapUrl, setMapUrl] = useState<string>(
    "https://maps.google.com/maps?q=Rundle Mall&t=&z=13&ie=UTF8&iwloc=&output=embed",
  );
  const [addedRooms, setAddedRooms] = useState<
    Array<{
      roomType: string | null;
      generatedRoomName: string | null;
      chooseAmenities: string[];
      chooseAmenitiesEnsuite: string[];
    }>
  >([]);
  const [addRoomProgress, setAddRoomProgress] = useState<number>(25);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [imageDetails, setImageDetails] = useState<any[]>([]);
  const [basePrice, setBasePrice] = useState<number>(100);
  const [minPrice, setMinPrice] = useState<number>(50);
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [weekendAdjustment, setWeekendAdjustment] = useState<number>(20);
  const [seasonalAdjustment, setSeasonalAdjustment] = useState<number>(30);
  const [packageDiscounts, setPackageDiscounts] = useState<
    Array<{ packs: number | ""; discount: number | "" }>
  >([{ packs: 1, discount: 3 }]);
  const [rules, setRules] = useState<{ title: string; icon: JSX.Element }[]>(
    [],
  );
  const [recommendations, setRecommendations] = useState<
    Array<{ id: number; title: string; description: string; applied: boolean }>
  >([]);
  const [packs, setPacks] = useState<ValueAddedPack[]>([
    {
      id: 1,
      title: "Welcome Pack",
      price: 25,
      description: "A warm welcome for your guests",
      items: ["Local guidebook", "Welcome letter", "Snack basket"],
    },
    {
      id: 2,
      title: "Breakfast Essentials",
      price: 30,
      description: "Start the day right with breakfast essentials",
      items: ["Coffee", "Tea", "Cereal"],
    },
    {
      id: 3,
      title: "Spa Experience",
      price: 45,
      description: "Luxurious spa items for relaxation",
      items: ["Bathrobe", "Slippers", "Scented candles"],
    },
  ]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [customAmenity, setCustomAmenity] = useState<string>("");

  // New states
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [prices, setPrices] = useState<number[]>([]);
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const [loadingInsights, setLoadingInsights] = useState<boolean>(false);
  const [insights, setInsights] = useState<{
    revenue: number[];
    occupancy: number[];
    labels: string[];
  } | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [editRate, setEditRate] = useState<number | "">("");
  const [season, setSeason] = useState<string | null>("Summer");
  return (
    <ListingCreationContext.Provider
      value={{
        season,
        setSeason,
        progress,
        setProgress,
        selectedProperty,
        setSelectedProperty,
        title,
        setTitle,
        description,
        setDescription,
        address,
        setAddress,
        mapUrl,
        setMapUrl,
        addedRooms,
        setAddedRooms,
        addRoomProgress,
        setAddRoomProgress,
        uploadedFiles,
        setUploadedFiles,
        imageDetails,
        setImageDetails,
        basePrice,
        setBasePrice,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        weekendAdjustment,
        setWeekendAdjustment,
        seasonalAdjustment,
        setSeasonalAdjustment,
        packageDiscounts,
        setPackageDiscounts,
        rules,
        setRules,
        recommendations,
        setRecommendations,
        packs,
        setPacks,
        selectedAmenities,
        setSelectedAmenities,
        customAmenity,
        setCustomAmenity,
        selectedTab,
        setSelectedTab,
        prices,
        setPrices,
        selectedDates,
        setSelectedDates,
        loadingInsights,
        setLoadingInsights,
        insights,
        setInsights,
        editDialogOpen,
        setEditDialogOpen,
        editRate,
        setEditRate,
      }}
    >
      {children}
    </ListingCreationContext.Provider>
  );
};

// Custom hook for using the context
export const useListingCreationContext = (): ListingCreationContextType => {
  const context = useContext(ListingCreationContext);
  if (!context) {
    throw new Error(
      "useListingCreationContext must be used within a ListingCreationProvider",
    );
  }
  return context;
};


