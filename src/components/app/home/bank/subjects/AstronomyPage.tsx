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
        id: "planetary-motion",
        title: "Planetary Motion",
        description: "Kepler's laws, elliptical orbits, orbital parameters, and hohmann transfer orbits.",
        questionCount: 20,
        pdfUrl: "/pdfs/astronomy/planetary-motion.pdf",
    },
    {
        id: "variants",
        title: "Variant Questions",
        description: "Questions from each topic",
        questionCount: 22,
        pdfUrl: "/pdfs/astronomy/variant.pdf",
    },
];

const AstronomyPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTopics = useMemo(() => {
        if (!searchQuery.trim()) return topics;

        const query = searchQuery.toLowerCase();
        return topics.filter((topic) =>
            topic.title.toLowerCase().includes(query) ||
            topic.description.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    return (
        <Layout
            title="Astronomy"
            description="Extensive collection of university-level astronomy topics, covering everything from planetary science to cosmology. Each topic includes detailed problem sets in PDF format."
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Search astronomy topics..."
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
                            Explore a wide range of astronomy subjects from planetary orbits to cosmology. Each topic provides carefully curated problem sets.
                        </>
                    )}
                </Text>
            </Box>

            {filteredTopics.length > 0 ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
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
                    <Text color="gray.500">Try adjusting your search query or browse all topics</Text>
                </Box>
            )}
        </Layout>
    );
};

export default AstronomyPage;
