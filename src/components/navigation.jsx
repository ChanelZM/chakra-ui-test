import {
    Breadcrumb,
    BreadcrumbLink,
    Box,
    Spacer,
    Image,
    Flex,
    Center,
} from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../constants/sizes';

export default function Navigation() {
    return (
        <Breadcrumb>
            <Center>
                <Flex
                    justify="space-between"
                    width="100%"
                    maxWidth={CONTAINER_WIDTH}
                >
                    <Box width="6rem">
                        <BreadcrumbLink>
                            <Image src="/images/logo.png" />
                        </BreadcrumbLink>
                    </Box>
                    <Spacer />
                    <Box>
                        <BreadcrumbLink href="#about">About</BreadcrumbLink>
                        <BreadcrumbLink href="#work">Work</BreadcrumbLink>
                        <BreadcrumbLink href="Contact">Contact</BreadcrumbLink>
                    </Box>
                </Flex>
            </Center>
        </Breadcrumb>
    );
}
