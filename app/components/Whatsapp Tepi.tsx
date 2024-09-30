import { Box, Heading, Image } from '@chakra-ui/react';

const WhatsappTepiPayment: React.FC = () => {
  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md" textAlign="center">
      <Heading as="h3" size="md">Whatsapp Tepi</Heading>
      <Image src="/assets/qr-code-sample.png" alt="QR Code" mx="auto" mt={4} />
    </Box>
  );
};

export default WhatsappTepiPayment;
