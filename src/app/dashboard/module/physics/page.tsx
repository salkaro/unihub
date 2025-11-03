'use client';

import {
    Container,
    Heading,
    SimpleGrid,
    Box,
    useColorMode,
    Card,
    CardBody,
    Text,
    Icon,
    VStack
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface PhysicsLink {
    title: string;
    description: string;
    url: string;
    icon?: string;
}

const physicsLinks: PhysicsLink[] = [
    {
        title: "Blackboard",
        description: "Course materials and announcements",
        url: "https://blackboard.durham.ac.uk/ultra/courses/_68697_1/outline"
    },
    {
        title: "Lecture Recordings",
        description: "Watch recorded lectures on Encore",
        url: "https://blackboard.durham.ac.uk/ultra/courses/_68697_1/outline/lti/launchFrame?toolHref=https:~2F~2Fblackboard.durham.ac.uk~2Fwebapps~2Fblackboard~2Fexecute~2Fblti~2FlaunchPlacement%3Fblti_placement_id%3D_188_1%26content_id%3D_3008617_1%26course_id%3D_68697_1%26wrapped%3Dtrue%26from_ultra%3Dtrue&toolTitle=Encore"
    },
    {
        title: "Gradebook",
        description: "View your grades and assessments",
        url: "https://blackboard.durham.ac.uk/ultra/courses/_68697_1/grades"
    },
    {
        title: "Physics Portal",
        description: "Durham Physics teaching portal",
        url: "https://teaching.physics.dur.ac.uk/portal.php"
    }
];

export default function PhysicsPage() {
    const { colorMode } = useColorMode();

    return (
        <Box minH="100vh" bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}>
            <Container maxW="container.xl" py={8}>
                <Heading
                    as="h1"
                    size="xl"
                    mb={6}
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    bgClip="text"
                >
                    Physics Resources
                </Heading>

                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={6}
                >
                    {physicsLinks.map((link) => (
                        <Card
                            key={link.title}
                            as="a"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            bg={colorMode === 'light' ? 'white' : 'gray.800'}
                            shadow="md"
                            _hover={{
                                shadow: 'lg',
                                transform: 'translateY(-4px)',
                                cursor: 'pointer',
                                borderColor: colorMode === 'light' ? 'blue.400' : 'blue.300'
                            }}
                            transition="all 0.2s"
                            borderWidth="2px"
                            borderColor="transparent"
                            style={{ textDecoration: 'none' }}
                        >
                            <CardBody>
                                <VStack align="start" spacing={3}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                        <Heading size="md" color={colorMode === 'light' ? 'gray.800' : 'white'}>
                                            {link.title}
                                        </Heading>
                                        <Icon
                                            as={ExternalLinkIcon}
                                            boxSize={5}
                                            color={colorMode === 'light' ? 'blue.500' : 'blue.300'}
                                        />
                                    </Box>
                                    <Text
                                        color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                                        fontSize="sm"
                                    >
                                        {link.description}
                                    </Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
