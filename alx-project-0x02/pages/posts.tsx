// pages/posts.tsx
import { GetStaticProps } from 'next';
import PostCard from '@/components/common/PostCard';
import { PostCardProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface PostsPageProps {
  posts: PostCardProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (

    <div style={{ padding: 32 }}>
      <Header/>
      <h1 style={{ fontSize: '2rem', marginBottom: 24 }}>Posts</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const posts: PostCardProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: String(post.userId), // matches your `userId: string` type
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
