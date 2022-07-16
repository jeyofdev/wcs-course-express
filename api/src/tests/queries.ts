// import { gql } from 'apollo-server-express';

// export const GET_WILDERS = gql`
//   query wilders {
//     wilders {
//       id
//       name
//       city
//       skills {
//         title
//         votes
//       }
//     }
//   }
// `;

// export const CREATE_WILDER = gql`
//   mutation postWilder($name: String!, $city: String!, $skills: [SkillInput!]!) {
//     postWilder(name: $name, city: $city, skills: $skills) {
//       name
//       city
//       skills {
//         title
//         votes
//       }
//     }
//   }
// `;

// export const UPDATE_WILDER = gql`
//   mutation updateWilder(
//     $updateWilderId: String!
//     $name: String
//     $city: String
//     $skills: [SkillInput!]
//   ) {
//     updateWilder(
//       id: $updateWilderId
//       name: $name
//       city: $city
//       skills: $skills
//     ) {
//       id
//       name
//       city
//       skills {
//         title
//         votes
//       }
//     }
//   }
// `;
