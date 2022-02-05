import { useEffect, useState } from "react";
import "styled-components/macro";
import TopOfHeader from "./TopOfHeader";
import BottomOfHeader from "./BottomOfHeader";
import SmallHeader from "./SmallHeader";
import SearchModal from "../Search/SearchModal";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [headerSize, setHeaderSize] = useState(false);

  const switchHeader = () => {
    if (window.scrollY >= 80) {
      setHeaderSize(true);
    } else {
      setHeaderSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", switchHeader);
    return () => window.removeEventListener("scroll", switchHeader);
  }, [switchHeader]);

  return (
    <header>
      <span tw="sm:hidden">
        <MobileHeader />
      </span>
      <span className="hidden sm:block">
        <div
          className={
            headerSize ? "hidden" : "fixed top-0 z-50 flex w-full bg-white"
          }
        >
          <TopOfHeader />
        </div>

        <div
          className={
            headerSize
              ? "hidden"
              : "fixed top-0 z-50 mt-20 w-full bg-white shadow-md"
          }
        >
          <BottomOfHeader />
        </div>
        <div
          id="3"
          className={headerSize ? "fixed top-0 z-50 w-full bg-white" : "hidden"}
        >
          <SmallHeader />
        </div>
      </span>
      <SearchModal />
    </header>
  );
}
