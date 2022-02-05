import { motion } from "framer-motion";
import tw from "twin.macro";
import "styled-components/macro";
import Link from "next/link";

const NavMenuContainer = tw.div`
flex
flex-col
`;

const NavList = tw.ul`
flex
flex-col
`;

const NavLink = tw(motion.li)`
flex
items-center
font-poppins
`;

const Anker = tw(motion.a)`
text-xl
border-b border-gray-200
w-full
pb-2
transition-all duration-200 ease-in-out
uppercase
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const variantsSecond = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

export function NavMenu({ toggle, isOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <div className="mt-6 space-y-3 text-gray-700">
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.25, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/treatments-prices/hands">
              <Anker>Hands</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.2, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.05, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/treatments-prices/feet">
              <Anker>Feet</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.3, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.15, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/treatments-prices/waxing">
              <Anker>Waxing</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.35, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.2, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/treatments-prices/microblading">
              <Anker>Microblading</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.4, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.25, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/treatments-prices/lashes-and-brows">
              <Anker>Lashes & Brows</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.5, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.35, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/shop">
              <Anker>Shop</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.55, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.4, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/vouchers">
              <Anker>Vouchers</Anker>
            </Link>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.6, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.45, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <Link href="/giftcard">
              <Anker>Giftcards</Anker>
            </Link>
          </NavLink>
        </div>
        <div className="flex w-full flex-col items-center space-y-6 pt-10">
          <motion.button
            className="w-56 rounded border border-black/90 bg-black/90 py-2 text-lg uppercase text-white shadow-lg"
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variantsSecond.show,
                transition: { delay: 0.7, duration: 0.7 },
              },
              hide: {
                ...variantsSecond.hide,
                transition: { delay: 0.45, duration: 0.05 },
              },
            }}
            onClick={toggle}
          >
            <a
              href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book The Time
            </a>
          </motion.button>
          <div className="flex flex-col items-center">
            <motion.p
              className="text-xs opacity-70"
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={{
                show: {
                  ...variantsSecond.show,
                  transition: { delay: 1.1, duration: 0.5 },
                },
                hide: {
                  ...variantsSecond.hide,
                  transition: { delay: 0.45, duration: 0.05 },
                },
              }}
            >
              Let's talk
            </motion.p>
            <motion.a
              href="mailto:info@engabeauty.no"
              target="_blank"
              rel="noopener noreferrer"
              className="hover: text-sm opacity-70"
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={{
                show: {
                  ...variantsSecond.show,
                  transition: { delay: 1.3, duration: 0.8 },
                },
                hide: {
                  ...variantsSecond.hide,
                  transition: { delay: 0.45, duration: 0.05 },
                },
              }}
              onClick={toggle}
            >
              info@engabeauty.no
            </motion.a>
          </div>
        </div>
      </NavList>
    </NavMenuContainer>
  );
}
