export const listShortProducts = /* GraphQL */ `
  query ListShortProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        rating
        categories
        images
      }
      nextToken
    }
  }
`;
