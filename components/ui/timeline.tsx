"use client";
import { Stack } from "@mui/material";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white  font-sans px-10 " ref={containerRef}>
      <div ref={ref} className="relative  pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10  gap-10">
            <div className=" sticky flex flex-row z-40 items-center top-40 self-start w-full">
              <div className="h-10 absolute left-3  w-10 rounded-full bg-white  flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="relative pl-20 pr-4  w-full">
                <Stack
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  }}
                  width={"100%"}
                  flexDirection={"row"}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  }}
                  alignItems={"center"}
                  fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                  fontWeight={{
                    xs: "400",
                    sm: "400",
                    md: "400",
                    lg: "400",
                    xl: "400",
                  }}
                >
                  {" "}
                  {item.title}
                </Stack>
                {item.content}{" "}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
