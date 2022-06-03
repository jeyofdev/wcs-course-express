import { gql } from '@apollo/client';

export const GET_WILDERS = gql`
    query wilders {
        wilders {
            _id
            name
            city
            skills {
                votes
                title
            }
        }
    }
`;

export const GET_WILDER_BY_ID = gql`
    query wilder($wilderId: String!) {
        wilder(wilderId: $wilderId) {
            _id
            name
            city
            skills {
                votes
                title
            }
        }
    }
`;
