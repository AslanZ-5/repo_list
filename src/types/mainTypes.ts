export interface NodeT  {
    __typename: string;
    description: string;
    id: number;
    name: string;
    owner: OwnerT
    stargazers:stargazersT
    defaultBranchRef: defaultBranchRefT
    url: string
}

export interface OwnerT {
    __typename: string;
    avatarUrl: string
}

export interface defaultBranchRefT{
    __typename: string;
    target:target
}
export interface target{
    __typename: string;
    history:history
}
export interface history {
    __typename: string;
    edges: nodes[]
}
export interface nodes {
    __typename: string;
    node: commit
}
export interface commit {
    __typename: string;
    committedDate: string
}

export interface stargazersT {
    __typename: string;
    totalCount:number
}

export interface PageInfoT {
    __typename:string;
    endCursor: string;
    startCursor: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean

}
