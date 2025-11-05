'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
    Box,
    Flex,
    Button,
    Container,
    useColorMode,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    Show,
    Hide,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { LogOut } from 'lucide-react';

interface Course {
    id: string;
    name: string;
    slug: string;
}

interface StudentCourse {
    name: string;
    full_name: string;
    semester: string;
    year: string;
    num_grades_published: string | null;
    num_assignments: string;
}

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [courses, setCourses] = useState<Course[]>([]);

    // Fetch user's courses from sessionStorage
    useEffect(() => {
        // Subject keywords to look for
        const subjectKeywords = [
            'physics', 'maths', 'math', 'mathematics', 'chemistry', 'biology',
            'computer science', 'cs', 'astronomy', 'geoscience', 'geology',
            'engineering', 'calculus', 'algebra', 'statistics'
        ];

        // Function to extract subject name and create slug
        const extractSubjectInfo = (courseName: string): { name: string; slug: string } | null => {
            const lowerName = courseName.toLowerCase();

            // Check for subject keywords
            for (const keyword of subjectKeywords) {
                if (lowerName.includes(keyword)) {
                    let displayName = '';

                    // Extract the subject name based on keyword
                    if (keyword === 'astronomy' || keyword === 'physics' || keyword === 'chemistry' ||
                        keyword === 'biology' || keyword === 'geology' || keyword === 'geoscience') {
                        // For single-word subjects, just capitalize and optionally add suffix
                        const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);

                        // Check if there's a suffix like "I", "II", "A", "B", etc.
                        const suffixMatch = courseName.match(new RegExp(`${keyword}\\s+(I{1,3}|[A-Z]|\\d+)`, 'i'));
                        if (suffixMatch) {
                            displayName = `${capitalizedKeyword} ${suffixMatch[1]}`;
                        } else {
                            displayName = capitalizedKeyword;
                        }
                    } else if (keyword === 'maths' || keyword === 'math' || keyword === 'mathematics') {
                        // For maths variants, check for suffixes
                        const suffixMatch = courseName.match(/(?:maths?|mathematics)\s+(I{1,3}|[A-Z]|\d+)/i);
                        if (suffixMatch) {
                            displayName = `Maths ${suffixMatch[1]}`;
                        } else {
                            displayName = 'Mathematics';
                        }
                    } else if (keyword === 'computer science' || keyword === 'cs') {
                        const suffixMatch = courseName.match(/(?:computer science|cs)\s+(I{1,3}|[A-Z]|\d+)/i);
                        if (suffixMatch) {
                            displayName = `Computer Science ${suffixMatch[1]}`;
                        } else {
                            displayName = 'Computer Science';
                        }
                    } else {
                        // For other keywords (calculus, algebra, statistics, engineering)
                        const capitalizedKeyword = keyword.split(' ').map(word =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');

                        const suffixMatch = courseName.match(new RegExp(`${keyword}\\s+(I{1,3}|[A-Z]|\\d+)`, 'i'));
                        if (suffixMatch) {
                            displayName = `${capitalizedKeyword} ${suffixMatch[1]}`;
                        } else {
                            displayName = capitalizedKeyword;
                        }
                    }

                    // Create slug from display name
                    const slug = displayName
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .trim();

                    return {
                        name: displayName,
                        slug: slug
                    };
                }
            }

            return null;
        };

        const fetchCourses = () => {
            try {
                // Try to get from sessionStorage first
                const cachedData = sessionStorage.getItem('gs-courses');
                console.log(cachedData)

                if (cachedData) {
                    const parsedData = JSON.parse(cachedData);

                    // Extract relevant courses
                    const extractedCourses: Course[] = [];

                    // Parse the cache structure: data.student contains courses
                    if (parsedData.data && parsedData.data.student) {
                        const studentCourses = parsedData.data.student as Record<string, StudentCourse>;

                        // Iterate through student courses
                        Object.entries(studentCourses).forEach(([courseId, course]) => {
                            const courseName = course.full_name || course.name || '';
                            const subjectInfo = extractSubjectInfo(courseName);

                            if (subjectInfo) {
                                extractedCourses.push({
                                    id: courseId,
                                    name: subjectInfo.name,
                                    slug: subjectInfo.slug
                                });
                            }
                        });
                    }

                    // Remove duplicates based on slug
                    const uniqueCourses = extractedCourses.filter((course, index, self) =>
                        index === self.findIndex((c) => c.slug === course.slug)
                    );

                    setCourses(uniqueCourses);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    // Build tabs from courses
    const tabs = [
        { id: 'home', label: 'Home', path: '/dashboard' },
        ...courses.map(course => ({
            id: course.slug,
            label: course.name,
            path: `/dashboard/module/${course.slug}`
        }))
    ];

    const handleTabClick = (path: string) => {
        router.push(path);
        onClose();
    };

    const isActiveTab = (path: string) => {
        return pathname === path;
    };

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.clear();

        // Redirect to login page
        router.push('/');
        onClose();
    };

    return (
        <Box
            as="nav"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            borderBottom="1px"
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            position="sticky"
            top={0}
            zIndex={1000}
            boxShadow="sm"
        >
            <Container maxW="container.xl">
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center" gap={2}>
                        <Box
                            fontSize="xl"
                            fontWeight="bold"
                            bgGradient="linear(to-r, blue.400, purple.500)"
                            bgClip="text"
                            mr={{ base: 2, md: 4 }}
                        >
                            UniHub
                        </Box>
                        {/* Desktop Navigation */}
                        <Hide below="md">
                            <Flex gap={1}>
                                {tabs.map((tab) => (
                                    <Button
                                        key={tab.id}
                                        size="md"
                                        variant={isActiveTab(tab.path) ? 'solid' : 'ghost'}
                                        colorScheme={isActiveTab(tab.path) ? 'blue' : 'gray'}
                                        onClick={() => handleTabClick(tab.path)}
                                        _hover={{
                                            bg: isActiveTab(tab.path)
                                                ? 'blue.600'
                                                : colorMode === 'light'
                                                    ? 'gray.100'
                                                    : 'gray.700',
                                        }}
                                        transition="all 0.2s"
                                    >
                                        {tab.label}
                                    </Button>
                                ))}
                            </Flex>
                        </Hide>
                    </Flex>

                    <Flex gap={2} alignItems="center">
                        <Hide below="md">
                            <IconButton
                                aria-label="Logout"
                                icon={<LogOut size={20} />}
                                variant="ghost"
                                size="md"
                                onClick={handleLogout}
                            />
                        </Hide>
                        <IconButton
                            aria-label="Toggle color mode"
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            onClick={toggleColorMode}
                            variant="ghost"
                            size="md"
                        />
                        {/* Mobile Menu Button */}
                        <Show below="md">
                            <IconButton
                                aria-label="Open menu"
                                icon={<HamburgerIcon />}
                                onClick={onOpen}
                                variant="ghost"
                                size="md"
                            />
                        </Show>
                    </Flex>
                </Flex>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                        bgGradient="linear(to-r, blue.400, purple.500)"
                        bgClip="text"
                    >
                        UniHub Menu
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={2} align="stretch">
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.id}
                                    size="lg"
                                    variant={isActiveTab(tab.path) ? 'solid' : 'ghost'}
                                    colorScheme={isActiveTab(tab.path) ? 'blue' : 'gray'}
                                    onClick={() => handleTabClick(tab.path)}
                                    justifyContent="flex-start"
                                    w="full"
                                >
                                    {tab.label}
                                </Button>
                            ))}
                            <Button
                                size="lg"
                                colorScheme="red"
                                variant="ghost"
                                onClick={handleLogout}
                                justifyContent="flex-start"
                                w="full"
                                mt={4}
                            >
                                Logout
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
