"use client";
import React from "react";

// Unused imports
// import { InstagramLogoIcon } from "@radix-ui/react-icons";
// import { HeroParallax } from "../ui/hero-parallax";
// import MainTopicHeader from "../customUI/text/MainTopicHeader";
// import SubTopicHeader from "../customUI/text/SubTopicHeader";
// import Image from "next/image";
// import HouseHeroParallax from "../customUI/Parallax/HouseHeroParallax";
// import PorgressiveCarosel from "../customUI/progressiveCarousel/PorgressiveCarosel";
// import { VelocityScroll } from "../ui/scroll-based-velocity";
// import NumberTicker from "../ui/number-ticker";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import TextReveal from "../ui/text-reveal";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Handshake } from "lucide-react";
// import { TowerControl } from "lucide-react";
// import { AnimatedBeamMultipleOutputDemo } from "../customUI/AnimatedBeamMultipleOutputDemo/AnimatedBeamMultipleOutputDemo";
// import { FlipWords } from "../ui/flip-words";
// import { Timeline } from "../ui/timeline";
import { Compare } from "@/components/ui/compare";
import LineBadgeSubtitle from "../customUI/badges/LineBadgeSubtitle";
import SubjectBadge from "../customUI/badges/SubjectBadge";
import Box from "@mui/material/Box";
import SectionTitle from "../customUI/text/SectionTitle";
import Link from "next/link";
import {
  Smile,
  Merge,
  List,
  TrendingUp,
  Eye,
  Binoculars,
  MapPinHouse,
  SearchCheck,
} from "lucide-react";
import RightImgBox from "./sections/RightImgBox";
import LeftImgBox from "./sections/LeftImgBox";
import BeforeAfter from "./sections/BeforeAfter";
import { FeaturesSectionDemo } from "../customUI/BoxLayout/FeaturesSectionDemo";

const AboutHeader = () => {
  return (
    <>
      <div>
        <Box
        // mt={{
        //   xs: "-500px",
        //   sm: "-500px",
        //   md: "-500px",
        //   lg: "-500px",
        //   xl: "-500px",
        // }}
        >
          <LineBadgeSubtitle text="About Us" />
          <Box
            mt={{
              xs: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          ></Box>
          <SectionTitle text="Seamless Exceptional Management " />

          {/* <RightImgBox
            textImgLayout="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg"
            textSubjectBadge="Feel At Ease"
            textMainTopicHeader="Say Goodbye To Hosting Hassles"
            objTextCard1={{
              title: "Stress-Free Experience",
              icon: <Smile />,
              content:
                "We provide a stress-free experience for our clients. Our team of experienced professionals is dedicated to delivering exceptional service.",
            }}
            objTextCard2={{
              title: "Versatile Platform Use",
              icon: <Merge />,
              content:
                "Utilize platforms like Airbnb, Booking.com, and traditional rentals for maximum flexibility.",
            }}
            objTextCard3={{
              title: "Comprehensive Services",
              icon: <List />,
              content:
                "Benefit from meticulous maintenance, professional cleaning, and efficient tenant booking.",
            }}
            objTextCard4={{
              title: "Increased Rental Income",
              icon: <TrendingUp />,
              content:
                "Boost rental income by an average of 40% and improve occupancy rates with our seasoned Airbnb management team in Adelaide.",
            }}
          /> */}
        </Box>

        <LeftImgBox
          textImgLayout="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
          textSubjectBadge="Client in Mind"
          textMainTopicHeader="Enjoy Our Extensive Services"
          objTextCard1={{
            title: "24/7 Security Coverage",
            icon: <Eye />,
            content:
              "Around-the-clock security monitoring to keep your property safe and secure at all times.",
          }}
          objTextCard2={{
            title: "24/7 Incidence Management",
            icon: <Binoculars />,
            content:
              "Immediate response to any issues or emergencies, ensuring peace of mind for you and your guests.",
          }}
          objTextCard3={{
            title: "Professional Marketing",
            icon: <MapPinHouse />,
            content:
              "High-quality marketing to showcase your property, enhancing its appeal and attracting more bookings.",
          }}
          objTextCard4={{
            title: "Regular Property Inspections",
            icon: <SearchCheck />,
            content:
              "Routine checks to ensure your property is maintained in top condition.",
          }}
        />
      </div>

      {/*   
<BeforeAfter /> */}
      {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <AnimatedBeamMultipleOutputDemo />{" "}
      </Box> */}
    </>
  );
};

export default AboutHeader;
