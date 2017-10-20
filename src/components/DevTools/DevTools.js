import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-w" changeMonitorKey="ctrl-m" defaultSize={0.1} defaultPosition="right">
    <ChartMonitor />
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);
