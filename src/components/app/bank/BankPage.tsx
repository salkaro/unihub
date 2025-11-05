"use client";

import { Box, Container, Heading, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";
import SubjectCard from "@/components/ui/subject-card";
import Footer from "../Footer";

interface Subject {
    id: string;
    title: string;
    description: string;
    moduleCount: number;
    questionCount: number;
    color: string;
    href: string;
}

const subjects: Subject[] = [
    {
        id: "mathematics",
        title: "Mathematics",
        description: "Calculus, Linear Algebra, Differential Equations, and more advanced mathematical concepts",
        moduleCount: 1,
        questionCount: 20,
        color: "blue",
        href: "/bank/mathematics",
    },
];

export default function BankPage() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
            {/* Header Section */}
            <Box bg="white" borderBottom="1px" borderColor="gray.200" py={8}>
                <Container maxW="6xl">
                    <VStack spacing={4} align="start">
                        <Button
                            as={Link}
                            href="/"
                            variant="ghost"
                            colorScheme="gray"
                            size="sm"
                            mb={2}
                        >
                            ← Back to Home
                        </Button>
                        <Heading
                            as="h1"
                            fontSize={{ base: "3xl", md: "5xl" }}
                            fontWeight="extrabold"
                            bgGradient="linear(to-r, teal.500, blue.500, purple.600)"
                            bgClip="text"
                        >
                            Question Bank
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
                            Browse our comprehensive collection of practice questions organized by subjects.
                            Each subject contains multiple modules with downloadable PDF question sets.
                        </Text>
                    </VStack>
                </Container>
            </Box>

            {/* Subjects Grid */}
            <Box as="section" py={{ base: 12, md: 16 }} flex="1">
                <Container maxW="6xl">
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 3 }}
                        spacing={{ base: 6, md: 8 }}
                    >
                        {subjects.map((subject) => (
                            <SubjectCard
                                key={subject.id}
                                title={subject.title}
                                description={subject.description}
                                moduleCount={subject.moduleCount}
                                questionCount={subject.questionCount}
                                color={subject.color}
                                href={subject.href}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
