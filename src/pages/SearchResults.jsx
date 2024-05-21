import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const results = [
    { id: 1, title: "Search Result 1", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Search Result 2", thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Search Results for "{query}"</Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {results.map((result) => (
          <Link to={`/video/${result.id}`} key={result.id}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={result.thumbnail} alt={result.title} />
              <Box p={4}>
                <Text fontWeight="bold">{result.title}</Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SearchResults;