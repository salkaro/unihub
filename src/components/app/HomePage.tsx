"use client";

import { Box, Container, Heading, Text, Button, VStack, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../ui/footer";
import PublicNavbar from "../ui/public-navbar";

export default function HomePage() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <PublicNavbar />

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
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
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
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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
                                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
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

            {/* Gradescope Integration Section */}
            <Box as="section" py={{ base: 16, md: 24 }} bg="white">
                <Container maxW="6xl">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
                        {/* Text Content */}
                        <VStack align="start" spacing={6}>
                            <Box
                                bg="gradient.100"
                                px={4}
                                py={2}
                                borderRadius="full"
                                display="inline-block"
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight="bold"
                                    bgGradient="linear(to-r, teal.500, blue.500)"
                                    bgClip="text"
                                >
                                    INTEGRATED WITH GRADESCOPE
                                </Text>
                            </Box>
                            <Heading
                                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                fontWeight="extrabold"
                                lineHeight="1.2"
                            >
                                Your Academic Hub in One Place
                            </Heading>
                            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
                                Sign in to UniHub using your Gradescope account credentials to unlock
                                a personalized dashboard that brings all your academic information together.
                            </Text>
                            <VStack align="start" spacing={4} pt={4}>
                                <Box display="flex" gap={3}>
                                    <Box
                                        bg="teal.100"
                                        p={2}
                                        borderRadius="lg"
                                        color="teal.600"
                                        h="fit-content"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </Box>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="semibold" fontSize="lg">
                                            View All Your Modules
                                        </Text>
                                        <Text color="gray.600">
                                            Access all your enrolled courses and modules in one centralized location
                                        </Text>
                                    </VStack>
                                </Box>
                                <Box display="flex" gap={3}>
                                    <Box
                                        bg="blue.100"
                                        p={2}
                                        borderRadius="lg"
                                        color="blue.600"
                                        h="fit-content"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                        </svg>
                                    </Box>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="semibold" fontSize="lg">
                                            Track Your Assignments
                                        </Text>
                                        <Text color="gray.600">
                                            Keep track of upcoming assignments, deadlines, and submissions
                                        </Text>
                                    </VStack>
                                </Box>
                                <Box display="flex" gap={3}>
                                    <Box
                                        bg="purple.100"
                                        p={2}
                                        borderRadius="lg"
                                        color="purple.600"
                                        h="fit-content"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                                        </svg>
                                    </Box>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="semibold" fontSize="lg">
                                            Stay Organized
                                        </Text>
                                        <Text color="gray.600">
                                            Manage your academic schedule and never miss an important deadline
                                        </Text>
                                    </VStack>
                                </Box>
                            </VStack>
                            <Button
                                as={Link}
                                href="/login"
                                size="lg"
                                colorScheme="blue"
                                fontSize="md"
                                px={8}
                                py={6}
                                borderRadius="xl"
                                fontWeight="bold"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                                transition="all 0.2s"
                            >
                                Sign In with Gradescope →
                            </Button>
                        </VStack>

                        {/* Visual Element */}
                        <Box
                            bg="gray.50"
                            p={8}
                            borderRadius="2xl"
                            border="2px"
                            borderColor="gray.200"
                            position="relative"
                        >
                            <VStack spacing={4}>
                                <Box
                                    w="full"
                                    bg="white"
                                    p={6}
                                    borderRadius="xl"
                                    boxShadow="lg"
                                    border="1px"
                                    borderColor="gray.200"
                                >
                                    <VStack align="start" spacing={3}>
                                        <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                                            YOUR MODULES
                                        </Text>
                                        <Box w="full" h="12px" bg="teal.200" borderRadius="md" />
                                        <Box w="80%" h="12px" bg="blue.200" borderRadius="md" />
                                        <Box w="90%" h="12px" bg="purple.200" borderRadius="md" />
                                    </VStack>
                                </Box>
                                <Box
                                    w="full"
                                    bg="white"
                                    p={6}
                                    borderRadius="xl"
                                    boxShadow="lg"
                                    border="1px"
                                    borderColor="gray.200"
                                >
                                    <VStack align="start" spacing={3}>
                                        <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                                            UPCOMING ASSIGNMENTS
                                        </Text>
                                        <Box w="full" h="12px" bg="orange.200" borderRadius="md" />
                                        <Box w="70%" h="12px" bg="red.200" borderRadius="md" />
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
