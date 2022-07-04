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
        numberRatings
        categories
        thumbnailImage
      }
      nextToken
    }
  }
`;

export const listProductsInventory = /* GraphQL */ `
  query ListProductsInventory(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        quantity
        categories
        images
      }
      nextToken
    }
  }
`;
