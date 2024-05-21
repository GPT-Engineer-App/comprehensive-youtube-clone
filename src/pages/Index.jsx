import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the YouTube Clone</Text>
        <Text>Explore videos, profiles, and more.</Text>
        <Link to="/home">
          <Button colorScheme="blue">Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;