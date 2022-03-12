import * as React from 'react';
import { Grid, List, ListItem } from '@chakra-ui/react';
import Container from '../components/container';
import VerticalArticle from '../components/vertical-article';
import ArticleCard from '../components/article-card';
import ArticleListItem from '../components/article-list-item';
import { latestPosts } from '../data/latest';
import useBreakpoints from '../hooks/useBreakpoints';

export default function Home() {
    const { isTablet } = useBreakpoints();

    const heroPosts = React.useMemo(() => {
        if (isTablet) return latestPosts.slice(0, 2);
        return latestPosts.slice(0, 1);
    }, [isTablet]);

    const secondPosts = React.useMemo(() => {
        if (isTablet) return [];
        return latestPosts.slice(2, 4);
    }, [isTablet]);

    const otherPosts = React.useMemo(() => {
        if (isTablet) return latestPosts.slice(2, latestPosts.length);
        return latestPosts.slice(4, latestPosts.length);
    }, [isTablet]);

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
                    <Grid templateColumns="repeat(2, 1fr)" gap="1.6em">
                        {secondPosts.map((post) => (
                            <VerticalArticle key={post.id} {...post} />
                        ))}
                    </Grid>
                )}
                <List>
                    {otherPosts.map((post) => (
                        <ListItem key={post.id}>
                            <ArticleListItem {...post} />
                        </ListItem>
                    ))}
                </List>
            </Container>
        </main>
    );
}
