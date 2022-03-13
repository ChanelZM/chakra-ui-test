import { Image, AspectRatio } from '@chakra-ui/react';

export default function ArticleImage({ image, width, borderRadius }) {
    return (
        <AspectRatio
            width="100%"
            maxWidth={width ?? '100%'}
            ratio={4 / 3}
            borderRadius={borderRadius ?? '0.4rem'}
            overflow="hidden"
        >
            <Image
                src={image}
                width="100%"
                height="auto"
                objectFit="cover"
                transition="transform 0.2s"
                transform="scale(1)"
                _groupHover={{ transform: 'scale(1.05)' }}
            />
        </AspectRatio>
    );
}
