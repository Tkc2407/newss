import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Common/Layout";
import MeetUs from "./components/MeetUs";
import DashboardLayout from "./components/Admin/DashboardLayout/DashboardLayout";
import ServicesLayout from "./components/Services/ServicesLayout";
import LandingPage from "./components/Home/LandingPage";
import Products from "./components/Products";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Wallet from "./components/Admin/Wallet/index";
import { useEffect, useState } from "react";
import LoginPhone from "./components/Signupsignin/Login/LoginPhone";
import LoginEmail from "./components/Signupsignin/Login/LoginEmail";
import Otp from "./components/Signupsignin/Login/Otp";
import Signup from "./components/Signupsignin/Signup";


function App() {
  // const [products, setProducts] = useState([]);
  const demoProducts = [
    {
      name: "Gold Chain",
      category: "Jewelry",
      subCategory: "Chains",
      price: 299.99,
      quantity: 10,
      status: "Available",
    },
    {
      name: "Silver Beads",
      category: "Jewelry",
      subCategory: "Beads",
      price: 59.99,
      quantity: 25,
      status: "Available",
    },
    {
      name: "Diamond Ring",
      category: "Jewelry",
      subCategory: "Rings",
      price: 1299.99,
      quantity: 5,
      status: "Out of Stock",
    },
    {
      name: "Gold Necklace",
      category: "Jewelry",
      subCategory: "Necklaces",
      price: 499.99,
      quantity: 8,
      status: "Available",
    },
    {
      name: "Platinum Earrings",
      category: "Jewelry",
      subCategory: "Earrings",
      price: 799.99,
      quantity: 12,
      status: "Available",
    },
  ];


  const editProduct = (index) => {
    // Implement edit functionality here
    console.log("Edit product at index:", index);
  };

  const deleteProduct = (index) => {
    // Implement delete functionality here
    console.log("Delete product at index:", index);
  };

  return (
    <>
      <BrowserRouter>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/services"
            element={
              <ServicesLayout>
                <Services />
              </ServicesLayout>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/client/dashboard"
            element={
              <DashboardLayout>
                <Wallet />
              </DashboardLayout>
            }
          />
          <Route path="/meet-us" element={<MeetUs />} />
          {/* <Route
            path="/admin/user-management"
            element={
              <DashboardLayout>
                <UserManagement />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/kyc"
            element={
              <DashboardLayout>
                <KYC />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/inr-transaction"
            element={
              <DashboardLayout>
                <INRTransactionHistory />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/gold-transaction"
            element={
              <DashboardLayout>
                <GoldTransactionHistory />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/order-list"
            element={
              <DashboardLayout>
                <OrderList />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin-users"
            element={
              <DashboardLayout>
                <AdminUserModule />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/custom-designs"
            element={
              <DashboardLayout>
                <CustomDesignModule />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/product-form"
            element={
              <DashboardLayout>
                <ProductForm />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/products"
            element={
              <DashboardLayout>
                <ProductTable />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/home"
            element={
              <DashboardLayout>
                <HomepageEditor />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/category-form"
            element={
              <DashboardLayout>
                <CategoryForm />
              </DashboardLayout>
            }
          />
          <Route
            path="/admin/category"
            element={
              <DashboardLayout>
                <CategoryTable />
              </DashboardLayout>
            }
          /> */}
          <Route path="/loginphone" element={<LoginPhone />} />
          <Route path="/loginemail" element={<LoginEmail />} />
          <Route path="loginphone/otp" element={<Otp />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

