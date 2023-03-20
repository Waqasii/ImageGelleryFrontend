import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
    token
    refreshToken
    refreshExpiresIn
    user{
        username
    }
    }
  }
`;

export const Verify_Token = gql`
  mutation verifyToken{
  verifyToken(token: $token){
    success
  }
}
`;