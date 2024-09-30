import { Box, Heading, Text } from '@chakra-ui/react';

interface RumbleProps {
  title: string;
  participants: number;
  status: string;
}

const LatestRumble: React.FC<RumbleProps> = ({ title = "Rumble #12", participants = 10, status = "In Progress" }) => {
  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md" w="full">
      <Heading as="h3" size="md">{title}</Heading>
      <Text>Participants: {participants}</Text>
      <Text>Status: {status}</Text>
    </Box>
  );
};

export default LatestRumble;
