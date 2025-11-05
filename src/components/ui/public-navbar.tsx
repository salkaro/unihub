"use client";

import { Box, Container, HStack, Heading, Button, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function PublicNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            as="nav"
            bg="white"
            borderBottom="1px"
            borderColor="gray.200"
            position="sticky"
            top={0}
            zIndex={100}
            boxShadow="sm"
        >
            <Container maxW="6xl" py={4}>
                <HStack justify="space-between" align="center">
                    {/* Logo */}
                    <Heading
                        as={Link}
                        href="/"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="bold"
                        bgGradient="linear(to-r, teal.500, blue.500)"
                        bgClip="text"
                        cursor="pointer"
                        _hover={{ opacity: 0.8 }}
                        transition="opacity 0.2s"
                    >
                        UniHub
                    </Heading>

                    {/* Desktop Navigation */}
                    <HStack spacing={6} display={{ base: "none", md: "flex" }}>
                        <Button
                            as={Link}
                            href="/"
                            variant="ghost"
                            fontWeight="semibold"
                            _hover={{ bg: "gray.100" }}
                        >
                            Home
                        </Button>
                        <Button
                            as={Link}
                            href="/bank"
                            variant="ghost"
                            fontWeight="semibold"
                            _hover={{ bg: "gray.100" }}
                        >
                            Question Bank
                        </Button>
                        <Button
                            as={Link}
                            href="/login"
                            colorScheme="blue"
                            fontWeight="semibold"
                        >
                            Sign In
                        </Button>
                    </HStack>

                    {/* Mobile Menu Button */}
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        display={{ base: "flex", md: "none" }}
                        onClick={onOpen}
                        variant="ghost"
                    />
                </HStack>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        <Heading
                            fontSize="xl"
                            bgGradient="linear(to-r, teal.500, blue.500)"
                            bgClip="text"
                        >
                            UniHub
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={4} align="stretch" pt={4}>
                            <Button
                                as={Link}
                                href="/"
                                variant="ghost"
                                fontWeight="semibold"
                                justifyContent="flex-start"
                                onClick={onClose}
                            >
                                Home
                            </Button>
                            <Button
                                as={Link}
                                href="/bank"
                                variant="ghost"
                                fontWeight="semibold"
                                justifyContent="flex-start"
                                onClick={onClose}
                            >
                                Question Bank
                            </Button>
                            <Button
                                as={Link}
                                href="/login"
                                colorScheme="blue"
                                fontWeight="semibold"
                                onClick={onClose}
                            >
                                Sign In
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
