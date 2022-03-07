import Hero from '../components/hero';
import ArticleCard from '../components/article-card';
import { latestPosts } from '../data/latest';

export default function Home() {
    const heroPosts = latestPosts.slice(0, 2);
    return (
        <main>
            <Hero>
                {heroPosts.map((post) => (
                    <ArticleCard {...post} />
                ))}
            </Hero>
        </main>
    );
}
