import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { routes } from './routes';
import './App.css';
import Navigation from './components/navigation';
import NotFound from './views/notfound';

function App() {
    return (
        <ChakraProvider>
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
