import { Box, Text, Avatar, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4} textAlign="center">
      <Avatar size="2xl" name="User Name" src="https://via.placeholder.com/150" />
      <VStack spacing={4} mt={4}>
        <Text fontSize="2xl" fontWeight="bold">User Name</Text>
        <Text>Email: user@example.com</Text>
        <Text>Joined: January 1, 2020</Text>
      </VStack>
    </Box>
  );
};

export default Profile;