import { Button, Space, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

type HeroProps =  {
    isDark: any;
}

export default function Hero({isDark}: HeroProps) {
  return (
    <section id="hero" className="section" aria-label="Hero">
      <div style={{ textAlign: 'center' }}>
        <Paragraph className={isDark ? "lede-dark" : "lede"} style={{ marginBottom: 8 }}>
          Launch faster. Validate smarter.
        </Paragraph>

        <Title level={1} className="h1" style={{ margin: '12px 0' }}>
          A lightweight tool to ship features &amp; learn quickly
        </Title>

        <Paragraph className={isDark ? "lede-dark" : "lede"} style={{ marginBottom: 24 }}>
          Clean UI, clear insights, no enterprise bloat. Built for small teams that move fast.
        </Paragraph>

        <Space size="middle" wrap align="center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Button type="primary" size="large" href="#pricing" aria-label="Get Started">
              Get Started
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Button size="large" href="https://github.com/" target="_blank" rel="noreferrer">
              View GitHub
            </Button>
          </motion.div>
        </Space>
      </div>
    </section>
  );
}
