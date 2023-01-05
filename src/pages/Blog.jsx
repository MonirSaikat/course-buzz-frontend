import { BlogCard } from '../components/BlogCard';
import './styles/BlogPage.css';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to create a react app ? ',
      date: '2 Jan, 2023'
    }
  ];

  return (
    <div className="container blog-page">
      <h1>BlogPage</h1>

      <div className='posts-list'>
        {posts.map((post) => <BlogCard key={post.id} blogPost={post} />)}
      </div>
    </div>
  );
}

export default BlogPage;
