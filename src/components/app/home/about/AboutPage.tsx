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

export default function AboutPage() {
  const values = [
    {
      color: "teal",
      title: "Student-Focused",
      description:
        "Everything we build is designed with students in mind. Your success is our mission.",
    },
    {
      color: "blue",
      title: "Quality Content",
      description:
        "Carefully curated questions and resources that align with your university curriculum.",
    },
    {
      color: "purple",
      title: "Accessible Learning",
      description:
        "Making quality exam preparation accessible to all students, anytime, anywhere.",
    },
    {
      color: "teal",
      title: "Community Driven",
      description:
        "Built by students, for students. We listen to your feedback and continuously improve.",
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
                About UniHub
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl" mx="auto" lineHeight="tall">
                Your trusted platform for university exam preparation and practice questions.
              </Text>
            </Box>

            {/* Mission Section */}
            <Box
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px"
              borderColor="gray.200"
            >
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg" color="gray.800" fontWeight="bold">
                  Our Mission
                </Heading>
                <Text color="gray.600" fontSize="md" lineHeight="tall">
                  UniHub was created to help university students excel in their studies by providing
                  access to high-quality practice questions and exam preparation resources. We understand
                  the challenges of university-level coursework, and we're here to support your academic
                  journey with tools that make studying more effective and efficient.
                </Text>
                <Text color="gray.600" fontSize="md" lineHeight="tall">
                  Our question bank covers key subjects including Physics, Mathematics, and Astronomy,
                  with content carefully aligned to university curricula. Whether you're preparing for
                  mid-terms, finals, or simply want to reinforce your understanding, UniHub provides
                  the practice you need to succeed.
                </Text>
              </VStack>
            </Box>

            {/* Values Section */}
            <Box>
              <Heading as="h2" size="lg" color="gray.800" fontWeight="bold" mb={6} textAlign="center">
                What Drives Us
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
                {values.map((value, index) => (
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
                      bgGradient: `linear(to-r, ${value.color}.400, ${value.color}.600)`,
                      borderTopRadius: "2xl",
                    }}
                    _hover={{
                      transform: "translateY(-8px)",
                      boxShadow: "2xl",
                      borderColor: `${value.color}.400`,
                    }}
                  >
                    <VStack align="start" spacing={4}>
                      <Heading as="h3" size="lg" color="gray.800" fontWeight="bold">
                        {value.title}
                      </Heading>
                      <Text color="gray.600" lineHeight="tall">
                        {value.description}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Additional Info */}
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
                  Join Our Community
                </Heading>
                <Text color="gray.600" lineHeight="tall">
                  UniHub is more than just a question bank—it's a community of students committed
                  to academic excellence. Join thousands of students who trust UniHub for their
                  exam preparation needs.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
