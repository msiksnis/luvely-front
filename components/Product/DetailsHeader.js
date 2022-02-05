import tw from "twin.macro";
import "styled-components/macro";
import { useState } from "react";
import { AccordionToggle } from "../Accordion/AccordionToggle";

export default function DetailsHeader({ description }) {
  const [isOpen, setOpen] = useState(true);
  const [effect, setEffect] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
    setEffect(true);
  };

  return (
    <div tw="flex justify-between pt-6 font-quicksand">
      <div tw="flex flex-col w-full">
        <div
          tw="flex justify-between cursor-pointer"
          onClick={toggleAccordion}
          onAnimationEnd={() => setEffect(false)}
        >
          <div tw="text-xl font-medium tracking-wide uppercase">Details</div>
          <AccordionToggle
            toggle={toggleAccordion}
            isOpen={isOpen}
            effect={effect}
          />
        </div>
        <div tw="pt-4">
          {isOpen ? <p tw="text-gray-700">{description}</p> : ""}
        </div>
      </div>
    </div>
  );
}
