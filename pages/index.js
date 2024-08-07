import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a beginner developer based in Germany.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}></Box>
      </Box>
      <Heading as="h2" variant="page-title">
        FlyingPandaDev.
      </Heading>
    </Container>
  )
}

export default Page
