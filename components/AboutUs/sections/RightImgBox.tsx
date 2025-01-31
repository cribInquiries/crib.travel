"use client";
import React from "react";
import LineBadgeSubtitle from "../../customUI/badges/LineBadgeSubtitle";
import SubjectBadge from "../../customUI/badges/SubjectBadge";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { HeroParallax } from "../../ui/hero-parallax";
import Box from "@mui/material/Box";
import MainTopicHeader from "../../customUI/text/MainTopicHeader";
import SectionTitle from "../../customUI/text/SectionTitle";
import SubTopicHeader from "../../customUI/text/SubTopicHeader";
import Image from "next/image";
import HouseHeroParallax from "../../customUI/Parallax/HouseHeroParallax";
import PorgressiveCarosel from "../../customUI/progressiveCarousel/PorgressiveCarosel";
import { VelocityScroll } from "../../ui/scroll-based-velocity";
import NumberTicker from "../../ui/number-ticker";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Link from "next/link";
import TextReveal from "../../ui/text-reveal";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Sparkles, Brush, Building2, ArrowRight } from "lucide-react";
import { Stack } from "@mui/material";
import ImgLayout from "../../customUI/imgLayout/ImgLayout";
import { Smile } from "lucide-react";
import TextCard from "../../customUI/text/textCard/TextCard";
import { FlipWords } from "../../ui/flip-words";
import { Timeline } from "../../ui/timeline";

const RightImgBox = ({
  textSubjectBadge,
  textMainTopicHeader,
  objTextCard1,
  objTextCard2,
  objTextCard3,
  objTextCard4,
  textImgLayout,
}: {
  textSubjectBadge: string;
  textMainTopicHeader: string;
  objTextCard1: { title: string; icon: JSX.Element; content: string };
  objTextCard2: { title: string; icon: JSX.Element; content: string };
  objTextCard3: { title: string; icon: JSX.Element; content: string };
  objTextCard4: { title: string; icon: JSX.Element; content: string };
  textImgLayout: string;
}) => {
  return (
    <>
      <div>
        {/* <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextReveal text="Magic UI will change the way you design." />
      </div> */}

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          mt={{ xs: "60px", sm: "60px", md: "60px", lg: "60px", xl: "60px" }}
        >
          {/* <SubjectBadge text={textSubjectBadge} /> */}
          {/* <Box
            mt={{ xs: "60px", sm: "60px", md: "60px", lg: "60px", xl: "60px" }}
          ></Box> */}
          {/* <MainTopicHeader text={textMainTopicHeader} /> */}

          <Stack
            flexWrap={{
              xs: "wrap",
              sm: "nowrap",
              md: "nowrap",
              lg: "nowrap",
              xl: "nowrap",
            }}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            // mt={{ xs: "80px", sm: "80px", md: "80px", lg: "80px", xl: "80px" }}
            gap={{ xs: "5px", sm: "5px", md: "5px", lg: "15px", xl: "15px" }}
          >
            <Stack display={"flex"} flexDirection={"row"}>
              <Stack width={"100%"} flexDirection={"column"}>
                <TextCard
                  title={objTextCard1.title}
                  icon={objTextCard1.icon}
                  description={objTextCard1.content}
                />{" "}
                <Box
                  mt={{
                    xs: "5px",
                    sm: "5px",
                    md: "5px",
                    lg: "15px",
                    xl: "15px",
                  }}
                ></Box>
                <TextCard
                  title={objTextCard2.title}
                  icon={objTextCard2.icon}
                  description={objTextCard2.content}
                />
              </Stack>
            </Stack>

            <Stack
              display={"flex"}
              flexDirection={"row"}
              mr={{ xs: "0px", sm: "0", md: "0", lg: "0", xl: "0" }}
            >
              <Stack
                flexDirection={"column"}
                justifyContent={"start"}
                alignItems={"start"}
              >
                <TextCard
                  title={objTextCard3.title}
                  icon={objTextCard3.icon}
                  description={objTextCard3.content}
                />{" "}
                <Box
                  mt={{
                    xs: "5px",
                    sm: "5px",
                    md: "5px",
                    lg: "15px",
                    xl: "15px",
                  }}
                ></Box>
                <TextCard
                  title={objTextCard4.title}
                  icon={objTextCard4.icon}
                  description={objTextCard4.content}
                />
              </Stack>
            </Stack>
            <Box
              justifyContent={"center"}
              mt={{ xs: "30px", sm: "30px", md: "0", lg: "0", xl: "0" }}
              width={{
                xs: "100%",
                sm: "880px",
                md: "880px",
                lg: "880px",
                xl: "880px",
              }}
              height="410px"
              display={{
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              }}
            >
              <ImgLayout src={textImgLayout} />
            </Box>
          </Stack>

          <Box
            mt={{ xs: "10px", sm: "10px", md: "10px", lg: "0", xl: "0" }}
            width={{
              xs: "100%",
              sm: "550px",
              md: "800px",
              lg: "880px",
              xl: "880px",
            }}
            height="410px"
            display={{
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            }}
          >
            {" "}
            <ImgLayout src={textImgLayout} />
          </Box>
        </Box>

        {/* <VelocityScroll>Velocity Scroll</VelocityScroll>;
      <PorgressiveCarosel /> */}
      </div>
    </>
  );
};

export default RightImgBox;
