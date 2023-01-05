import { Card } from './Card/Card';
import { Button } from './Button/Button';

export const BlogCard = ({ blogPost }) => {
  const { title, date } = blogPost;

  return (
    <Card className='blog-post-card'>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa voluptatibus commodi ipsam aliquam, laudantium doloribus, iusto qui harum impedit dignissimos ab quod ad temporibus quos hic modi sunt neque?</p>
      <time>{date}</time>
      <br />
      <Button style={{ marginTop: '10px' }}>Read more</Button>
    </Card>
  )
};
