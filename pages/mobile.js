import tw from "twin.macro";
import "styled-components/macro";
import Loader from "../components/Loader/Loader";
import InstagramFeed from "../components/Widgets/InstagramFeed";

export default function mobile() {
  return (
    <div>
      {/* <span tw="flex flex-col justify-center items-center h-screen space-y-4 text-4xl text-sickRed"></span> */}
      <InstagramFeed />
    </div>
  );
}
