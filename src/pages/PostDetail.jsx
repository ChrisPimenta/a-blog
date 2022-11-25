import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const loadedData = useLoaderData();

  return (
    <BlogPost title={loadedData.title} text={loadedData.body} />
  );
}

export default PostDetailPage;

export function postDetailPageLoader({ params }) {
  const postId = params.id;

  return getPost(postId);
}