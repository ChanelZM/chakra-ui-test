import * as React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Container from '../components/container';
import VerticalArticle from '../components/vertical-article';
import ArticleCard from '../components/article-card';
import ArticleListItem from '../components/article-list-item';
import { latestPosts } from '../data/latest';
import useBreakpoints from '../hooks/useBreakpoints';

export default function Home() {
    const { isLaptop } = useBreakpoints();

    const heroPosts = React.useMemo(() => {
        if (isLaptop) return latestPosts.slice(0, 2);
        return latestPosts.slice(0, 1);
    }, [isLaptop]);

    const secondPosts = React.useMemo(() => {
        if (isLaptop) return [];
        return latestPosts.slice(2, 4);
    }, [isLaptop]);

    const otherPosts = React.useMemo(() => {
        if (isLaptop) return latestPosts.slice(2, latestPosts.length);
        return latestPosts.slice(4, latestPosts.length);
    }, [isLaptop]);

    return (
        <main>
            <Container>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        lg: 'repeat(2, 1fr)',
                    }}
                    gap={{ base: '3.2rem', '2xl': '3.6rem' }}
                    marginBottom={{ base: '1.6rem' }}
                >
                    {heroPosts.map((post) => (
                        <ArticleCard key={post.id} {...post} />
                    ))}
                </Grid>
                {secondPosts.length > 0 && (
                    <Grid
                        templateColumns="repeat(2, 1fr)"
                        gap="1.6em"
                        padding="0 1.6rem 2.4rem 1.6rem"
                    >
                        {secondPosts.map((post) => (
                            <VerticalArticle key={post.id} {...post} />
                        ))}
                    </Grid>
                )}
                <Grid
                    as="ul"
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    padding={{ base: '0 1.6rem 2.4rem 1.6rem', lg: '0' }}
                    gap={{ lg: '3.2rem' }}
                >
                    {otherPosts.map((post) => (
                        <GridItem
                            key={post.id}
                            as="li"
                            padding={{ base: '1.6rem 0' }}
                            borderBottom={{
                                base: '1px solid lightGrey',
                                lg: 'none',
                            }}
                            borderColor="lightGrey"
                        >
                            <ArticleListItem {...post} />
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
