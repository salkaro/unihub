"use client";

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Link as ChakraLink, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Box as="footer" bg="gray.900" color="white" mt={24}>
            <Container maxW="6xl" py={12}>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
                    {/* Brand Section */}
                    <VStack align={{ base: "center", md: "start" }} spacing={4}>
                        <Heading size="lg" fontWeight="bold">
                            UniHub
                        </Heading>
                        <Text color="gray.400" fontSize="sm">
                            Your comprehensive question bank for university studies.
                        </Text>
                    </VStack>

                    {/* Product Links */}
                    <VStack align={{ base: "center", md: "start" }} spacing={3}>
                        <Heading size="sm" mb={2} fontWeight="semibold">
                            Product
                        </Heading>
                        <ChakraLink
                            as={Link}
                            href="/bank"
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Question Bank
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            href="/dashboard"
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Dashboard
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            href="/login"
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Login
                        </ChakraLink>
                    </VStack>

                    {/* Resources Links */}
                    <VStack align={{ base: "center", md: "start" }} spacing={3}>
                        <Heading size="sm" mb={2} fontWeight="semibold">
                            Resources
                        </Heading>
                        <ChakraLink
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Documentation
                        </ChakraLink>
                        <ChakraLink
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Guides
                        </ChakraLink>
                        <ChakraLink
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Help Center
                        </ChakraLink>
                    </VStack>

                    {/* Company Links */}
                    <VStack align={{ base: "center", md: "start" }} spacing={3}>
                        <Heading size="sm" mb={2} fontWeight="semibold">
                            Company
                        </Heading>
                        <ChakraLink
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            About
                        </ChakraLink>
                        <ChakraLink
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Contact
                        </ChakraLink>
                        <ChakraLink
                            color="gray.400"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                            transition="color 0.2s"
                        >
                            Privacy Policy
                        </ChakraLink>
                    </VStack>
                </SimpleGrid>

                <Divider my={8} borderColor="gray.700" />

                <HStack
                    justify={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    spacing={4}
                >
                    <Text color="gray.500" fontSize="sm">
                        © {new Date().getFullYear()} UniHub. All rights reserved.
                    </Text>
                    <HStack spacing={6}>
                        <ChakraLink
                            color="gray.500"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                        >
                            Terms
                        </ChakraLink>
                        <ChakraLink
                            color="gray.500"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                        >
                            Privacy
                        </ChakraLink>
                        <ChakraLink
                            color="gray.500"
                            fontSize="sm"
                            _hover={{ color: "white" }}
                        >
                            Cookies
                        </ChakraLink>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
}
