import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Courses from './Courses';
import AddPost from './addpost';

const client = new ApolloClient({
	uri: 'https://swerky-gql0.herokuapp.com/graphql/',
	// fetchOptions: {
	// 	mode: 'no-cors'
	// },
	// headers: {
	// 	'Access-Control-Allow-Credentials': true
	// },
	onError: (e) => {
		console.log(e);
	}
});

const App = () => (
	<ApolloProvider client={client}>
		<div>
			<Courses />
			<AddPost />
		</div>
	</ApolloProvider>
);
export default App;
