import FakeChart from "./components/Chart/FakeChart";
import DetailBoard from "./components/DetailBoard/DetailBoard";
import Header from "./components/Header/Header";
import OrderEntry from "./components/OrderEntry/OrderEntry";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <FakeChart />
      <OrderEntry />
      <DetailBoard />
    </div>
  );
}

export default App;
