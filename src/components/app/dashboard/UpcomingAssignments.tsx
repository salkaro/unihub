// Local Imports
import { AssignmentWithCourse, IAssignmentError } from './models';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Badge, Box, Button, Card, CardBody, Center, Divider, Heading, HStack, Skeleton, Text, useColorMode, VStack } from '@chakra-ui/react';


interface Props {
    loading: boolean;
    error: null | string;
    assignmentErrors: IAssignmentError[];
    handleRetry: () => void;
    allAssignments: AssignmentWithCourse[]
}
const UpcomingAssignments: React.FC<Props> = ({ loading, error, assignmentErrors, handleRetry, allAssignments }) => {
    const { colorMode } = useColorMode();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = date.getTime() - now.getTime();

        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    
        // Normalize to midnight for date-only comparison
        const dueDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dayDiff = Math.round((dueDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        if (diffTime < 0) {
            return { text: formattedDate, badge: 'Overdue', badgeColor: 'red' };
        } else if (dayDiff === 0) {
            return { text: formattedDate, badge: 'Due Today', badgeColor: 'orange' };
        } else if (dayDiff === 1) {
            return { text: formattedDate, badge: 'Due Tomorrow', badgeColor: 'yellow' };
        } else {
            return { text: formattedDate, badge: `${dayDiff} days left`, badgeColor: 'blue' };
        }
    };

    return (
        <>
            <Heading
                as="h1"
                size="xl"
                mb={6}
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
            >
                Upcoming Assignments
            </Heading>

            {loading && (
                <VStack spacing={4} align="stretch">
                    {[1, 2, 3].map((index) => (
                        <Card
                            key={index}
                            bg={colorMode === 'light' ? 'white' : 'gray.800'}
                            shadow="md"
                        >
                            <CardBody>
                                <VStack align="stretch" spacing={3}>
                                    <HStack justify="space-between" align="start">
                                        <Box flex="1">
                                            <Skeleton height="24px" width="60%" mb={2} />
                                            <Skeleton height="16px" width="40%" />
                                        </Box>
                                        <Skeleton height="24px" width="80px" borderRadius="full" />
                                    </HStack>

                                    <Divider />

                                    <HStack spacing={4}>
                                        <Skeleton height="16px" width="150px" />
                                        <Skeleton height="20px" width="80px" borderRadius="md" />
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                    ))}
                </VStack>
            )}

            {error && (
                <Alert status="error" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                        <AlertTitle>Error loading assignments</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Box>
                </Alert>
            )}

            {!loading && assignmentErrors.length > 0 && (
                <Alert status="warning" borderRadius="lg" mb={6}>
                    <AlertIcon />
                    <Box flex="1">
                        <AlertTitle>Failed to load assignments for some courses</AlertTitle>
                        <AlertDescription>
                            <VStack align="stretch" spacing={2} mt={2}>
                                {assignmentErrors.map((err, index) => (
                                    <Text key={index} fontSize="sm">
                                        <strong>{err.courseName}:</strong> {err.error}
                                    </Text>
                                ))}
                            </VStack>
                        </AlertDescription>
                    </Box>
                    <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={handleRetry}
                        ml={4}
                    >
                        Retry
                    </Button>
                </Alert>
            )}

            {!loading && !error && allAssignments.length === 0 && (
                <Center py={20}>
                    <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                        No assignments found
                    </Text>
                </Center>
            )}

            {!loading && !error && allAssignments.length > 0 && (
                <VStack spacing={4} align="stretch">
                    {allAssignments.map((assignment) => {
                        const dateInfo = formatDate(assignment.due_date);
                        const gradescopeUrl = `https://www.gradescope.com/courses/${assignment.courseId}`;
                        return (
                            <Card
                                key={assignment.assignment_id}
                                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                                shadow="md"
                                _hover={{ shadow: 'lg', transform: 'translateY(-2px)', cursor: 'pointer' }}
                                transition="all 0.2s"
                                as="a"
                                href={gradescopeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <CardBody>
                                    <VStack align="stretch" spacing={3}>
                                        <HStack justify="space-between" align="start">
                                            <Box flex="1">
                                                <Heading size="md" mb={1}>
                                                    {assignment.name}
                                                </Heading>
                                                <Text
                                                    fontSize="sm"
                                                    color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                                                >
                                                    {assignment.courseFullName} ({assignment.courseName})
                                                </Text>
                                            </Box>
                                            {dateInfo.badge && (
                                                <Badge
                                                    colorScheme={dateInfo.badgeColor}
                                                    fontSize="sm"
                                                    px={3}
                                                    py={1}
                                                    borderRadius="full"
                                                >
                                                    {dateInfo.badge}
                                                </Badge>
                                            )}
                                        </HStack>

                                        <Divider />

                                        <HStack spacing={4} fontSize="sm">
                                            <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                                                <strong>Due:</strong> {dateInfo.text}
                                            </Text>
                                            <Badge
                                                colorScheme={
                                                    assignment.submissions_status === 'Submitted'
                                                        ? 'green'
                                                        : 'gray'
                                                }
                                            >
                                                {assignment.submissions_status}
                                            </Badge>
                                        </HStack>
                                    </VStack>
                                </CardBody>
                            </Card>
                        );
                    })}
                </VStack>
            )}

        </>
    )
}

export default UpcomingAssignments
