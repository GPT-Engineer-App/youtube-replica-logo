import { Box, Container, Flex, Image, Input, IconButton, VStack, Text } from "@chakra-ui/react";
import { FaSearch, FaVideo, FaTh, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" align="center" justify="space-between" py={4} borderBottom="1px" borderColor="gray.200">
        <Flex align="center">
          <Image src="/youtube-logo.png" alt="YouTube Logo" boxSize="40px" />
          <Text fontSize="2xl" fontWeight="bold" ml={2}>YouTube</Text>
        </Flex>
        <Flex flex="1" mx={4}>
          <Input placeholder="Search" />
          <IconButton aria-label="Search" icon={<FaSearch />} ml={2} />
        </Flex>
        <Flex align="center">
          <IconButton aria-label="Create" icon={<FaVideo />} mx={2} />
          <IconButton aria-label="Apps" icon={<FaTh />} mx={2} />
          <IconButton aria-label="Notifications" icon={<FaBell />} mx={2} />
          <IconButton aria-label="User" icon={<FaUserCircle />} mx={2} />
        </Flex>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;