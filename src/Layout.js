import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}