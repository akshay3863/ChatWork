import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
const Login = lazy(() => import("./Screen/Login"));
const Registration = lazy(() => import("./Screen/Registration"));
const Analytics = lazy(() => import("./Screen/Analytics/Analytics"));
const Billing = lazy(() => import("./Screen/Billing/Billing"));
const BotManager = lazy(() => import("./Screen/BotManager/BotManager"));
const Conversations = lazy(() => import("./Screen/Conversations/Conversation"));
const Dashboard = lazy(() => import("./Screen/Dashboard/Dashboard"));
const HelpCenter = lazy(() => import("./Screen/HelpCenter/HelpCenter"));
const Settings = lazy(() => import("./Screen/Settings/Settings"));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loader....</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/analytics"
          element={<PrivateRoute component={Analytics} />}
        />
        <Route
          path="/conversations"
          element={<PrivateRoute component={Conversations} />}
        />
        <Route
          path="/botmanager"
          element={<PrivateRoute component={BotManager} />}
        />
        <Route
          path="/settings"
          element={<PrivateRoute component={Settings} />}
        />
        <Route path="/billing" element={<PrivateRoute component={Billing} />} />
        <Route
          path="/helpcenter"
          element={<PrivateRoute component={HelpCenter} />}
          S
        />
      </Routes>
    </React.Suspense>
  );
};

export default App;
