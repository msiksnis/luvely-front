// export { default } from './products';
import ProductsPage from "./products";
import Parallax from "react-rellax";
import ToTop from "../components/ToTop";
import PromotedTreatments from "../components/Promotions/PromotedTreatments";
import InstagramFeed from "../components/Widgets/InstagramFeed";

export default function HomePage({ children, treatment }) {
  return (
    <div className="">
      <PromotedTreatments />
      <Parallax speed={-1}>
        <ProductsPage />
        <InstagramFeed />
      </Parallax>
      <ToTop />
    </div>
  );
}
