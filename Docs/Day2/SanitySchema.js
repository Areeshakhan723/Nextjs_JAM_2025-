// sanity.schema.js

export default {
  name: "ecommerce",
  type: "document",
  title: "E-Commerce Platform",
  fields: [
    // User Schema
    {
      name: "user",
      type: "document",
      title: "User",
      fields: [
        { name: "userID", type: "string", title: "User ID" },
        { name: "name", type: "string", title: "Full Name" },
        { name: "email", type: "string", title: "Email Address" },
        { name: "password", type: "string", title: "Password", hidden: true },
        {
          name: "wishlist",
          type: "array",
          title: "Wishlist",
          of: [{ type: "reference", to: [{ type: "product" }] }],
        },
        {
          name: "orders",
          type: "array",
          title: "Orders",
          of: [{ type: "reference", to: [{ type: "order" }] }],
        },
      ],
    },

    // Product Schema
    {
      name: "product",
      type: "document",
      title: "Product",
      fields: [
        { name: "productID", type: "string", title: "Product ID" },
        { name: "title", type: "string", title: "Product Title" },
        { name: "description", type: "text", title: "Product Description" },
        { name: "price", type: "number", title: "Price" },
        { name: "image", type: "image", title: "Product Image" },
        { name: "category", type: "string", title: "Category" },
        { name: "inventory", type: "number", title: "Inventory Count" },
      ],
    },

    // Order Schema
    {
      name: "order",
      type: "document",
      title: "Order",
      fields: [
        { name: "orderID", type: "string", title: "Order ID" },
        {
          name: "userID",
          type: "reference",
          title: "User",
          to: [{ type: "user" }],
        },
        {
          name: "products",
          type: "array",
          title: "Ordered Products",
          of: [{ type: "reference", to: [{ type: "product" }] }],
        },
        { name: "totalAmount", type: "number", title: "Total Amount" },
        {
          name: "status",
          type: "string",
          title: "Order Status",
          options: { list: ["Pending", "Shipped", "Delivered", "Cancelled"] },
        },
        { name: "createdAt", type: "datetime", title: "Order Date" },
      ],
    },

    // Contact Form Schema
    {
      name: "contact",
      type: "document",
      title: "Contact Messages",
      fields: [
        { name: "messageID", type: "string", title: "Message ID" },
        { name: "name", type: "string", title: "Sender Name" },
        { name: "email", type: "string", title: "Sender Email" },
        { name: "message", type: "text", title: "Message" },
        { name: "createdAt", type: "datetime", title: "Date Sent" },
      ],
    },
  ],
};
