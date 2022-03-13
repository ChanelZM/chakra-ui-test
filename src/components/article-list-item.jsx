import * as React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import ArticleImage from './article-image';

export default function ArticleListItem({ title, link, description, image }) {
    return (
        <Flex
            as="article"
            flexDirection={{ base: 'row', lg: 'column' }}
            gap="1.6em"
            role="group"
            position="relative"
        >
            <ArticleImage
                image={image}
                width={{ base: '10.4rem', lg: '100%' }}
            />
            <Flex flexDirection="column" justifyContent="center">
                <Heading
                    as="h2"
                    fontSize={{ base: '1.4rem', lg: '1.8rem' }}
                    lineHeight="1"
                >
                    <Link
                        href={link}
                        transition="color 0.2s"
                        _hover={{ cursor: 'pointer', color: 'red' }}
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
                <Text
                    display={{ base: 'none', lg: 'block' }}
                    fontSize="1.6rem"
                    color="textGrey"
                    paddingTop="0.8rem"
                >
                    {description}
                </Text>
            </Flex>
        </Flex>
    );
}
