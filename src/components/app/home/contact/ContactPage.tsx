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

export default function ContactPage() {
  const contactInfo = [
    {
      color: "teal",
      title: "Email Us",
      description: "For general inquiries, support, and feedback",
      detail: "contact@salkaro.com",
      link: "mailto:contact@salkaro.com",
    },
    {
      color: "blue",
      title: "Response Time",
      description: "We typically respond within",
      detail: "24-48 hours",
    },
    {
      color: "purple",
      title: "Feedback",
      description: "We'd love to hear your suggestions",
      detail: "Send us your ideas",
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
                Contact Us
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl" mx="auto" lineHeight="tall">
                Have questions, feedback, or need support? We'd love to hear from you.
              </Text>
            </Box>

            {/* Main Contact Card */}
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
                  Whether you have a question about features, need technical support, or just want to say hello,
                  our team is ready to answer all your questions.
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

            {/* Contact Info Grid */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
              {contactInfo.map((info, index) => (
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
                    borderColor: `${info.color}.300`,
                  }}
                >
                  <VStack align="center" spacing={4} textAlign="center">
                    <Heading as="h3" size="md" color="gray.800" fontWeight="bold">
                      {info.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                      {info.description}
                    </Text>
                    {info.link ? (
                      <ChakraLink
                        href={info.link}
                        color={`${info.color}.600`}
                        fontWeight="bold"
                        fontSize="lg"
                        _hover={{ color: `${info.color}.700` }}
                      >
                        {info.detail}
                      </ChakraLink>
                    ) : (
                      <Text color={`${info.color}.600`} fontWeight="bold" fontSize="lg">
                        {info.detail}
                      </Text>
                    )}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* What to Include Section */}
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
                  When Contacting Us, Please Include:
                </Heading>
                <VStack align="start" spacing={3}>
                  <Text color="gray.600" lineHeight="tall">
                    • Your name and university (if applicable)
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • A clear subject line describing your inquiry
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • Detailed description of your question or issue
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • Any relevant screenshots or error messages (for technical issues)
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    • Your preferred response method
                  </Text>
                </VStack>
              </VStack>
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
                  About Salkaro
                </Heading>
                <Text color="gray.600" lineHeight="tall">
                  UniHub is developed and maintained by Salkaro, a team dedicated to creating
                  educational tools that help students succeed. We're committed to providing
                  excellent support and continuously improving our platform based on your feedback.
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
