import type { Preview } from '@storybook/react';
import React from 'react';
import '../app/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      options: {
        white: {
          name: 'white',
          value: '#ffffff',
        }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'white'
    }
  }
};

export default preview;
