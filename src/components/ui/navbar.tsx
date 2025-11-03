'use client';

import React from 'react';
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

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const tabs = [
        { id: 'home', label: 'Home', path: '/dashboard' },
        { id: 'physics', label: 'Physics', path: '/dashboard/module/physics' },
        { id: 'maths-a', label: 'Maths A', path: '/dashboard/module/maths-a' },
        { id: 'maths-b', label: 'Maths B', path: '/dashboard/module/maths-b' },
        { id: 'astronomy', label: 'Astronomy', path: '/dashboard/module/astronomy' },
        { id: 'geoscience', label: 'Geoscience', path: '/dashboard/module/geoscience' },
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
