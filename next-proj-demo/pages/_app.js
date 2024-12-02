import { AuthProvider, useAuth } from "@/component/auth/context/Authcontex";
import Navbar from "@/component/navbar";
import Authpage from "@/pages/authpage";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <AuthContent Component={Component} pageProps={pageProps} />
    </AuthProvider>
  );
};

const AuthContent = ({ Component, pageProps }) => {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Authpage />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
