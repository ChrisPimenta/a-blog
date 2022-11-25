import { redirect, useNavigate, useActionData, useNavigation } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {

  const navigate = useNavigate();
  const actionData = useActionData();

  // Used to get navigation state (so for HTTP requests can use submitting for isLoading)
  const navigation = useNavigation();

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {actionData && actionData.status && <p>{actionData.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  );
}

export default NewPostPage;

export async function newPostAction({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text')
  };

  try {
    await savePost(post);
  } catch (error) {
    if (error.status === 422) {
      //tbd
      throw error;
    }
    throw error;
  }

  return redirect('/blog');
}
