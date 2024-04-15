import AllCities from "./AllCities";
import Header from "./Header";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("./clouds.jpg")`, // Replace 'path/to/your/image.jpg' with the actual path to your image file
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="max-w-screen-lg w-full p-4 relative z-10">
          <AllCities />
        </div>
      </div>
    </div>
  );
};

export default Home;
