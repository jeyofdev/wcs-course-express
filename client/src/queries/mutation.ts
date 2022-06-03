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

export const UPDATE_WILDER = gql`
    mutation UpdateWilder(
        $wilderId: String!
        $name: String
        $city: String
        $skills: [SkillInput!]
    ) {
        updateWilder(id: $wilderId, name: $name, city: $city, skills: $skills) {
            _id
            name
            city
            skills {
                title
                votes
            }
        }
    }
`;

export const DELETE_WILDER = gql`
    mutation removeWilder($wilderId: String!) {
        removeWilder(wilderId: $wilderId) {
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
