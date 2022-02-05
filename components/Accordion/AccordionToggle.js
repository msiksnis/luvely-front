import { motion } from "framer-motion";
import tw from "twin.macro";
import "styled-components/macro";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="2"
    {...props}
  />
);

const transition = { ease: "easeIn", duration: 0.15 };

export function AccordionToggle({ toggle, isOpen, effect }) {
  return (
    <button onClick={toggle} className={`${effect && "animate-rotate"}`}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 11.5 4 L 11.5 20", stroke: "hsl(0, 0%, 18%)" },
            open: { d: "M 3 12 L 20 12", stroke: "hsl(0, 0%, 18%)" },
          }}
          transition={transition}
        />
        <Path
          d="M 3 12 L 20 12"
          stroke="hsl(0, 0%, 18%)"
          animate={isOpen ? "open" : "closed"}
          transition={transition}
        />
      </svg>
    </button>
  );
}
