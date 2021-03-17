import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Course from './Course';

const Courses = () => (
	<Query
		query={gql`
			{
				posts {
					id
					info
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			if (loading) return <p>loading..</p>;
			if (error) return <p>Error!</p>;
			return data.posts.map((course) => <Course {...course} />);
		}}
	</Query>
);
export default Courses;
