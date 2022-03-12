import { Box, Center } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../constants/sizes';

export default function Container({ children }) {
    return (
        <Center>
            <Box
                width="100%"
                maxW={CONTAINER_WIDTH}
                padding={{
                    base: 0,
                    lg: '0 1.6rem',
                }}
            >
                {children}
            </Box>
        </Center>
    );
}
