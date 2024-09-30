import { Box, Heading } from '@chakra-ui/react';

const TikTokEmbed: React.FC = () => {
  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md" w="full">
      <Heading as="h3" size="md">Latest TikTok Videos</Heading>
      <Box mt={4}>
        <iframe
          src="https://www.tiktok.com/embed/video/1234567890"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.tiktok.com/embed/video/0987654321"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default TikTokEmbed;
