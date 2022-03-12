import { Heading, Box, Link, Image, Text } from '@chakra-ui/react';

export default function ArticleCard({ title, link, image, type }) {
    return (
        <Box
            as="article"
            position="relative"
            role="group"
            borderRadius="0.4rem"
            overflow="hidden"
        >
            <Image
                src={image}
                objectFit="cover"
                width="100%"
                height="100%"
                transition="transform 0.2s"
                transform="scale(1)"
                _groupHover={{ transform: 'scale(1.05)' }}
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
                }}
            >
                {(type === 'liveblog' || type === 'video') && (
                    <Text
                        display="inline-block"
                        backgroundColor="red"
                        color="white"
                        fontSize="1.6rem"
                        fontWeight="bold"
                        zIndex="1"
                        padding="0.5rem 1.2rem 0.5rem 2.5rem"
                        marginBottom="1.2rem"
                        lineHeight="1"
                        borderRadius="2rem"
                    >
                        {type}
                    </Text>
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
