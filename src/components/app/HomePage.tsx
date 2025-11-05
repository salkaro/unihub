"use client";

import { Box, Container, Heading, Text, Button, VStack, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "./Footer";

export default function HomePage() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            {/* Hero Section */}
            <Box
                as="section"
                bgGradient="linear(to-br, teal.400, blue.500, purple.600)"
                color="white"
                pt={{ base: 20, md: 32 }}
                pb={{ base: 24, md: 40 }}
                position="relative"
                overflow="hidden"
            >
                {/* Decorative blur elements */}
                <Box
                    position="absolute"
                    top="-10%"
                    right="-5%"
                    w="500px"
                    h="500px"
                    bg="purple.400"
                    opacity={0.3}
                    filter="blur(100px)"
                    borderRadius="full"
                />
                <Box
                    position="absolute"
                    bottom="-10%"
                    left="-5%"
                    w="400px"
                    h="400px"
                    bg="teal.300"
                    opacity={0.3}
                    filter="blur(100px)"
                    borderRadius="full"
                />

                <Container maxW="6xl" position="relative" zIndex={1}>
                    <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
                        <Heading
                            as="h1"
                            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                            fontWeight="extrabold"
                            lineHeight="1.1"
                            letterSpacing="tight"
                        >
                            Master Your Studies with{" "}
                            <Box as="span" display="block" color="yellow.300">
                                UniHub
                            </Box>
                        </Heading>
                        <Text
                            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                            maxW="3xl"
                            opacity={0.95}
                            fontWeight="medium"
                            lineHeight="tall"
                        >
                            Access comprehensive question banks across different subjects and modules.
                            Practice, prepare, and excel in your university studies.
                        </Text>
                        <VStack spacing={4} pt={4}>
                            <Button
                                as={Link}
                                href="/bank"
                                size="lg"
                                fontSize="lg"
                                px={8}
                                py={7}
                                bg="white"
                                color="teal.600"
                                fontWeight="bold"
                                borderRadius="xl"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "2xl",
                                    bg: "gray.50",
                                }}
                                transition="all 0.3s"
                                boxShadow="xl"
                            >
                                Browse Question Bank →
                            </Button>
                            <Button
                                as={Link}
                                href="/login"
                                size="lg"
                                variant="ghost"
                                color="white"
                                fontWeight="semibold"
                                _hover={{
                                    bg: "whiteAlpha.200",
                                }}
                            >
                                Sign in to your account
                            </Button>
                        </VStack>
                    </VStack>
                </Container>
            </Box>

            {/* Features Section */}
            <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
                <Container maxW="6xl">
                    <VStack spacing={12}>
                        <VStack spacing={4} textAlign="center">
                            <Heading
                                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                fontWeight="bold"
                                bgGradient="linear(to-r, teal.500, blue.500)"
                                bgClip="text"
                            >
                                Everything you need to succeed
                            </Heading>
                            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
                                Comprehensive study materials organized to help you excel in every subject
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
                            <Box
                                bg="white"
                                p={8}
                                borderRadius="2xl"
                                boxShadow="lg"
                                border="1px"
                                borderColor="gray.200"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-4px)",
                                    boxShadow: "2xl",
                                    borderColor: "teal.200",
                                }}
                            >
                                <VStack align="start" spacing={4}>
                                    <Box
                                        bg="teal.100"
                                        p={3}
                                        borderRadius="xl"
                                        color="teal.600"
                                    >
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                        </svg>
                                    </Box>
                                    <Heading size="md">Extensive Question Bank</Heading>
                                    <Text color="gray.600">
                                        Hundreds of practice questions across multiple subjects and modules
                                        to test your knowledge.
                                    </Text>
                                </VStack>
                            </Box>

                            <Box
                                bg="white"
                                p={8}
                                borderRadius="2xl"
                                boxShadow="lg"
                                border="1px"
                                borderColor="gray.200"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-4px)",
                                    boxShadow: "2xl",
                                    borderColor: "blue.200",
                                }}
                            >
                                <VStack align="start" spacing={4}>
                                    <Box
                                        bg="blue.100"
                                        p={3}
                                        borderRadius="xl"
                                        color="blue.600"
                                    >
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </Box>
                                    <Heading size="md">Organized by Subject</Heading>
                                    <Text color="gray.600">
                                        Questions categorized by subjects and modules for easy navigation
                                        and focused practice.
                                    </Text>
                                </VStack>
                            </Box>

                            <Box
                                bg="white"
                                p={8}
                                borderRadius="2xl"
                                boxShadow="lg"
                                border="1px"
                                borderColor="gray.200"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-4px)",
                                    boxShadow: "2xl",
                                    borderColor: "purple.200",
                                }}
                            >
                                <VStack align="start" spacing={4}>
                                    <Box
                                        bg="purple.100"
                                        p={3}
                                        borderRadius="xl"
                                        color="purple.600"
                                    >
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                        </svg>
                                    </Box>
                                    <Heading size="md">PDF Downloads</Heading>
                                    <Text color="gray.600">
                                        Download comprehensive PDF documents to study offline at your own pace.
                                    </Text>
                                </VStack>
                            </Box>
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
