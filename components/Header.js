// import Logo from './Logo/book.gif'
import NextLink from 'next/link'
import  Image  from 'next/image'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import {firebase} from '../lib/firebase'


const Header = () => {

  const signout = () => {
    firebase.auth().signOut();
  }

  return (
    <>
    <Box className='width-[100vw] bg-[#1a2e39] h-14 sticky top-0' >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
        {/* <Image src="/abc.png" alt='image' width="45" height="45" style={{marginRight:'5px',marginLeft:'5px',marginTop:'9px'}}/> */}
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              
            {/* <Logo /> */}
            <NextLink href='/'>
                <h1 className='mx-3 ml-3 mt-2 font-light ' style={{fontSize:'20px',color:'#fdf9f0',cursor:'pointer'}}>Dz Academy</h1>
            </NextLink>
            
          </Heading>
        </Flex>

      

        <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon style={{fontSize:'30px',marginTop:'6px',marginRight:'10px',color:'#fdf9d0'}}/>}
                variant="outline"
                aria-label="Options"
              />
              <MenuList style={{backgroundColor:'#1a2e39',borderRadius:'10px',height:'100%',width:'200px'}}>
                
                <NextLink href="/" passHref >
                  <MenuItem as={Link} style={{color:'#fdf9f0',margin:'3px'}}>Home</MenuItem>
                </NextLink>
              
                <NextLink href="/Routine" passHref>
                  <MenuItem as={Link} style={{color:'#fdf9f0',margin:'3px'}}>Notes</MenuItem>
                </NextLink>
               
               
                <MenuItem
                  as={Link}
                  href="https://sport-qui.firebaseapp.com"
                  target="_blank"
                  style={{color:'#fdf9f0',margin:'3px',marginBottom:'5px'}}
                >
                  Quiz
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://suduku-dz.firebaseapp.com/"
                  target="_blank"
                  style={{color:'#fdf9f0',margin:'3px',marginBottom:'5px'}}
                >
                  Suduku
                </MenuItem>
                <NextLink href="/Studio" passHref>
                  <MenuItem as={Link} style={{color:'#fdf9f0',margin:'3px'}}>Admin</MenuItem>
                </NextLink>
                

                <MenuItem
                  as={Link}
                  onClick={signout}
                  
                  style={{color:'#fdf9f0',margin:'3px',marginBottom:'5px'}}
                >
                  sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
       
      </Container>
    </Box>
    </>
  )
}

export default Header
