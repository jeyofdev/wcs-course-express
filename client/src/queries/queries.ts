import { gql } from '@apollo/client';

export const GET_WILDERS = gql`
    query Wilders {
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
