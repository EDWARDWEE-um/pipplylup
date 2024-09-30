// /app/layout.tsx

import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme'; // Import your custom theme

export const metadata = {
  title: 'My Chakra UI App',
  description: 'A Next.js App Router project with Chakra UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
