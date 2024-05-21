import { Box, Flex, IconButton, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react";
import { FaSearch, FaUserCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Link to="/">
          <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        </Link>
        <Spacer />
        <InputGroup maxW="600px" mx={4}>
          <Input placeholder="Search" bg="white" color="black" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <Link to="/profile">
          <IconButton aria-label="Profile" icon={<FaUserCircle />} variant="ghost" color="white" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;