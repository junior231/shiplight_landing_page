// src/components/Pricing.tsx
import { Badge, Button, Card, Col, Row, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

type Plan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string; type?: 'primary' | 'default' };
  highlight?: boolean;
};

type PriceProps = {
  isDark?: any;
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    features: ['1 project', 'Basic analytics', 'Email support'],
    cta: { label: 'Start Free', href: '#pricing' },
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/mo',
    features: ['Unlimited projects', 'Advanced insights', 'Priority support'],
    cta: { label: 'Upgrade', href: '#pricing', type: 'primary' },
    highlight: true,
  },
  {
    name: 'Business',
    price: '$29',
    period: '/mo',
    features: ['SSO & roles', 'Exports & webhooks', 'SLA support'],
    cta: { label: 'Contact Sales', href: '#pricing' },
  },
];

export default function Pricing({isDark}: PriceProps) {
  return (
    <section id="pricing" className="section" aria-label="Pricing">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ marginBottom: 4 }}>Simple pricing</Title>
        <Paragraph className={isDark ? "lede-dark" : "lede"} style={{ margin: 0 }}>
          Start free. Scale when you’re ready.
        </Paragraph>
      </div>

      <Row gutter={[20, 20]} justify="center">
        {PLANS.map((p, idx) => (
          <Col key={p.name} xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Badge.Ribbon text="Most Popular" color="#2563eb" style={{ display: p.highlight ? 'block' : 'none' }}>
                <Card
                  variant="outlined"
                  hoverable
                  style={p.highlight ? { boxShadow: '0 0 0 1px #2563eb inset' } : undefined}
                  actions={[
                    <Button
                      key="cta"
                      type={p.cta.type ?? 'default'}
                      block
                      size="large"
                      href={p.cta.href}
                    >
                      {p.cta.label}
                    </Button>,
                  ]}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Text strong>{p.name}</Text>
                    <div>
                      <Text strong style={{ fontSize: 24 }}>{p.price}</Text>
                      <Text style={{ opacity: 0.8, marginLeft: 2 }}>{p.period}</Text>
                    </div>
                  </div>

                  <ul style={{ margin: '12px 0 0 16px' }}>
                    {p.features.map(f => <li key={f} style={{ marginBottom: 8 }}>{f}</li>)}
                  </ul>
                </Card>
              </Badge.Ribbon>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
