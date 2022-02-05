import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import tw from "twin.macro";
import "styled-components/macro";
import { GiKnifeThrust } from "react-icons/gi";
import Parallax from "react-rellax";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "",
    imgPath: "/images/h2-rev-img-1.jpg",
  },
  {
    label: "",
    imgPath: "/images/h1-rev-img2.jpg",
  },
  {
    label: "",
    imgPath: "/images/flowers.jpeg",
  },
  {
    label: "",
    imgPath: "/images/palm.gif",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div tw="relative">
      <Parallax speed={-6} className="absolute bottom-10 left-10 opacity-30">
        <GiKnifeThrust />
      </Parallax>
      <Box sx={{}} tw="relative hidden sm:block md:mx-20 lg:mx-40">
        <Paper
          square
          elevation={0}
          tw="flex items-center justify-center h-12 bg-transparent"
        >
          <div
            tw="absolute z-10 sm:top-36 sm:left-20 sm:w-2/5 space-y-3  
              lg:(top-48 left-32 w-2/5 space-y-6)"
          >
            <h1
              tw="sm:text-[3.5rem] sm:leading-[3.5rem] lg:text-7xl text-white font-inconsolata
            font-semibold uppercase tracking-wide"
            >
              <p tw="">Happy</p>
              <p tw="">New Year</p>
            </h1>
            <div tw="text-white text-xl font-inconsolata">
              Our most loved treatments deliver rejuvenation, targeted renewal
              and La Mer's miraculous healing moisture.
            </div>
            <button
              tw="text-base uppercase tracking-wider font-poppins border border-black w-full z-10
            py-3 shadow-md rounded text-white bg-black hover:(text-black bg-white) transition duration-300 ease-in-out"
            >
              <a
                href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Time
              </a>
            </button>
          </div>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          interval={8000}
          animateTransitions
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  tw="block h-80 sm:h-[450px] lg:h-[550px] overflow-hidden w-full object-cover"
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
