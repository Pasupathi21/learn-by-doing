const input = {
  statusCode: 200,
  message: "Order fetched successfully",
  responseData: {
    orderId: 987654,
    orderStatus: "DELIVERED",
    createdAt: "2025-01-01T10:30:00Z",
    updatedAt: "2025-01-02T14:15:00Z",

    customerDetails: {
      customerId: 12345,
      fullName: "Ramesh Kumar",
      emailAddress: "ramesh@test.com",
      phoneNumber: "9876543210",
      isPremiumCustomer: true
    },

    shippingAddress: {
      addressLine1: "12, MG Road",
      addressLine2: "Near Central Mall",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      postalCode: "600001"
    },

    paymentDetails: {
      paymentId: "PAY_789456",
      paymentMethod: "CREDIT_CARD",
      paymentStatus: "SUCCESS",
      paidAmount: 50500,
      currency: "INR",
      transactionAt: "2025-01-01T10:31:45Z"
    },

    orderItems: [
      {
        productId: 101,
        productName: "Laptop",
        productCategory: "Electronics",
        quantity: 1,
        unitPrice: 50000,
        discountAmount: 2000,
        taxAmount: 2500,
        totalItemPrice: 50500,
        sellerDetails: {
          sellerId: 9001,
          sellerName: "Tech World",
          sellerRating: 4.6
        }
      },
      {
        productId: 202,
        productName: "Wireless Mouse",
        productCategory: "Accessories",
        quantity: 1,
        unitPrice: 500,
        discountAmount: 0,
        taxAmount: 25,
        totalItemPrice: 525,
        sellerDetails: {
          sellerId: 9002,
          sellerName: "Accessory Hub",
          sellerRating: 4.3
        }
      }
    ],

    pricingSummary: {
      subTotalAmount: 50500,
      totalDiscount: 2000,
      totalTax: 2525,
      shippingFee: 0,
      finalPayableAmount: 51025
    },

    deliveryTimeline: [
      {
        status: "ORDER_PLACED",
        updatedAt: "2025-01-01T10:30:00Z"
      },
      {
        status: "SHIPPED",
        updatedAt: "2025-01-01T18:45:00Z"
      },
      {
        status: "DELIVERED",
        updatedAt: "2025-01-02T14:15:00Z"
      }
    ]
  },

  metaData: {
    requestId: "REQ_123ABC",
    apiVersion: "v1.0",
    responseTimeMs: 120
  }
};


function convertKeys(key) {
    if(!key) return key
    return key.split('').map(ch => (/[A-Z]/.test(ch) ? `_${ch}`: ch).toLowerCase()).join('')
}
function camelToSnakeCase(value){
    if (!value) return value

    // handle object
    if(typeof value === 'object' && !Array.isArray(value)) {
        for(let [k, v] of Object.entries(value)){
            let newKey = convertKeys(k)
            value[newKey] = camelToSnakeCase(v)
            newKey !== k && delete value[k]
        }
        return value
    }else if(Array.isArray(value)){
        return value.map(camelToSnakeCase)
    }else{
        return value
    }
}
let output = camelToSnakeCase(input)
console.log("camelToSnakeCase", JSON.stringify(output, null, 2))