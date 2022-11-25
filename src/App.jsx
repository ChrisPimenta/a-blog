import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { blogPostsLoader } from './pages/BlogPosts';
import NewPostPage, { newPostAction } from './pages/NewPost';
import PostDetailPage, { postDetailPageLoader } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
    <Route index path="/" element={<WelcomePage />} />
    <Route path="/blog" element={<BlogLayout />}>
      <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
      <Route path=":id" element={<PostDetailPage />} loader={postDetailPageLoader} />
    </Route>
    <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
