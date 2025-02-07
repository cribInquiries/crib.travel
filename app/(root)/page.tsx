"use client";

import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import onePieceOFbackground from "../../public/svg/onePieceOFbackground.svg";
import Navbar from "@/components/Navbar/Navbar";

import Hero from "@/components/Hero";
import AboutHeader from "@/components/AboutUs/AboutHeader";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials/AnimatedTestimonialsDemo";
import StickyScroll from "@/components/customUI/StickyScroll/StickyScroll";
import RepeatAnimation from "@/components/customUI/RepeatAnimation/RepeatAnimation";
import SmoothScroll from "@/components/customUI/SmoothScroll/SmoothScroll";
import { HeroScrollDemo } from "@/components/customUI/ContainerScrollAnimation/HeroScrollDemo";
import { MacbookScrollDemo } from "@/components/customUI/MacbookScroll/MacbookScrollDemo";
import { useUser } from "@/context/UserContext";
import { getCurrentUser } from "@/lib/actions/user.actions";
import TestingCreateListingDB from "@/components/TestingCreateListingDB";
import { HStack, Text } from "@chakra-ui/react";

const Home = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // Fetch the current user only if not already set
      if (!user) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      }
      setLoading(false); // Mark loading as complete
    };

    fetchUser();
  }, [user, setUser]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching user
  }

  return (
    <>
    hi

      <Navbar />
      <Hero />
      <TestingCreateListingDB />

      {/* 
      <FAQ />

      <Footer /> */}
    </>
  );
};

export default Home;
