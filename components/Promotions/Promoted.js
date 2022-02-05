import { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import "styled-components/macro";
import MobilePromoted from "./MobilePromoted";
import BiggerPromoted from "./BiggerPromoted";

export default function Promoted({ data, autoPlay }) {
  const [current, setCurrent] = useState(0);

  const { allTreatments } = data;

  const length = allTreatments.length;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(allTreatments) || allTreatments.length <= 0) {
    return null;
  }

  return (
    <>
      {allTreatments.map((treatment, index) => {
        return (
          <div
            className={
              index === current
                ? "ease opacity-100 transition duration-1000"
                : "ease opacity-0 transition duration-1000"
            }
            key={index}
          >
            {index === current && (
              <div tw="pt-7 sm:pt-44">
                <div tw="lg:hidden">
                  <MobilePromoted treatment={treatment} />
                </div>
                <div tw="hidden lg:inline">
                  <BiggerPromoted treatment={treatment} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

Promoted.defaultProps = {
  autoPlay: 8,
};
