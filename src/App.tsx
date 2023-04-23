import FakeChart from "./components/Chart/FakeChart";
import CompName from "./components/CompName/CompName";
import DetailBoard from "./components/DetailBoard/DetailBoard";
import FieldContainer from "./components/FieldContainer";
import Header from "./components/Header/Header";
import OrderEntry from "./components/OrderEntry/OrderEntry";
import PrePrice from "./components/PrePrice/PrePrice";
import PricePanel from "./components/PricePanel/PricePanel";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="bg-[#E7F1F3] flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="comp-name ">
          <CompName />
        </div>
        <FieldContainer className="price">
          <PricePanel />
        </FieldContainer>
        <FieldContainer className="pre-price">
          <PrePrice />
        </FieldContainer>
        <FieldContainer className="charts">
          <FakeChart />
        </FieldContainer>
        <FieldContainer className="order">
          <OrderEntry />
        </FieldContainer>
        <FieldContainer className="details">
          <DetailBoard />
        </FieldContainer>
      </div>
    </div>
  );
}

export default App;
