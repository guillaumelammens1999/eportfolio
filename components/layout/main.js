import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box,Container } from '@chakra-ui/react'


const Main = ({children,router}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16" />
                <title>Guillaume Lammens - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main