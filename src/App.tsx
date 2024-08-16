import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NoticeBoard from "./components/NoticeBoard";
import OurMission from "./components/OurMission";
import OurServices from "./components/OurServices";
import TopBanner from "./components/TopBanner";
import VideoAndMap from "./components/VideoAndMap";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <NoticeBoard></NoticeBoard>
      <OurMission></OurMission>
      <OurServices></OurServices>
      <VideoAndMap></VideoAndMap>
      <Footer></Footer>
    </div>
  );
};

export default App;
