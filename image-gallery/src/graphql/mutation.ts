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


export const ADD_IMAGE = gql`
mutation createImage($input_data: CreateImageArguments!) {
  addUpdateImage(inputData: $input_data) {
    image {
      id
      imageUrl
      imageFilename
      thumbnailUrl
      thumbnailFilename
    }
  }
}
`

export const DELETE_IMAGE = gql`
mutation DeleteImage($input_data: DeleteImageArguments!) {
  deleteImage(inputData: $input_data) {
    message 
    success
  }
}
`