import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.png" alt="Event Management" />
        </Box>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg">
          View Events
        </Button>
        <Button leftIcon={<FaPlus />} colorScheme="blue" size="lg">
          Create New Event
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;