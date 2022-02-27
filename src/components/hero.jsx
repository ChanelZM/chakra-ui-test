import { Flex, Center } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../constants/sizes';

export default function Hero() {
    return (
        <Center>
            <Flex width="100%" maxW={CONTAINER_WIDTH}>
                <h1>Hello World!</h1>
            </Flex>
        </Center>
    );
}
