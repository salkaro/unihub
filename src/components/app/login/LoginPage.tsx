'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Box,
    Container,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon,
    AlertDescription,
    Text,
    HStack,
} from "@chakra-ui/react";
import Footer from '../../ui/footer';


const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/gs-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({ error: 'Login failed' }));
                throw new Error(error.error || 'Login failed');
            }

            // Store credentials in session storage for subsequent API calls
            sessionStorage.setItem('user-credentials', JSON.stringify({ email, password }));

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (err) {
            console.error('Login error:', err);
            setError(err instanceof Error ? err.message : 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            {/* Background gradient section */}
            <Box
                position="relative"
                overflow="hidden"
                bgGradient="linear(to-br, teal.400, blue.500, purple.600)"
                py={{ base: 8, md: 4 }}
            >
                {/* Decorative blur elements */}
                <Box
                    position="absolute"
                    top="-20%"
                    right="-10%"
                    w="400px"
                    h="200px"
                    bg="purple.400"
                    opacity={0.3}
                    filter="blur(100px)"
                    borderRadius="full"
                />
                <Box
                    position="absolute"
                    bottom="-20%"
                    left="-10%"
                    w="300px"
                    h="300px"
                    bg="teal.300"
                    opacity={0.3}
                    filter="blur(100px)"
                    borderRadius="full"
                />

                <Container maxW="6xl" position="relative" zIndex={1}>
                    <HStack justify="space-between" align="center">
                        <Heading
                            as={Link}
                            href="/"
                            color="white"
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="bold"
                            cursor="pointer"
                            _hover={{ opacity: 0.9 }}
                        >
                            UniHub
                        </Heading>
                        <Button
                            as={Link}
                            href="/"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: "whiteAlpha.200" }}
                        >
                            Back to Home
                        </Button>
                    </HStack>
                </Container>
            </Box>

            {/* Login Form Section */}
            <Box
                flex="1"
                bg="gray.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                py={{ base: 12, md: 20 }}
                minH="100vh"
            >
                <Container maxW="md">
                    <VStack spacing={8}>
                        <VStack spacing={3} textAlign="center">
                            <Heading
                                as="h1"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                bgGradient="linear(to-r, teal.500, blue.500)"
                                bgClip="text"
                            >
                                Welcome Back
                            </Heading>
                            <Text color="gray.600" fontSize="lg">
                                Sign in using your Gradescope account
                            </Text>
                        </VStack>

                        <Box
                            w="100%"
                            bg="white"
                            p={8}
                            borderRadius="2xl"
                            boxShadow="xl"
                            border="1px"
                            borderColor="gray.200"
                        >
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={6}>
                                    {error && (
                                        <Alert status="error" borderRadius="xl">
                                            <AlertIcon />
                                            <AlertDescription>{error}</AlertDescription>
                                        </Alert>
                                    )}

                                    <FormControl isRequired>
                                        <FormLabel fontWeight="semibold" color="gray.700">
                                            Email Address
                                        </FormLabel>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@university.edu"
                                            autoComplete="email"
                                            size="lg"
                                            borderRadius="xl"
                                            border="2px"
                                            borderColor="gray.200"
                                            _hover={{ borderColor: "gray.300" }}
                                            _focus={{
                                                borderColor: "blue.400",
                                                boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                                            }}
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel fontWeight="semibold" color="gray.700">
                                            Password
                                        </FormLabel>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                            size="lg"
                                            borderRadius="xl"
                                            border="2px"
                                            borderColor="gray.200"
                                            _hover={{ borderColor: "gray.300" }}
                                            _focus={{
                                                borderColor: "blue.400",
                                                boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                                            }}
                                        />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        colorScheme="blue"
                                        size="lg"
                                        width="100%"
                                        isLoading={loading}
                                        loadingText="Logging in..."
                                        borderRadius="xl"
                                        fontWeight="bold"
                                        fontSize="md"
                                        _hover={{
                                            transform: "translateY(-2px)",
                                            boxShadow: "lg",
                                        }}
                                        transition="all 0.2s"
                                    >
                                        Sign In
                                    </Button>

                                    <Text color="gray.500" fontSize="sm" textAlign="center">
                                        New to UniHub?{" "}
                                        <Text
                                            as={Link}
                                            href="/bank"
                                            color="blue.500"
                                            fontWeight="semibold"
                                            _hover={{ color: "blue.600", textDecoration: "underline" }}
                                        >
                                            Browse Question Bank
                                        </Text>
                                    </Text>
                                </VStack>
                            </form>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}

export default LoginPage
