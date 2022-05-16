import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    
    &:hover img {
        setAttribute('src', '/images/panther_navbar_2.gif');
    }
`

  

const Logo = () => {
    const pantherIdle = `/images/panther_navbar_1.gif`
    const pantherAttack = `/images/panther_navbar_2.gif`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <img 
                    src={pantherIdle} 
                    width={80} 
                    height={40} 
                    alt="logo" 
                    onMouseOver={e => (e.currentTarget.src = pantherAttack)}
                    onMouseOut={e => (e.currentTarget.src = pantherIdle)}
                    />
                    <Text color={useColorModeValue('gray.800','whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3}>
                    Guillaume Lammens
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo