import { useEffect, useState } from "react";
import { VscChevronUp } from "react-icons/vsc";

export default function ToTop() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hidden lg:inline">
      {toTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-7 bottom-24 cursor-pointer rounded-full border border-gray-800 p-1 opacity-70"
        >
          <VscChevronUp />
        </button>
      )}
    </div>
  );
}
