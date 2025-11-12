// Local Imports
import { Course } from '@/lib/api';
import ModuleCard from '@/components/ui/module-card'

// External Imports
import { Box, Flex, Heading, SimpleGrid, Skeleton, useColorMode } from '@chakra-ui/react'


interface Props {
    loading: boolean;
    error: string | null;
    modules: Record<string, Course>;
}
const Modules: React.FC<Props> = ({ loading, error, modules }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Heading
                as="h2"
                size="lg"
                mb={6}
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
            >
                Your Modules
            </Heading>

            {loading && (
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={6}
                >
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <Box
                            key={index}
                            bg={colorMode === 'light' ? 'white' : 'gray.800'}
                            borderWidth="1px"
                            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                            borderRadius="lg"
                            p={6}
                            shadow="md"
                        >
                            <Flex justifyContent="space-between" alignItems="start" mb={3}>
                                <Box flex="1">
                                    <Skeleton height="20px" width="80%" mb={2} />
                                    <Skeleton height="16px" width="50%" mb={2} />
                                </Box>
                                <Skeleton height="32px" width="40px" borderRadius="full" />
                            </Flex>
                            <Flex gap={2} alignItems="center">
                                <Skeleton height="20px" width="100px" borderRadius="md" />
                                <Skeleton height="16px" width="80px" />
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            )}

            {!loading && !error && Object.keys(modules).length > 0 && (
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={6}
                >
                    {Object.entries(modules).map(([id, module]) => (
                        <ModuleCard
                            key={id}
                            name={module.name}
                            fullName={module.full_name}
                            numAssignments={module.num_assignments}
                            semester={module.semester}
                            year={module.year}
                        />
                    ))}
                </SimpleGrid>
            )}
        </>
    )
}

export default Modules
