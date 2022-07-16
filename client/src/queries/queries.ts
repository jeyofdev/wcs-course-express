import { gql } from '@apollo/client';

export const GET_WILDERS = gql`
    query wilders {
        wilders {
            id
            name
            city
            skills {
                votes
                title
            }
        }
    }
`;

export const GET_WILDER_BYid = gql`
    query wilder($wilderId: String!) {
        wilder(wilderId: $wilderId) {
            id
            name
            city
            skills {
                votes
                title
            }
        }
    }
`;
