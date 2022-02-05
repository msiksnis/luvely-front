import { FiInstagram } from "react-icons/fi";

export default function InstagramIcon() {
  return (
    <div className="opacity-70 hover:scale-110 hover:opacity-100">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 ease-in-out hover:scale-110"
      >
        <FiInstagram />
      </a>
    </div>
  );
}
