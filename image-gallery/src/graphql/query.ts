import { gql } from '@apollo/client';

export const ALL_IMGAES_QUERY = gql`
query allImages{
  imagesByUser{
    id
    imageUrl
    imageFilename
    thumbnailFilename
    thumbnailUrl
    
    
  }
}
`;