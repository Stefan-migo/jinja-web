import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.VITE_BLOGJINJA_ENDPOINT;

export default async function handler(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.VITE_GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({ error: 'Failed to create comment' });
  }
}
