import { Box, Heading, Link } from '@chakra-ui/react';
import ArticleImage from './article-image';

export default function VerticalArticle({ title, image, link }) {
    return (
        <Box as="article" position="relative" role="group">
            <ArticleImage image={image} />
            <Heading as="h2" fontSize="1.4rem" paddingTop="0.8rem">
                <Link
                    href={link}
                    _before={{
                        position: 'absolute',
                        content: '""',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    transition="color 0.2s"
                    _hover={{ color: 'red' }}
                >
                    {title}{' '}
                </Link>
            </Heading>
        </Box>
    );
}
