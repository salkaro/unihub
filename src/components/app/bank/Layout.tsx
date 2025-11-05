"use client";

import { Box, Container, Button, Heading, Text, VStack, Input, InputGroup, InputLeftElement, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Footer from "../../ui/footer";
import PublicNavbar from "../../ui/public-navbar";

interface BankLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    breadcrumbs?: Array<{
        label: string;
        href: string;
    }>;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
}

export default function Layout({ children, title, description, searchValue, onSearchChange, searchPlaceholder = "Search topics..." }: BankLayoutProps) {
    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
            <PublicNavbar />
            {/* Header Section */}
            <Box bg="white" borderBottom="1px" borderColor="gray.200" py={8}>
                <Container maxW="6xl">
                    <VStack spacing={4} align="start">

                        <Button
                            as={Link}
                            href="/bank"
                            variant="ghost"
                            colorScheme="gray"
                            size="sm"
                        >
                            ← Back to Subjects
                        </Button>

                        <Box w="full">
                            <HStack justify="space-between" align="start" spacing={6} flexDirection={{ base: "column", md: "row" }}>
                                <Box flex="1">
                                    <Heading
                                        as="h1"
                                        fontSize={{ base: "3xl", md: "5xl" }}
                                        fontWeight="extrabold"
                                        mb={3}
                                    >
                                        {title}
                                    </Heading>
                                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
                                        {description}
                                    </Text>
                                </Box>

                                {onSearchChange && (
                                    <Box w={{ base: "full", md: "400px" }} mt={{ base: 4, md: 0 }}>
                                        <InputGroup size="lg">
                                            <InputLeftElement pointerEvents="none">
                                                <SearchIcon color="gray.400" />
                                            </InputLeftElement>
                                            <Input
                                                placeholder={searchPlaceholder}
                                                value={searchValue}
                                                onChange={(e) => onSearchChange(e.target.value)}
                                                bg="gray.50"
                                                border="2px"
                                                borderColor="gray.200"
                                                _hover={{
                                                    borderColor: "gray.300",
                                                }}
                                                _focus={{
                                                    borderColor: "blue.400",
                                                    bg: "white",
                                                    boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                                                }}
                                                borderRadius="xl"
                                            />
                                        </InputGroup>
                                    </Box>
                                )}
                            </HStack>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* Content Section */}
            <Box as="section" py={{ base: 12, md: 16 }} flex="1" minH="100vh">
                <Container maxW="6xl">
                    {children}
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
