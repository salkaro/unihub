"use client";

import { useState, useMemo } from "react";
import { SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";
import Layout from "../Layout";
import TopicCard from "@/components/ui/topic-card";

interface Topic {
    id: string;
    title: string;
    description: string;
    questionCount: number;
    pdfUrl?: string;
}

const topics: Topic[] = [
    {
        id: "ordinary-differential-equations",
        title: "Ordinary Differential Equations",
        description: "First and second-order ODEs, Bernoulli ODEs, homogeneous & non-homogeneous ODEs",
        questionCount: 20,
        pdfUrl: "/pdfs/math/ordinary-differential-equations.pdf",
    },
    {
        id: "de-moirves-theorem",
        title: "De Moivre's Theorem",
        description: "First and second-order ODEs, Bernoulli ODEs, homogeneous & non-homogeneous ODEs",
        questionCount: 10,
        pdfUrl: "/pdfs/math/de-moirves-theorem.pdf",
    },
    {
        id: "roots-of-unity",
        title: "Roots Of Unity",
        description: "Sums, products, and geometric properties of nth roots of unity",
        questionCount: 20,
        pdfUrl: "/pdfs/math/roots-of-unity.pdf",
    },
    {
        id: "proof-by-induction",
        title: "Proof By Induction",
        description: "Summations, divisbility, matrices",
        questionCount: 19,
        pdfUrl: "/pdfs/math/proof-by-induction.pdf",
    }
];

export default function MathematicsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter topics based on search query
    const filteredTopics = useMemo(() => {
        if (!searchQuery.trim()) {
            return topics;
        }

        const query = searchQuery.toLowerCase();
        return topics.filter((topic) => {
            return (
                topic.title.toLowerCase().includes(query) ||
                topic.description.toLowerCase().includes(query)
            );
        });
    }, [searchQuery]);

    return (
        <Layout
            title="Mathematics"
            description="Comprehensive collection of practice questions covering all major areas of university mathematics. From foundational calculus to advanced topics in analysis and algebra."
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Search math topics..."
        >
            <Box mb={8}>
                <Heading size="lg" mb={2} color="blue.600">
                    Topics
                </Heading>
                <Text color="gray.600">
                    {searchQuery ? (
                        <>
                            Found {filteredTopics.length} topic{filteredTopics.length !== 1 ? "s" : ""} matching &quot;{searchQuery}&quot;
                        </>
                    ) : (
                        <>
                                Browse through {topics.length} mathematics topics covering fundamental to advanced concepts.
                            Each topic includes comprehensive question sets in PDF format.
                        </>
                    )}
                </Text>
            </Box>

            {filteredTopics.length > 0 ? (
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 6, md: 8 }}
                >
                    {filteredTopics.map((topic) => (
                        <TopicCard
                            key={topic.id}
                            title={topic.title}
                            description={topic.description}
                            questionCount={topic.questionCount}
                            pdfUrl={topic.pdfUrl}
                            color="blue"
                        />
                    ))}
                </SimpleGrid>
            ) : (
                <Box
                    textAlign="center"
                    py={16}
                    px={4}
                    bg="white"
                    borderRadius="xl"
                    border="1px"
                    borderColor="gray.200"
                >
                    <Heading size="md" mb={2} color="gray.600">
                        No topics found
                    </Heading>
                    <Text color="gray.500">
                        Try adjusting your search query or browse all topics
                    </Text>
                </Box>
            )}
        </Layout>
    );
}
