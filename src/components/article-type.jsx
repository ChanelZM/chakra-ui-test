import { Text } from '@chakra-ui/react';

export default function ArticleType({ type }) {
    return (
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
    );
}
