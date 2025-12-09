"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import PublicNavbar from "@/components/ui/public-navbar";

export default function HelpPage() {
  const helpTopics = [
    {
      color: "teal",
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about using UniHub, accessing questions, and managing your account.",
    },
    {
      color: "blue",
      title: "User Guides",
      description:
        "Step-by-step guides to help you get the most out of UniHub's features and tools.",
      link: "/guides",
    },
    {
      color: "purple",
      title: "Technical Support",
      description:
        "Experiencing technical issues? Our team is here to help resolve any problems you encounter.",
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
                Help Centre
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl" mx="auto" lineHeight="tall">
                We're here to help you succeed. Get support, find answers, and learn how to make the most of UniHub.
              </Text>
            </Box>

            {/* Contact Card - Featured */}
            <Box
              bgGradient="linear(to-r, teal.500, blue.500, purple.600)"
              p={12}
              borderRadius="2xl"
              boxShadow="xl"
              color="white"
            >
              <VStack spacing={6} textAlign="center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                  Get in Touch
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} maxW="xl" opacity={0.95} fontWeight="medium">
                  Have a question or need assistance? Our support team is ready to help.
                  Send us an email and we'll get back to you as soon as possible.
                </Text>
                <ChakraLink href="mailto:contact@salkaro.com" _hover={{ textDecoration: "none" }}>
                  <Button
                    size="lg"
                    fontSize="lg"
                    px={8}
                    py={7}
                    bg="white"
                    color="teal.600"
                    fontWeight="bold"
                    borderRadius="xl"
                    boxShadow="xl"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "2xl",
                      bg: "gray.50",
                    }}
                    transition="all 0.3s"
                  >
                    contact@salkaro.com
                  </Button>
                </ChakraLink>
              </VStack>
            </Box>

            {/* Help Topics */}
            <Box>
              <Heading as="h2" size="lg" color="gray.800" fontWeight="bold" mb={6} textAlign="center">
                How Can We Help?
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
                {helpTopics.map((topic, index) => (
                  <Box
                    key={index}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="md"
                    border="1px"
                    borderColor="gray.200"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl",
                      borderColor: `${topic.color}.300`,
                    }}
                  >
                    <VStack align="start" spacing={3} h="100%">
                      <Heading as="h3" size="md" color="gray.800" fontWeight="bold">
                        {topic.title}
                      </Heading>
                      <Text color="gray.600" lineHeight="tall" flex="1">
                        {topic.description}
                      </Text>
                      {topic.link && (
                        <Link href={topic.link} passHref legacyBehavior>
                          <ChakraLink
                            color={`${topic.color}.600`}
                            fontWeight="semibold"
                            _hover={{ color: `${topic.color}.700` }}
                          >
                            Learn more →
                          </ChakraLink>
                        </Link>
                      )}
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Additional Support Info */}
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
                  Response Times
                </Heading>
                <Text color="gray.600" lineHeight="tall">
                  We aim to respond to all inquiries within 24-48 hours during business days.
                  For urgent technical issues, please mention "URGENT" in your email subject line.
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
