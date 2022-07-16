/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
      id
      src
      alt
      caption
      createdAt
      updatedAt
    }
  }
`;
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
      id
      src
      alt
      caption
      createdAt
      updatedAt
    }
  }
`;
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
      id
      src
      alt
      caption
      createdAt
      updatedAt
    }
  }
`;
