"use client";

import React, { useEffect, useState } from "react";
import { Stack, Box } from "@chakra-ui/react";
import {
  MapPin,
  Users,
  Search,
  ListIcon,
  MapIcon,
  StarsIcon,
  Sparkles,
  Star,
  Plane,
  Home,
  Mountain,
} from "lucide-react";
import Input from "@mui/material/Input";
import Aos from "aos";
import "aos/dist/aos.css";
import { DatePickerWithRange } from "./customUI/DatePickerWithRange/DatePickerWithRange";
import DropDownMenu from "./customUI/dropDownMenu/DropDownMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SearchBar from "./customUI/searchBar/SearchBar";
import CardTileFront from "./customUI/customCard/CardTileFront";
import IndListing from "./customUI/IndListing/IndListing";

import { useUser } from "@/context/UserContext";

const Hero = () => {
  const { user } = useUser();

  const [value, setvalue] = useState("crib");

  const handleModeChange = (newMode: string) => {
    setvalue(newMode);
    console.log(newMode);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const options = [
    { value: "fly", icon: Plane, label: "Fly" },
    { value: "crib", icon: Home, label: "Crib" },
    { value: "adventure", icon: Mountain, label: "Adventure" },
  ];

  return (
    <>
      <Stack
        mt={{ base: "40px", sm: "40px", md: "40px", lg: "40px", xl: "40px" }}
        mb={{
          base: "25px",
          sm: "25px",
          md: "25px",
          lg: "25px",
          xl: "25px",
        }}
        textAlign={"center"}
        width={"100%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{
          base: "34px",
          sm: "40px",
          md: "40px",
          lg: "76px",
          xl: "76px",
        }}
        fontWeight={{ base: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
      >
        <Box color={"#222222"} fontWeight={"600"} width={"70%"}>
          Where to next? <br />
        </Box>
        <Box
          fontSize={{
            base: "34px",
            sm: "34px",
            md: "34px",
            lg: "34px",
            xl: "34px",
          }}
          color={"#222222"}
          fontWeight={"600"}
          width={"70%"}
        >
          {user ? (
            <div>
              <h2>Welcome, {user.fullName}!</h2>
            </div>
          ) : (
            <p>Please log in to create a listing.</p>
          )}
          <br />
        </Box>
      </Stack>

      <SearchBar />

      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        px={"15px"}
        mt={{ base: "35px", sm: "35px", md: "35px", lg: "35px", xl: "35px" }}
      >
        <div className="flex p-1 space-x-1 w-auto bg-white rounded-full shadow-md border border-gray-200 ">
          {options.map((option) => (
            <button
              key={option.value}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2",
                value === option.value
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900",
              )}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
              onClick={() => handleModeChange(option.value)}
            >
              {value === option.value && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-black mix-blend-normal"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={cn(
                  "relative z-20 flex items-center justify-center",
                  value === option.value ? "text-white" : "text-gray-600",
                )}
              >
                <option.icon className="w-4 h-4 mr-2" />
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </Stack>

      <Stack
        mt={{ base: "35px", sm: "35px", md: "35px", lg: "35px", xl: "35px" }}
        mb={{ base: "35px", sm: "35px", md: "35px", lg: "35px", xl: "35px" }}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          width={"80%"}
          justifyContent={"start"}
          alignItems={"start"}
          flexDirection={"column"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            fontSize={{
              base: "34px",
              sm: "34px",
              md: "34px",
              lg: "34px",
              xl: "34px",
            }}
            color={"#222222"}
            fontWeight={"700"}
            justifyContent={"end"}
            alignItems={"end"}
            // mt={{ base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "20px" }}
            // mb={{ base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "20px" }}
          >
            Featured Cribs
          </Box>

          <CardTileFront />
        </Stack>
      </Stack>

      <IndListing />
    </>
  );
};

export default Hero;
