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

export const HEADER_DATA = gql`
query HeaderData{
  userInfo{
    username
    email
    totalPictures
    
  }
}
`;

export const PROFILE_DATA = gql`
query MergedQuery {

  userInfo{
    username
    email
    totalPictures
    
  
}

  imagesByUser{
    id
    imageUrl
    imageFilename
    thumbnailFilename
    thumbnailUrl
    
    
  }

}
`;