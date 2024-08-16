import Navbar from "./components/Navbar";
import NoticeBoard from "./components/NoticeBoard";
import OurMission from "./components/OurMission";
import OurServices from "./components/OurServices";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <NoticeBoard></NoticeBoard>
      <OurMission></OurMission>
      <OurServices></OurServices>
    </div>
  );
};

export default App;
