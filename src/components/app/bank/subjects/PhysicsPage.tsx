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
        id: "circular-motion",
        title: "Circular Motion",
        description: "Uniform and non-uniform circular motion, centripetal force, angular velocity/acceleration, and applications in orbital motion.",
        questionCount: 20,
        pdfUrl: "/pdfs/physics/circular-motion.pdf",
    },
];

const PhysicsPage = () => {
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
            title="Physics"
            description="Extensive collection of practice questions covering all key topics in university physics. From classical mechanics to modern physics, including problem-solving and conceptual understanding."
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Search physics topics..."
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
                                Browse through {topics.length} physics topics covering fundamental to advanced concepts.
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

export default PhysicsPage
