import { gql } from 'apollo-server-express';

export const GET_WILDERS = gql`
  query wilders {
    wilders {
      id
      name
      city
      skills {
        title
        votes
      }
    }
  }
`;

export const GET_WILDER_BY_ID = gql`
  query wilder($wilderId: String!) {
    wilder(wilderId: $wilderId) {
      id
      name
      city
      skills {
        id
        title
        votes
      }
    }
  }
`;

export const CREATE_WILDER = gql`
  mutation postWilder($name: String!, $city: String!, $skills: [SkillInput!]!) {
    postWilder(name: $name, city: $city, skills: $skills) {
      id
      name
      city
      skills {
        title
        votes
      }
    }
  }
`;

export const REMOVE_WILDER = gql`
  mutation removeWilder($id: String!) {
    removeWilder(wilderId: $id) {
      id
      name
      city
      skills {
        id
        title
        votes
      }
    }
  }
`;
