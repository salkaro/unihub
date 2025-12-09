"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Footer from "@/components/ui/footer";
import PublicNavbar from "@/components/ui/public-navbar";

export default function GuidesPage() {
  const guides = [
    {
      color: "teal",
      title: "Getting Started",
      description:
        "Learn how to navigate UniHub and access your question bank. Set up your account and customize your learning experience.",
    },
    {
      color: "blue",
      title: "Study Strategies",
      description:
        "Effective techniques for using practice questions to master your subjects. Tips for revision and exam preparation.",
    },
    {
      color: "purple",
      title: "Using the Question Bank",
      description:
        "How to filter questions by topic, difficulty, and module. Track your progress and identify areas for improvement.",
    },
    {
      color: "teal",
      title: "Maximizing Your Results",
      description:
        "Best practices for consistent practice, time management, and turning practice into performance.",
    },
  ];

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
      <PublicNavbar />

      <Box flex="1" py={{ base: 12, md: 16 }}>
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            {/* Header Section */}
            <Box textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="extrabold"
                mb={4}
                bgGradient="linear(to-r, teal.500, blue.500, purple.600)"
                bgClip="text"
              >
                Student Guides
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl" mx="auto" lineHeight="tall">
                Everything you need to know to make the most of UniHub and excel in your studies.
              </Text>
            </Box>

            {/* Guides Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
              {guides.map((guide, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={8}
                  borderRadius="2xl"
                  boxShadow="lg"
                  border="2px"
                  borderColor="gray.200"
                  position="relative"
                  transition="all 0.3s"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    bgGradient: `linear(to-r, ${guide.color}.400, ${guide.color}.600)`,
                    borderTopRadius: "2xl",
                  }}
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "2xl",
                    borderColor: `${guide.color}.400`,
                  }}
                >
                  <VStack align="start" spacing={4}>
                    <Heading as="h3" size="lg" color="gray.800" fontWeight="bold">
                      {guide.title}
                    </Heading>
                    <Text color="gray.600" lineHeight="tall">
                      {guide.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* Additional Tips Section */}
            <Box
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px"
              borderColor="gray.200"
            >
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="lg" color="gray.800" fontWeight="bold">
                  Pro Tips for Success
                </Heading>
                <VStack align="start" spacing={3}>
                  <Text color="gray.600" lineHeight="tall">
                    • Practice regularly - consistency is more important than marathon sessions
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • Review incorrect answers to understand your mistakes
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • Start with easier questions to build confidence, then progress to harder ones
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • Use the question bank alongside your lecture notes for comprehensive revision
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
