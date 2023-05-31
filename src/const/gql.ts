import {  gql} from '@apollo/client';

export const GET_REPOSITORIES =gql`
query SearchRepositories($userQuery: String!, $after: String, $before: String) {
  search(query: $userQuery, type: REPOSITORY, first: 10, after: $after, before: $before ) {
    pageInfo{
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
       }
    edges {
      node {
        ... on Repository {
          id
          url
          description
          name
          stargazers {
            totalCount
          }
          owner {
            avatarUrl
          }
          defaultBranchRef{
            target{
             ... on Commit{
              history(first:1){
               
               edges{
                node{
                 ... on Commit{
                  committedDate
                 }
                }
               }
              }
             }
            }
           }
        
        }
      }
    }
  }
}
`;

export const get_all_queries = gql`query{
    __type(name:"Repository") {
      fields {
        name
        description
        type {
          kind
          name
          description
        }
        args {
          name
          description
          type {
            kind
            name
            description
          }
          defaultValue
        }
      }
    }
  }`

export const GET_CURRENT_USER_REPOS = gql`query currentRepo($after: String, $before: String){
  viewer {
    repositories(first: 10, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER], after: $after, before: $before) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      nodes{
        id
          url
          description
          name
          stargazers {
            totalCount
          }
          owner {
            avatarUrl
          }
          defaultBranchRef{
            target{
             ... on Commit{
              history(first:1){
               
               edges{
                node{
                 ... on Commit{
                  committedDate
                 }
                }
               }
              }
             }
            }
           }
        }
      }
   }
 }`


 export const GET_REPO_BY_ID = gql`query repository($id:  ID!){ 
  node(id: $id){
  ... on Repository {
    id
    url
    description
    name
    stargazers {
      totalCount
    }
    owner {
      avatarUrl
      login
    }
    defaultBranchRef{
      target{
       ... on Commit{
        history(first:1){
         
         edges{
          node{
           ... on Commit{
            committedDate
           }
          }
         }
        }
       }
      }
     }
  }
}
} `