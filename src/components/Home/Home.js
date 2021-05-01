import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav showimagenav={true} showtextnav={false} />
      <br />
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-2">OR</div>
        <div className="col-lg-5"></div>
      </div>
    </>
  );
};

export default Home;
