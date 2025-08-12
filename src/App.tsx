import { useEffect, useState } from "react";
import { ConfigProvider, Layout } from "antd";
import { makeTheme } from "./theme";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FooterBar from "./components/FooterBar";

const { Content } = Layout;

export default function App() {
  const [dark, setDark] = useState(false);

  // read persisted preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  return (
    <ConfigProvider theme={makeTheme(dark)}>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderBar dark={dark} onToggle={() => setDark((v) => !v)} />
        <Content>
          <Hero isDark={dark} />
          <Features isDark={dark}/>
          <Pricing isDark={dark} />
        </Content>
        <FooterBar />
      </Layout>
    </ConfigProvider>
  );
}
