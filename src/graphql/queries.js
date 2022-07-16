/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      name
      price
      quantity
      model
      rating
      numberRatings
      categories
      thumbnailImage
      images
      manufacturer
      shortDescription
      description
      discountStatus
      discountAmount
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
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
        model
        rating
        numberRatings
        categories
        thumbnailImage
        images
        manufacturer
        shortDescription
        description
        discountStatus
        discountAmount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
      id
      src
      alt
      caption
      createdAt
      updatedAt
    }
  }
`;
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        src
        alt
        caption
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
