export const GET_WILDERS = `
  query wilders {
    wilders {
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
