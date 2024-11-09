import { shopify } from "../app.js";

// Create order with dynamic line items and shipping address
export const createorder = async (req, res) => {
  const {
    customerId,
    lineItems,    // Expecting an array of line items
    totalPrice,
    shippingPrice,
    paymentId,
    address1,
    city,
    province,
    country,
    zip,
    name,
    province_code
  } = req.body;

  try {
    // Log the incoming request body
    console.log("Request Body:", req.body);

    // Check if lineItems are provided
    if (!lineItems || lineItems.length === 0) {
      return res.status(400).json({ status: false, message: "No line items provided" });
    }

    // Map line items for Shopify order
    const mappedLineItems = lineItems.map(item => ({
      variant_id: item.variantId,  // Product variant ID
      quantity: item.quantity || 1,  // Use quantity or default to 1
      price: item.price,  // Ensure price is passed
      title: item.title,  // Product title
    }));

    // Shopify order creation payload with shipping address
    const orderPayload = {
      line_items: mappedLineItems, 
      customer: {
        id: Number(customerId),  // Shopify customer ID
      },
      billing_address: {
        address1: address1,
        city: city,
        zip: zip,
        province: province,
        country: country,
        name:name,
        country_code: "IN",
        province_code: province_code
      },
      total_price: Number(totalPrice),  // Ensure totalPrice is a number
      shipping_lines: [
        {
          title: "Standard Shipping",
          price: Number(shippingPrice),  // Ensure shippingPrice is a number
        },
      ],
      financial_status: "paid",  // Mark as paid
      transactions: [
        {
          kind: 'sale',
          status: 'success',
          amount: Number(totalPrice),  // Ensure the total price is passed
          gateway: 'razorpay',  // Payment gateway (Razorpay)
          authorization: paymentId,  // Payment ID from Razorpay
        },
      ],
    };

    // Log the order payload

    // Create the order using Shopify SDK
    const order = await shopify.order.create(orderPayload);

    // Send response back to client
    res.json({
      status: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    if (error.response) {
      console.error("Error details:", error.response.body);
    }
    res.status(500).json({
      status: false,
      message: "Error creating order",
      error: error.message,
    });
  }
};

// Fetch all orders from Shopify
export const fetchAllOrders = async (req, res) => {
  try {
    // Fetch orders from Shopify
    const orders = await shopify.order.list();

    res.json({
      status: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      status: false,
      message: "Error fetching orders",
      error: error.message,
    });
  }
};


export const getAllOrders = async(req,res)=>{
      const {customerId} = req.body;
      try {
        const orders = await shopify.order.list({
          customer_id: customerId,
          status: "any",
        });
        res.json({
          success: true,
          message: "Orders fetched successfully",
          data: orders
        })
      } catch (error) {
        res.json({
            success:false,
            message:error
        })
      }
} 