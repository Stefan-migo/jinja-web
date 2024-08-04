// HamburgerMenu Component with Correct Position
import background from "../../assets/background.svg";

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 lg:hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  );
};