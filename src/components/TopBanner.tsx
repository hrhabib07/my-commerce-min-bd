// import { FlagIcon, FlagIconCode } from "react-flag-kit";

const TopBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("./../../images/commerece-bd.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px", // Set the desired height
        position: "relative",
        // backgroundBlendMode: "multiply",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)", // Black layer with 50% opacity
        }}
        className="flex items-center"
      >
        <div className="max-w-[50%] m-4">
          <h2 className="text-white text-4xl">
            Welcome to the official website of <br /> commerce ministry of
            bangladesh{" "}
          </h2>
          <h3 className="text-gray-300 text-xl mt-4">
            Empowering trade, fostering economic growth, and ensuring consumer
            protection across Bangladesh.
          </h3>
          <button className="p-2 bg-green-600 text-white my-4 rounded hover:bg-green-800 ">
            {" "}
            Explore More{" "}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 border">
            <div className="text-white uppercase text-center col-span-2">
              Today's exchange rate
            </div>
            <div className="text-white flex gap-4 text-center">
              <h2>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg"
                  alt="USA Flag"
                  className="h-8 w-12"
                />
              </h2>
              <h2>116.77৳</h2>
            </div>
            <div className="text-white flex gap-4 text-center">
              <h2>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ec-1f1e7.svg"
                  alt="UK Flag"
                  className="h-8 w-12"
                />
              </h2>
              <h2>149.97৳</h2>
            </div>

            <div className="text-white flex gap-4 text-center">
              <h2>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e6-1f1fa.svg"
                  alt="Australian Flag"
                  className="h-8 w-12"
                />
              </h2>
              <h2>77.41৳</h2>
            </div>
            <div className="text-white flex gap-4 text-center">
              <h2>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1f8-1f1e6.svg"
                  alt="Saudi Arabian Flag"
                  className="h-8 w-12"
                />
              </h2>
              <h2>31.11৳</h2>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopBanner;
