import { Box, Heading, List, ListItem } from '@chakra-ui/react';

interface RumbleHistoryItem {
  id: number;
  title: string;
  winner: string;
}

const RumbleHistory: React.FC = () => {
  const mockHistory: RumbleHistoryItem[] = [
    { id: 1, title: "Rumble #11", winner: "Player 1" },
    { id: 2, title: "Rumble #10", winner: "Player 2" },
  ];

  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md" w="full">
      <Heading as="h3" size="md">Rumble History</Heading>
      <List>
        {mockHistory.map((rumble) => (
          <ListItem key={rumble.id}>
            {rumble.title} - Winner: {rumble.winner}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RumbleHistory;
