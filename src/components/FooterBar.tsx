import { Layout } from 'antd';
const { Footer } = Layout;

export default function FooterBar() {
  return (
    <Footer style={{ textAlign:'center' }}>
      © {new Date().getFullYear()} Collins Ilo· <a href="#hero">Back to top</a>
    </Footer>
  );
}
