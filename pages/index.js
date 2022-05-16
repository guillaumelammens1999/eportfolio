import { Box, Button, Container,Divider,Heading, Image, ListItem, UnorderedList, useColorModeValue} from "@chakra-ui/react"
import Head from "next/head"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { AtSignIcon } from "@chakra-ui/icons"
import { BioSection,BioYear, WorkDetails,CompanyDetails,WorkTasks} from "../components/bio"
import animation from "../public/images/anim2.gif"

const  Page = () => {

    return (
    <Container>

        <Box borderRadius="lg" w="100%" h="100%" align="center">
        <Image 
                borderColor="whiteAlpha.800"
                borderWidth={4}
                borderStyle="solid"
                maxWidth="500px"
                maxHeight="400px"
                display="inline-block"
                borderRadius="3xl"
                src="/images/mario_gisne.gif"
                alt="Profile image"
                margin="30px 0px"
                />

        </Box>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={4} mb={6} mt={6} align="center">
            Hello, I&apos;m a Computer Science student based in Belgium!
        </Box>
        <Box display={{md:'flex'}}>
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
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Profile
            </Heading>
            <Paragraph>Hardwerkende IT student op zoek naar werk. Bedreven in het omgaan met technologie, waaronder diverse social-mediaplatforms en office-programma’s.
            </Paragraph>
            <Paragraph>
            Beschikt over gevorderde computervaardigheden op vlak van Netwerkbeheer en Data regularisatie. Heeft een positieve attitude en is bereid en gemotiveerd om nieuwe programma’s te leren beheersen.
            </Paragraph>
            <Box
            align="center" my={4}>
            <Button leftIcon={<AtSignIcon />} colorScheme="teal" >
               <a href="https://www.linkedin.com/in/guillaume-lammens-39702a23b/"> Connect with me on Linkedin </a>
            </Button>
            </Box>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Biography
            </Heading>
            <BioSection>
                <BioYear>1995</BioYear>
                Geboren in Gent, België.
            </BioSection>
            <BioSection>
                <BioYear>2012-2017</BioYear>
                Afgestudeerd in 2017 aan Sint-Bavo Humaniora, Wetenschappen-Moderne Talen. 
            </BioSection>
            <BioSection>
                <BioYear>2018</BioYear>
                Completed the preparatory year of Dutch in the university of Gent.
            </BioSection>
            <BioSection>
                <BioYear>Now </BioYear>
                Bachelor student in computer science at Hogent. 
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Work Experience
            </Heading>
            <BioSection>
                <BioYear>Foodipro </BioYear><CompanyDetails>Agadir, Morocco -  March 2017 - June 2018</CompanyDetails>
                <WorkDetails>Programmer</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                        Managed the company's internal network and worked on the creation of a managment solution written
                        with PHP, mySQL, and bootstrap.
                    </ListItem>
                    <ListItem>
                        Ensured and improved user authentification and data security.
                    </ListItem>
                    <ListItem>
                        Was responsible to help my collegues troubleshouting their IT related issues
                    </ListItem>
                    <ListItem>
                        Was responsible for for designing banners, flayers, contact cards , digital posts and advertisments and
                        video content creation using Adobe photoshop, illustrator and premiere.
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>

            <BioSection>
                <BioYear>ProBuns's </BioYear><CompanyDetails>Agadir, Morocco -  July 2016 - December 2016</CompanyDetails>
                <WorkDetails>Programmer / IT helpdesk</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                    Creation of a software that manages daily income and uses data to show it in graphes, Helped the
                    accountant to do 30% less and faster work, written in VBA.
                    </ListItem>
                    <ListItem>
                    Installing and configuring computer hardware, software, systems, networks, printers and scanners.
                    Monitoring and maintaining computer systems and networks.
                    </ListItem>
                    <ListItem>
                    Creating delivery vehicle wrapping designs.
                    </ListItem>
                    <ListItem>
                    created probuns.ma website using wordpress.
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>
            <BioSection>
                <BioYear>Vala Orange</BioYear><CompanyDetails>Agadir, Morocco -  June 2014 - August 2014</CompanyDetails>
                <WorkDetails>Internship</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                        Worked on an algorithm that improved text correction and detects spam data in the database
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>
            <BioSection>
                <BioYear>Net Impression</BioYear><CompanyDetails>Agadir, Morocco -  June 2014 - August 2014</CompanyDetails>
                <WorkDetails>Internship</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                        Helped the design team working on client tickets
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>
     
        </Section>


        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ❤️
            </Heading>
            <Paragraph>
                Coding, Game development, Pixelart, Playing Banjo, Painting, 
                Machine Learning, Robotics, Arduino
            </Paragraph>
        </Section>

    </Container>
    )
}

export default Page
