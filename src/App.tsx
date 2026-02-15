import DashboardLayout from "./components/layout/DashboardLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { sidebarNav } from "./constants";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import Reviews from "./pages/Reviews";
import Discounts from "./pages/Discounts";
import Analytics from "./pages/Analytics";
import Marketing from "./pages/Marketing";
import Settings from "./pages/Settings";

const pageComponents: Record<string, React.ComponentType> = {
  "/dashboard": Dashboard,
  "/orders": Orders,
  "/products": Products,
  "/categories": Categories,
  "/customers": Customers,
  "/reviews": Reviews,
  "/discounts": Discounts,
  "/analytics": Analytics,
  "/marketing": Marketing,
  "/settings": Settings,
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {sidebarNav.map((item) => {
          const PageComponent = pageComponents[item.path];
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                <DashboardLayout>
                  <PageComponent />
                </DashboardLayout>
              }
            />
          );
        })}

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
