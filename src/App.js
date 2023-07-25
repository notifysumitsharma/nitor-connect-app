import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import MyDashboard from "./components/dashboard/dashboard";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mylogin from "./components/login/login";
import MyDashboard2 from "./components/dashboard/dashboard2";
import Software from "./components/dashboard/software";
import Newsoft from "./components/dashboard/newsoftware";
import Marketing from "./components/dashboard/marketing";
import Newmarket from "./components/dashboard/newmarketing";
import Editsoftware from "./components/dashboard/editsoftware";
import Editmarket from "./components/dashboard/editmarket";
import MyCustomer from "./components/dashboard/customer";
import NewCustomer from "./components/dashboard/newcustomer";
import EditCustomer from "./components/dashboard/editcustomer";
import Billing from "./components/dashboard/billing";
import NewBill from "./components/dashboard/newbill";
import EditBill from "./components/dashboard/editbill";

function App() {
  return (
    <>
      {/* <Mylogin /> */}
      <HashRouter>
        <Header />

        <Routes>
          <Route exact path="/editbill/:id" element={<EditBill />}></Route>
          <Route
            exact
            path="/editcustomer/:id"
            element={<EditCustomer />}
          ></Route>
          <Route
            exact
            path="/editmarketing/:id"
            element={<Editmarket />}
          ></Route>
          <Route
            exact
            path="/editsoftware/:id"
            element={<Editsoftware />}
          ></Route>
          <Route exact path="/newbill" element={<NewBill />}></Route>
          <Route exact path="/billing" element={<Billing />}></Route>
          <Route exact path="/newcust" element={<NewCustomer />}></Route>
          <Route exact path="/customer" element={<MyCustomer />}></Route>
          <Route exact path="/newmarket" element={<Newmarket />}></Route>
          <Route exact path="/marketing" element={<Marketing />}></Route>
          <Route exact path="/newsoft" element={<Newsoft />}></Route>
          <Route exact path="/software" element={<Software />}></Route>
          <Route exact path="/dashboard" element={<MyDashboard2 />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
