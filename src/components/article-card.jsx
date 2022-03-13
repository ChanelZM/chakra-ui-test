import { Heading, Box, Link } from '@chakra-ui/react';
import ArticleType from './article-type';
import ArticleImage from './article-image';

export default function ArticleCard({ title, link, image, type }) {
    return (
        <Box as="article" position="relative" role="group" overflow="hidden">
            <ArticleImage
                image={image}
                borderRadius={{ base: '0', lg: '0.4rem' }}
            />
            <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                top="0"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-start"
                padding={{ base: '25% 1em 1em 1em' }}
                _before={{
                    position: 'absolute',
                    display: 'block',
                    content: '""',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.7))',
                    borderRadius: '0 0 0.4rem 0.4rem',
                }}
            >
                {(type === 'liveblog' || type === 'video') && (
                    <ArticleType type={type} />
                )}
                <Heading as="h1" color="white" zIndex="1">
                    <Link
                        href={link}
                        fontSize={{ base: '2.2rem', lg: '2.8rem' }}
                        lineHeight={{ base: '2.4rem' }}
                        _hover={{ textDecoration: 'none' }}
                        _before={{
                            position: 'absolute',
                            content: '""',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                    >
                        {title}
                    </Link>
                </Heading>
            </Box>
        </Box>
    );
}
