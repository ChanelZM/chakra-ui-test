import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import * as React from 'react';

export default function ArticleListItem({ title, link, description }) {
    return (
        <Flex
            as="article"
            flexDirection={{ base: 'row', lg: 'column' }}
            gap="1.6em"
        >
            <Heading as="h2">
                <Link href={link}>{title}</Link>
            </Heading>
            <Text display={{ base: 'none', lg: 'block' }}>{description}</Text>
        </Flex>
    );
}
