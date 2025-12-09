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
import Footer from "@/components/ui/footer";
import PublicNavbar from "@/components/ui/public-navbar";

export default function PrivacyPage() {
  // TODO: Replace this URL with your actual privacy policy URL
  const PRIVACY_POLICY_URL = "https://salkaro.com/privacy-policy";

  const privacyPoints = [
    {
      color: "teal",
      title: "Data Protection",
      description:
        "We use industry-standard security measures to protect your personal information and ensure it remains confidential and secure.",
    },
    {
      color: "blue",
      title: "Transparency",
      description:
        "We believe in being transparent about what data we collect, how we use it, and who we share it with. Our privacy policy provides complete details.",
    },
    {
      color: "purple",
      title: "Your Rights",
      description:
        "You have the right to access, correct, or delete your personal information. Our privacy policy explains how to exercise these rights.",
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
                Privacy Policy
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl" mx="auto" lineHeight="tall">
                Your privacy and data security are our top priorities. Learn how we protect your information.
              </Text>
            </Box>

            {/* Main Privacy Card */}
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                  View Our Privacy Policy
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} maxW="xl" opacity={0.95} fontWeight="medium">
                  To learn about how we collect, use, and protect your personal information,
                  please review our complete privacy policy document.
                </Text>
                <ChakraLink
                  href={PRIVACY_POLICY_URL}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
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
                    Read Privacy Policy →
                  </Button>
                </ChakraLink>
              </VStack>
            </Box>

            {/* Key Points */}
            <Box>
              <Heading as="h2" size="lg" color="gray.800" fontWeight="bold" mb={6} textAlign="center">
                Our Commitment to Privacy
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
                {privacyPoints.map((point, index) => (
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
                      borderColor: `${point.color}.300`,
                    }}
                  >
                    <VStack align="start" spacing={3}>
                      <Heading as="h3" size="md" color="gray.800" fontWeight="bold">
                        {point.title}
                      </Heading>
                      <Text color="gray.600" lineHeight="tall">
                        {point.description}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Contact Section */}
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
                  Questions About Privacy?
                </Heading>
                <Text color="gray.600" lineHeight="tall">
                  If you have any questions or concerns about our privacy practices, please don't
                  hesitate to contact us at{" "}
                  <ChakraLink
                    href="mailto:contact@salkaro.com"
                    color="teal.600"
                    fontWeight="semibold"
                    _hover={{ color: "teal.700" }}
                  >
                    contact@salkaro.com
                  </ChakraLink>
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
