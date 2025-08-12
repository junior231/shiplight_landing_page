import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  AiOutlineThunderbolt,
  AiOutlineBarChart,
  AiOutlineLock,
} from "react-icons/ai";
import type { IconType } from "react-icons";
import { motion, type Transition } from "framer-motion";

const { Title, Paragraph } = Typography;

type Feature = {
  icon: IconType | any;
  title: string;
  desc: string;
};

type Props = {
    isDark?: any
}

const FEATURES: Feature[] = [
  {
    icon: AiOutlineThunderbolt,
    title: "Instant feedback loops",
    desc: "Collect ideas, votes, and comments—no setup. Prioritize what matters.",
  },
  {
    icon: AiOutlineBarChart,
    title: "Usage snapshots",
    desc: "Simple charts for adoption at a glance. No data team required.",
  },
  {
    icon: AiOutlineLock,
    title: "Zero-config auth",
    desc: "Magic links out of the box. Invite your team and get moving.",
  },
];

// Framer Motion helpers
const itemTransition = (i: number): Transition => ({
  type: "tween",
  duration: 0.35,
  delay: i * 0.06,
  ease: [0.215, 0.61, 0.355, 1],
});

export default function Features({isDark}: Props) {
  return (
    <section id="features" className="section" aria-label="Features">
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={2} style={{ marginBottom: 4 }}>
          What you get
        </Title>
        <Paragraph className={isDark ? "lede-dark" : "lede"} style={{ margin: 0 }}>
          Everything you need to test a product direction in days, not months.
        </Paragraph>
      </div>

      <Row gutter={[{ xs: 12, sm: 16, md: 20 } as any, 20]} justify="center">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <Col key={f.title} xs={24} sm={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={itemTransition(i)}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Card hoverable>
                  <div
                    className="card-head-row"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <Icon size={26} aria-hidden />
                    <strong>{f.title}</strong>
                  </div>
                  <Paragraph style={{ margin: 0 }}>{f.desc}</Paragraph>
                </Card>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
