import { Box, Button, Container,Divider,Heading, Image, ListItem, UnorderedList, useColorModeValue} from "@chakra-ui/react"
import Head from "next/head"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { AtSignIcon } from "@chakra-ui/icons"
import { BioSection,BioYear, WorkDetails,CompanyDetails,WorkTasks} from "../components/bio"
import animation from "../public/images/anim2.gif"

const  Contact = () => {

    return (
    <Container>

        <Box display={{md:'flex'}}  mt={{ md: 5}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Guillaume Lammens
                </Heading>
                <p>Pixelart, Computer science, games</p>
            </Box>
            <Box
            flexShrink={0}
            mt={{ base: 4,md: 0}}
            ml={{ md: 6}}
            align="center"
            >
                <Image 
                borderColor="whiteAlpha.800"
                borderWidth={4}
                borderStyle="solid"
                maxWidth="200px"
                maxHeight="200px"
                display="inline-block"
                borderRadius="full"
                src="/images/gisne.jpg"
                alt="Profile image"
                />

            </Box>
        </Box>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Biography
            </Heading>
            <BioSection>
                <BioYear>GSM</BioYear>
                +3293061057
            </BioSection>
            <BioSection>
                <BioYear>Adres</BioYear>
                Belgie, Gent 9000 
            </BioSection>
            <BioSection>
                <BioYear>email</BioYear>
                lammensguillaume1999@gmail.com
            </BioSection>

        </Section>
    </Container>
    )
}

export default Contact
