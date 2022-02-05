import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { NavMenu } from "./NavMenu";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

// Menu that slides out
const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 0.5em 1em;
  margin-top: 65px;
  border: none;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
  open: {
    transform: "translateX(0%)",
  },
  closed: {
    transform: "translateX(100%)",
  },
};

const menuTransition = {
  // type: "spring",
  // duration: 1,
  duration: 0.2,
  stiffness: 100,
  delay: 0.1,
};

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <ContentContainer>
          <NavMenu toggle={toggleMenu} isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
