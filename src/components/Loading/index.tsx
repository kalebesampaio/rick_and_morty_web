import { LoadingStyles } from "./styles";
import Img from "../../assets/spin.svg";

export const Loading = () => {
  return (
    <LoadingStyles>
      <img src={Img} alt="" />
    </LoadingStyles>
  );
};