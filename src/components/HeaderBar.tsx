import React, { useState } from 'react';
import { Layout, Button, Space, Typography, Drawer, Switch, Grid, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

type Props = {
  dark: boolean;
  onToggle: () => void;
};

export default function HeaderBar({ dark, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint(); // md and up = desktop

  const close = () => setOpen(false);

  const menuItems = [
    { key: 'features', label: <a href="#features" onClick={close}>Features</a> },
    { key: 'pricing',  label: <a href="#pricing" onClick={close}>Pricing</a>  },
  ];

  return (
    <Header className="site-header">
      <div className="header-inner">
        {/* Logo (kept to a single line) */}
        <Text className="logo" title="Shiplight">Shiplight</Text>

        {/* Desktop nav */}
        {screens.md ? (
          <Space size="large" align="center" className="nav-desktop">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <Button type="primary" href="#pricing">Get Started</Button>
            <Space size="small" align="center">
              <span className="dark-label">Dark</span>
              <Switch checked={dark} onChange={onToggle} aria-label="Toggle dark mode" />
            </Space>
          </Space>
        ) : (
          // Mobile hamburger (switch is *not* shown here)
          <Button
            aria-label="Open menu"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      {/* Mobile drawer menu */}
      <Drawer
        open={open}
        onClose={close}
        title="Menu"
        placement="right"
        width={280}
      >
        <Menu mode="inline" items={menuItems} selectable={false} />
        <div style={{ height: 12 }} />
        <Button type="primary" block href="#pricing" onClick={close}>
          Get Started
        </Button>
        <div style={{ height: 16 }} />
        <div className="drawer-switch">
          <span>Dark mode</span>
          <Switch checked={dark} onChange={() => { onToggle(); }} aria-label="Toggle dark mode" />
        </div>
      </Drawer>
    </Header>
  );
}
