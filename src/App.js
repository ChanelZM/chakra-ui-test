import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { routes } from './routes';
import chakraConfig from './chakraConfig';
import './App.css';
import Navigation from './components/navigation';
import NotFound from './views/notfound';

const theme = extendTheme(chakraConfig);

function App() {
    return (
        <ChakraProvider theme={theme}>
            <>
                <Navigation />
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </>
        </ChakraProvider>
    );
}

export default App;
