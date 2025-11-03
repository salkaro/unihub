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

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const tabs = [
        { id: 'home', label: 'Home', path: '/dashboard' },
        { id: 'physics', label: 'Physics', path: '/module/physics' },
        { id: 'maths-a', label: 'Maths A', path: '/module/maths-a' },
        { id: 'maths-b', label: 'Maths B', path: '/module/maths-b' },
        { id: 'astronomy', label: 'Astronomy', path: '/module/astronomy' },
        { id: 'geoscience', label: 'Geoscience', path: '/module/geoscience' },
    ];

    const handleTabClick = (path: string) => {
        router.push(path);
        onClose();
    };

    const isActiveTab = (path: string) => {
        return pathname === path;
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
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
