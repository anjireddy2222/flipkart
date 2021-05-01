import ImagesNav from "./ImagesNav";
import TextNav from "./TextNav";
import TopNav from "./TopNav";

const Nav = ({ showimagenav, showtextnav }) => {
  return (
    <>
      <TopNav />
      {showimagenav && <ImagesNav />}
      {showtextnav && <TextNav />}
    </>
  );
};

export default Nav;
