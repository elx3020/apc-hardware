/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createManuFacturer = /* GraphQL */ `
  mutation CreateManuFacturer(
    $input: CreateManuFacturerInput!
    $condition: ModelManuFacturerConditionInput
  ) {
    createManuFacturer(input: $input, condition: $condition) {
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
export const updateManuFacturer = /* GraphQL */ `
  mutation UpdateManuFacturer(
    $input: UpdateManuFacturerInput!
    $condition: ModelManuFacturerConditionInput
  ) {
    updateManuFacturer(input: $input, condition: $condition) {
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
export const deleteManuFacturer = /* GraphQL */ `
  mutation DeleteManuFacturer(
    $input: DeleteManuFacturerInput!
    $condition: ModelManuFacturerConditionInput
  ) {
    deleteManuFacturer(input: $input, condition: $condition) {
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
