"use client";

import { Box, Heading, Text, VStack, Badge } from "@chakra-ui/react";
import Link from "next/link";

interface SubjectCardProps {
    title: string;
    description: string;
    moduleCount: number;
    questionCount: number;
    color: string;
    href: string;
}

export default function SubjectCard({
    title,
    description,
    moduleCount,
    questionCount,
    color,
    href,
}: SubjectCardProps) {
    return (
        <Box
            as={Link}
            href={href}
            display="block"
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="lg"
            border="2px"
            borderColor="gray.200"
            transition="all 0.3s"
            position="relative"
            overflow="hidden"
            _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                borderColor: `${color}.400`,
            }}
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "6px",
                bgGradient: `linear(to-r, ${color}.400, ${color}.600)`,
            }}
        >
            <VStack align="start" spacing={4} pt={2}>
                <Box>
                    <Heading
                        size="lg"
                        mb={2}
                        bgGradient={`linear(to-r, ${color}.500, ${color}.700)`}
                        bgClip="text"
                    >
                        {title}
                    </Heading>
                    <Text color="gray.600" fontSize="md" lineHeight="tall">
                        {description}
                    </Text>
                </Box>

                <Box display="flex" gap={3} flexWrap="wrap" pt={2}>
                    <Badge
                        colorScheme={color}
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="semibold"
                    >
                        {moduleCount} {moduleCount === 1 ? "Module" : "Modules"}
                    </Badge>
                    <Badge
                        colorScheme="gray"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="semibold"
                    >
                        {questionCount}+ Questions
                    </Badge>
                </Box>
            </VStack>
        </Box>
    );
}
