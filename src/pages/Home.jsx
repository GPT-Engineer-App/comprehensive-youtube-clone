import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const videos = [
    { id: 1, title: "Video 1", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Video 2", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Video 3", thumbnail: "https://via.placeholder.com/150" },
    { id: 4, title: "Video 4", thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {videos.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={video.thumbnail} alt={video.title} />
              <Box p={4}>
                <Text fontWeight="bold">{video.title}</Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;