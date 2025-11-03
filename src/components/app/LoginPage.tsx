'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Container,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    useColorMode,
    Alert,
    AlertIcon,
    AlertDescription,
    Card,
    CardBody
} from "@chakra-ui/react";


const LoginPage = () => {
    const { colorMode } = useColorMode();
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
            console.log(email, password)
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
        <Box
            minH="100vh"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Container maxW="md">
                <VStack spacing={8}>
                    <Heading
                        as="h1"
                        size="2xl"
                        bgGradient="linear(to-r, blue.400, purple.500)"
                        bgClip="text"
                        textAlign="center"
                    >
                        UniHub
                    </Heading>

                    <Card
                        w="100%"
                        bg={colorMode === 'light' ? 'white' : 'gray.800'}
                        shadow="lg"
                    >
                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={6}>
                                    <Heading size="lg">Login</Heading>

                                    {error && (
                                        <Alert status="error" borderRadius="lg">
                                            <AlertIcon />
                                            <AlertDescription>{error}</AlertDescription>
                                        </Alert>
                                    )}

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            autoComplete="email"
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                        />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        colorScheme="blue"
                                        width="100%"
                                        isLoading={loading}
                                        loadingText="Logging in..."
                                    >
                                        Login
                                    </Button>
                                </VStack>
                            </form>
                        </CardBody>
                    </Card>
                </VStack>
            </Container>
        </Box>
    );
}

export default LoginPage
