import { Flex, Center } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../constants/sizes';

export default function Hero({ children }) {
    return (
        <Center>
            <Flex
                width="100%"
                maxW={CONTAINER_WIDTH}
                padding={{
                    base: 0,
                    lg: '0 1rem',
                }}
            >
                {children}
            </Flex>
        </Center>
    );
}
