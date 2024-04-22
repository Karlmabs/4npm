import "../styles/globals.scss";
import ContentLayout from "../shared/layout-components/layout/content-layout";
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import Landinglayout from "@/shared/layout-components/layout/landing-layout";
import { AuthProvider } from "@/shared/context/AuthContext";

const layouts = {
  Contentlayout: ContentLayout,
  Landinglayout: Landinglayout,
  Authenticationlayout: Authenticationlayout,
};

function MyApp({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] ||
    ((pageProps) => (
      <AuthProvider>
        <Component>{pageProps}</Component>
      </AuthProvider>
    ));

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
