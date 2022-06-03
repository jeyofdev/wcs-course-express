import { gql } from '@apollo/client';

export const CREATE_WILDER = gql`
    mutation postWilder(
        $name: String!
        $city: String!
        $skills: [SkillInput!]!
    ) {
        postWilder(name: $name, city: $city, skills: $skills) {
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

export const DELETE_WILDER = gql`
    mutation removeWilder($id: String!) {
        removeWilder(wilderId: $id) {
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
