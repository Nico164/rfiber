import { extendTheme, ChakraProvider, Button } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper/wrapper';
import { useRoutes } from 'react-router-dom';
import { routes } from './utils/routers';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function ChakraApp() {
  let element = useRoutes(routes);
  return (
    <ChakraProvider theme={theme}>
      {element}
    </ChakraProvider>
  )
}

export default ChakraApp;
