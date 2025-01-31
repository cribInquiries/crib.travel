import React from "react";
import { Compare } from "@/components/ui/compare";
import SubjectBadge from "@/components/customUI/badges/SubjectBadge";
import MainTopicHeader from "@/components/customUI/text/MainTopicHeader";
import { Main } from "next/document";
import { Box } from "@mui/material";
import SectionTitle from "@/components/customUI/text/SectionTitle";
import LineBadgeSubtitle from "@/components/customUI/badges/LineBadgeSubtitle";

const BeforeAfter = () => {
  return (
    <>
      {" "}
      <Box
        mt={{
          xs: "100px",
          sm: "100px",
          md: "100px",
          lg: "100px",
          xl: "100px",
        }}
      ></Box>
      <LineBadgeSubtitle text="Before and After" />
      <Box
        mt={{
          xs: "100px",
          sm: "100px",
          md: "100px",
          lg: "100px",
          xl: "100px",
        }}
      ></Box>
      <SectionTitle text="Renovations, we got you covered" />
      <div className="w-[100%] h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(0deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://images.pexels.com/photos/3562689/pexels-photo-3562689.jpeg"
            secondImage="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
            firstImageClassName="object-cover object-top w-full"
            secondImageClassname="object-cover object-center w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
          />
        </div>
      </div>
    </>
  );
};

export default BeforeAfter;
