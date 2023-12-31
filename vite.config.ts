import React from 'react';

import  PluginReactSWC from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ PluginReactSWC()],
});
