
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-[#111827] text-cyan-400 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
    >
      <HiArrowUp size={25} />
    </button>
  );
}

export default ScrollToTop;
