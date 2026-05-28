import { Layout } from '@/components/layout/Layout';
import { PostListServer } from '@/components/posts/PostListServer';
import type { Metadata } from 'next';

export const revalidate = 1800;

export const metadata: Metadata = {
  title: 'Blog | WordPress Headless CMS',
  description: 'Browse all blog posts synced from WordPress.',
  openGraph: {
    title: 'Blog | WordPress Headless CMS',
    description: 'Browse all blog posts synced from WordPress.',
    type: 'website',
  },
};

export default function Blog() {
  return (
    <Layout>
      <section className="py-8 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[1.05] mb-4"
              data-testid="text-page-title"
            >
              Blog
            </h1>
            <p 
              className="text-lg text-muted-foreground max-w-2xl"
              data-testid="text-page-description"
            >
              Browse all blog posts synced from WordPress.
            </p>
          </div>

          <PostListServer />
        </div>
      </section>
    </Layout>
  );
}
