import tw, { styled } from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import Cart from "./Cart";
import Nav from "./Nav";
import Search from "./Search/Search";

const Logo = tw.h1`
  text-4xl
  ml-8
  relative
  z-20
  bg-gold
  transform -skew-x-20
  uppercase
  `;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 5px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">
            <h3 tw="text-white flex pt-10 pb-10 px-6 cursor-pointer">
              Sick fits
            </h3>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyles>
  );
}
