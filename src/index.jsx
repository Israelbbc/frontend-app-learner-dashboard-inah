/* eslint-disable import/prefer-default-export */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route, Navigate, Routes,
} from 'react-router-dom';

import {
  AppProvider,
  ErrorPage,
  PageWrap,
} from '@edx/frontend-platform/react';
import {
  APP_READY,
  APP_INIT_ERROR,
  initialize,
  subscribe,
  mergeConfig,
} from '@edx/frontend-platform';

// 1. Importar las constantes correctas del framework de Open edX
import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ContextProviders from 'data/context';
import { configuration } from './config';

import messages from './i18n';

import App from './App';

// 2. Importar tus componentes personalizados
import FooterInstitucional from './components/FooterInstitucional';
import HeaderInstitucional from './components/HeaderInstitucional';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60_000,
    },
  },
});

// 3. Declarar los componentes inyectándolos directamente en la configuración
configuration.pluginSlots = {
  ...configuration.pluginSlots,
  
  // Inyección del Header para Escritorio
  desktop_header_slot: {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'institucional_header_widget_desktop',
          type: DIRECT_PLUGIN,
          RenderWidget: HeaderInstitucional,
        },
      },
    ],
  },

  // Inyección del Header para Móviles
  mobile_header_slot: {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'institucional_header_widget_mobile',
          type: DIRECT_PLUGIN,
          RenderWidget: HeaderInstitucional,
        },
      },
    ],
  },

  // Inyección del Footer
  footer_slot: {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'institucional_footer_widget',
          type: DIRECT_PLUGIN,
          RenderWidget: FooterInstitucional,
        },
      },
    ],
  },
};

subscribe(APP_READY, () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <AppProvider>
        <ContextProviders>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<PageWrap><App /></PageWrap>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </QueryClientProvider>
        </ContextProviders>
      </AppProvider>
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <ErrorPage message={error.message} />
    </StrictMode>,
  );
});

export const appName = 'LearnerHomeAppConfig';

initialize({
  handlers: {
    config: () => {
      mergeConfig(configuration, appName);
    },
  },
  messages,
  requireAuthenticatedUser: true,
});

console.log('¡Hola desde mi entorno local Israel!');
