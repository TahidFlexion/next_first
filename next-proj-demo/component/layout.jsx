import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-100 p-4 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
