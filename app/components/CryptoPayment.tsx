import { Box, Heading, Text } from '@chakra-ui/react';

const CryptoPayment: React.FC = () => {
  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md" textAlign="center">
      <Heading as="h3" size="md">Crypto Payment</Heading>
      <Text>Send crypto to: 0x123...abc</Text>
    </Box>
  );
};

export default CryptoPayment;
