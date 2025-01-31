"use client";
import { ReactLenis } from "lenis/react";
import HouseHeroParallax from "@/components/customUI/Parallax/HouseHeroParallax";
import AboutHeader from "@/components/AboutUs/AboutHeader";
import LeftImgBox from "@/components/AboutUs/sections/LeftImgBox";
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
export default function SmoothScroll(): JSX.Element {
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="  h-screen  w-full grid place-content-center sticky top-0">
            {/*         
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
        /> */}
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              If you don't like this then I'm sorry, <br /> create your own and
              make it open source 💼
            </h1>
          </section>
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Thanks To Scroll.
              <br /> Now Scroll Up Again☝️🏿
            </h1>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
