// app/components/Slot.tsx

import { Box, Text } from '@chakra-ui/react';

interface SlotProps {
  number: number;
  isWinner: boolean;
}

const Slot: React.FC<SlotProps> = ({ number, isWinner }) => {
  return (
    <Box
      width="60px"
      height="60px"
      borderWidth={2}
      borderColor={isWinner ? 'green.500' : 'gray.300'}
      borderRadius="md"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.2s"
      bg={isWinner ? 'green.100' : 'white'}
    >
      <Text fontSize="xl">{number}</Text>
    </Box>
  );
};

export default Slot;
