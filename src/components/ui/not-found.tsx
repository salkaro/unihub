"use client"

import Link from "next/link";
import { Box, Container, Heading, Text, Button, VStack } from "@chakra-ui/react";


const NotFoundPage = () => {
  return (
      <Box minH="100vh" display="flex" flexDirection="column">
          {/* Background gradient section */}
          <Box
              position="relative"
              overflow="hidden"
              bgGradient="linear(to-br, teal.400, blue.500, purple.600)"
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
          >
              {/* Decorative blur elements */}
              <Box
                  position="absolute"
                  top="-10%"
                  right="-5%"
                  w="500px"
                  h="500px"
                  bg="purple.400"
                  opacity={0.3}
                  filter="blur(100px)"
                  borderRadius="full"
              />
              <Box
                  position="absolute"
                  bottom="-10%"
                  left="-5%"
                  w="400px"
                  h="400px"
                  bg="teal.300"
                  opacity={0.3}
                  filter="blur(100px)"
                  borderRadius="full"
              />

              <Container maxW="4xl" position="relative" zIndex={1}>
                  <VStack spacing={8} textAlign="center" color="white">
                      <Heading
                          fontSize={{ base: "8xl", md: "9xl" }}
                          fontWeight="extrabold"
                          lineHeight="1"
                      >
                          404
                      </Heading>

                      <VStack spacing={4}>
                          <Heading
                              as="h1"
                              fontSize={{ base: "3xl", md: "5xl" }}
                              fontWeight="bold"
                          >
                              Page Not Found
                          </Heading>
                          <Text
                              fontSize={{ base: "lg", md: "xl" }}
                              maxW="2xl"
                              opacity={0.95}
                          >
                              Oops! The page you&apos;re looking for doesn&apos;t exist.
                              It might have been moved or deleted.
                          </Text>
                      </VStack>

                      <VStack spacing={4} pt={4}>
                          <Button
                              as={Link}
                              href="/"
                              size="lg"
                              fontSize="lg"
                              px={8}
                              py={7}
                              bg="white"
                              color="teal.600"
                              fontWeight="bold"
                              borderRadius="xl"
                              _hover={{
                                  transform: "translateY(-2px)",
                                  boxShadow: "2xl",
                                  bg: "gray.50",
                              }}
                              transition="all 0.3s"
                              boxShadow="xl"
                          >
                              Go Back Home
                          </Button>

                          <Button
                              as={Link}
                              href="/bank"
                              size="lg"
                              variant="ghost"
                              color="white"
                              fontWeight="semibold"
                              _hover={{
                                  bg: "whiteAlpha.200",
                              }}
                          >
                              Browse Question Bank
                          </Button>
                      </VStack>
                  </VStack>
              </Container>
          </Box>
      </Box>
  )
}

export default NotFoundPage
