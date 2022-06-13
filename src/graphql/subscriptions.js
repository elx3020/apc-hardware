/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem {
    onCreateOrderItem {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem {
    onUpdateOrderItem {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem {
    onDeleteOrderItem {
      id
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      content
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateManuFacturer = /* GraphQL */ `
  subscription OnCreateManuFacturer {
    onCreateManuFacturer {
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
export const onUpdateManuFacturer = /* GraphQL */ `
  subscription OnUpdateManuFacturer {
    onUpdateManuFacturer {
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
export const onDeleteManuFacturer = /* GraphQL */ `
  subscription OnDeleteManuFacturer {
    onDeleteManuFacturer {
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
