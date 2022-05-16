import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import  { ProjectGridItem } from '../components/grid-item'
import thumbUlteam from '../public/images/ulteam-banner.jpg'
import thumbFoodipro from '../public/images/foodipro-banner.jpg'

const Projects = () => {
    
    return (
        <Container>
            <Heading mt={{ base: 4,md: 0}} as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,1]} gap={6}>
                <Section>
                    <ProjectGridItem id="ulteam" title="Ulteam" thumbnail={thumbUlteam}>
                        Webshop platform to buy games
                    </ProjectGridItem>
                <Section>
                    <ProjectGridItem id="sgsfoodipro" title="SGS-foodiPro" thumbnail={thumbFoodipro}>
                        Sales, inventory, products and delivery system manager
                    </ProjectGridItem>
                </Section>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects