// Local Imports
import { Course } from '@/lib/api';
import ModuleCard from '@/components/ui/module-card'

// External Imports
import { Heading, SimpleGrid } from '@chakra-ui/react'


interface Props {
    loading: boolean;
    error: string | null;
    modules: Record<string, Course>;
}
const Modules: React.FC<Props> = ({ loading, error, modules }) => {
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
