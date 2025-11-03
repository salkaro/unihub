'use client';

import React from 'react';
import { Box, Text, Badge, useColorMode, Flex } from '@chakra-ui/react';

interface ModuleCardProps {
    name: string;
    fullName: string;
    numAssignments: string;
    semester: string;
    year: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
    name,
    fullName,
    numAssignments,
    semester,
    year,
}) => {
    const { colorMode } = useColorMode();

    // Extract number from "X assignments" or "X assignment"
    const assignmentCount = parseInt(numAssignments.split(' ')[0]) || 0;

    return (
        <Box
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            borderWidth="1px"
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            borderRadius="lg"
            p={6}
            shadow="md"
            _hover={{
                shadow: 'lg',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s',
            }}
            transition="all 0.2s"
            cursor="pointer"
        >
            <Flex justifyContent="space-between" alignItems="start" mb={3}>
                <Box flex="1">
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color={colorMode === 'light' ? 'gray.800' : 'white'}
                        mb={1}
                    >
                        {fullName}
                    </Text>
                    <Text
                        fontSize="sm"
                        color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                        mb={2}
                    >
                        {name}
                    </Text>
                </Box>
                <Badge
                    colorScheme={assignmentCount > 0 ? 'blue' : 'gray'}
                    fontSize="md"
                    px={3}
                    py={1}
                    borderRadius="full"
                >
                    {assignmentCount}
                </Badge>
            </Flex>
            <Flex gap={2} alignItems="center">
                <Badge colorScheme="purple" variant="subtle">
                    {semester} {year}
                </Badge>
                <Text
                    fontSize="sm"
                    color={colorMode === 'light' ? 'gray.500' : 'gray.500'}
                >
                    {numAssignments}
                </Text>
            </Flex>
        </Box>
    );
};

export default ModuleCard;
