/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      lastname
      shippingAddress
      orders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastname
        shippingAddress
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        userOrdersId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($product_id: ID!) {
    getProduct(product_id: $product_id) {
      product_id
      name
      model
      image
      manufacturerID
      manufacturer {
        manufacturer_id
        name
        logo
        productID
        createdAt
        updatedAt
      }
      description
      price
      discountStatus
      discountAmount
      status
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $product_id: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      product_id: $product_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        product_id
        name
        model
        image
        manufacturerID
        description
        price
        discountStatus
        discountAmount
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getManuFacturer = /* GraphQL */ `
  query GetManuFacturer($manufacturer_id: ID!) {
    getManuFacturer(manufacturer_id: $manufacturer_id) {
      manufacturer_id
      name
      logo
      productID
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listManuFacturers = /* GraphQL */ `
  query ListManuFacturers(
    $manufacturer_id: ID
    $filter: ModelManuFacturerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listManuFacturers(
      manufacturer_id: $manufacturer_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        manufacturer_id
        name
        logo
        productID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
