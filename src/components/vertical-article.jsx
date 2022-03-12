import { Box, Image, Heading, Link } from '@chakra-ui/react';

export default function VerticalArticle({ title, image, link }) {
    return (
        <Box as="article" position="relative">
            <Image src={image} objectFit="cover" />
            <Box position="absolute">
                <Heading as="h2">
                    <Link href={link}>{title}</Link>
                </Heading>
            </Box>
        </Box>
    );
}
