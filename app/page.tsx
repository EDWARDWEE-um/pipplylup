import { Box, VStack, Grid, Heading } from '@chakra-ui/react';
import LatestRumble from './components/LatestRumble';
import RumbleHistory from './components/RumbleHistory';
import QRPayment from './components/QRPayment';
import CryptoPayment from './components/CryptoPayment';
import TikTokEmbed from './components/TikTokEmbed';
import WhatsappTepiPayment from './components/Whatsapp Tepi';

const Home = () => {
  return (
    <Box p={4} bg="gray.100" minH="100vh">
      <VStack spacing={8}>
        <Heading as="h1" size="lg">PiplupJuJuTCG</Heading>

        <LatestRumble title={''} participants={0} status={''} />

        {/* Rumble History */}
        <RumbleHistory />

        {/* Payment Methods */}
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <QRPayment />
          <CryptoPayment />
          <WhatsappTepiPayment />
        </Grid>


        {/* TikTok Videos */}
        <TikTokEmbed />
      </VStack>
    </Box>
  );
};

export default Home;
