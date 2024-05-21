import { Box, AspectRatio, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  return (
    <Box p={4}>
      <AspectRatio maxW="100%" ratio={16 / 9}>
        <iframe
          title="Video Player"
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
        />
      </AspectRatio>
      <Box mt={4}>
        <Text fontSize="2xl" fontWeight="bold">Video Title {id}</Text>
        <Text mt={2}>Video description goes here...</Text>
      </Box>
    </Box>
  );
};

export default Video;