import { useState } from 'react';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_POST = gql`
	mutation createPost($post: postI) {
		addPost(post: $post) {
			id
			info
			userName
		}
	}
`;

const AddPost = () => {
	const [ id, setId ] = useState('');
	const [ info, setTitle ] = useState('');
	const [ userName, setUn ] = useState('');
	const [ createPost, { loading, error } ] = useMutation(CREATE_POST, {
		onCompleted: (d) => console.log(d)
	});

	function handleCreatePost(event) {
		event.preventDefault();
		// the mutate function also doesn't return a promise
		createPost({ variables: { post: { id, info, userName } } });
	}

	return (
		<div>
			<h1>New Post</h1>
			<form onSubmit={handleCreatePost}>
				<input onChange={(event) => setId(event.target.value)} />
				<input onChange={(event) => setTitle(event.target.value)} />
				<input onChange={(event) => setUn(event.target.value)} />
				<button disabled={loading} type="submit">
					Submit
				</button>
				{error && <p>{error.message}</p>}
			</form>
		</div>
	);
};
export default AddPost;
