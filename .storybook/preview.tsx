import React from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { DecoratorFn } from '@storybook/react';

setLogger({
  error: () => {},
  log: (...params: any) => console.log(...params),
  warn: (...params: any) => console.warn(...params),
});

initialize({ onUnhandledRequest: 'bypass' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  mswDecorator as DecoratorFn,
  (story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    );
  },
];
