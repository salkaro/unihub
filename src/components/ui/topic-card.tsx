"use client";

import { Box, Heading, Text, VStack, HStack, Badge, Button } from "@chakra-ui/react";

interface TopicCardProps {
    title: string;
    description: string;
    questionCount: number;
    pdfUrl?: string;
    color?: string;
}

export default function TopicCard({
    title,
    description,
    questionCount,
    pdfUrl,
    color = "blue",
}: TopicCardProps) {

    // Generate questions and answers URLs based on the main PDF URL
    const questionsUrl = pdfUrl?.replace('.pdf', '-questions.pdf');
    const answersUrl = pdfUrl?.replace('.pdf', '-answers.pdf');

    const handleQuestionsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (questionsUrl) {
            window.open(questionsUrl, '_blank');
        }
    };

    const handleAnswersClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (answersUrl) {
            window.open(answersUrl, '_blank');
        }
    };

    return (
        <Box
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="md"
            border="1px"
            borderColor="gray.200"
            transition="all 0.3s"
            position="relative"
            _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: `${color}.300`,
            }}
        >
            <VStack align="start" spacing={4} h="full">
                <Box flex="1" w="full">
                    <HStack justify="space-between" align="start" mb={3}>
                        <Heading
                            size="md"
                            color="gray.800"
                            flex="1"
                        >
                            {title}
                        </Heading>
                    </HStack>

                    <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={3}>
                        {description}
                    </Text>

                    <HStack spacing={2}>
                        <Badge
                            colorScheme={color}
                            px={2}
                            py={1}
                            borderRadius="md"
                            fontSize="xs"
                        >
                            {questionCount} Questions
                        </Badge>
                        <Badge
                            colorScheme="purple"
                            px={2}
                            py={1}
                            borderRadius="md"
                            fontSize="xs"
                        >
                            PDF
                        </Badge>
                    </HStack>
                </Box>

                {pdfUrl && (
                    <HStack spacing={3} w="full" marginTop={2}>
                        <Button
                            size="sm"
                            colorScheme={color}
                            flex={1}
                            fontWeight="semibold"
                            onClick={handleQuestionsClick}
                        >
                            Questions
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            colorScheme={color}
                            flex={1}
                            fontWeight="semibold"
                            onClick={handleAnswersClick}
                        >
                            Answers
                        </Button>
                    </HStack>
                )}
            </VStack>
        </Box>
    );
}
