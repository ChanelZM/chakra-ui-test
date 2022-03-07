import { Heading, Box, Link, Image } from '@chakra-ui/react';

export default function ArticleCard({ title, link, image, type }) {
    return (
        <Box as="article" position="relative">
            <Image src={image} objectFit="cover" />
            <Box position="absolute">
                <Heading as="h1">
                    <Link href={link}>{title}</Link>
                </Heading>
            </Box>
        </Box>
    );
}
