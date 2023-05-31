import {  gql} from '@apollo/client';

export const GET_REPOSITORIES =gql`
query SearchRepositories($userQuery: String!, $after: String) {
  search(query: $userQuery, type: REPOSITORY, first: 10, after: $after) {
    pageInfo{
        endCursor
        startCursor
        hasNextPage
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

export const GET_CURRENT_USER_REPOS = gql`query currentRepo($after: String){
  viewer {
    repositories(first: 10, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER], after: $after) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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