"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/My Certification";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Badge from "./components/Badge";

export default function Home() {
  return (
   <>
   <Navbar />
   <Header />
   <About />
   <Services />
   <Badge />
   <Work />
   <Contact />
   <Footer />
   </>
  );
}
