import { Box, Heading, Image } from '@chakra-ui/react';

const QRPayment: React.FC = () => {
  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md" textAlign="center">
      <Heading as="h3" size="md">Tng QR Payment</Heading>
      <Image src="/assets/qr-code-sample.png" alt="QR Code" mx="auto" mt={4} />
    </Box>
  );
};

export default QRPayment;
