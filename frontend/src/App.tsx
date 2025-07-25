import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import AllEvents from "./components/AllEvents";
import Login from "./components/Login";
import Event from "./components/Event";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="w-full min-h-svh bg-background text-ink font-poppins flex flex-col items-center justify-between gap-y-8">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/events/:id" element={<Event />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
              <Route path="/manage/:slug" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
