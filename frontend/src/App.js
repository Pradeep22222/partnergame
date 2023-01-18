import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { PartnerConnection } from "./components/PartnerConnection";
import { Fblogin } from "./components/Fblogin";
import { Facebooklogin } from "./components/Facebooklogin";
import { Verification } from "./components/Verification";
import { CloseTab } from "./components/CloseTab";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/connection"
            element={<PartnerConnection></PartnerConnection>}
          />

          <Route path="/connection/login" element={<Fblogin></Fblogin>} />

          <Route
            path="/connection/login/facebooklogin"
            element={<Facebooklogin></Facebooklogin>}
          />
          <Route
            path="/connection/login/facebooklogin/confirmation"
            element={<Verification></Verification>}
          />
          <Route
            path="/connection/login/facebooklogin/confirmation/close"
            element={<CloseTab></CloseTab>}
          />
          <Route
            path="/connection/login/facebooklogin/confirmation/questions"
            element={<Questions></Questions>}
          />
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
