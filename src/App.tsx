import Navbar from "./components/Navbar";
import NoticeBoard from "./components/NoticeBoard";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <NoticeBoard></NoticeBoard>
    </div>
  );
};

export default App;
