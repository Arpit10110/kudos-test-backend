import crypto from "crypto";
import Razorpay from "razorpay"
const instance = new Razorpay({
  key_id: "rzp_test_zX8JwR7ErLD2Nw",
  key_secret: "A2BaCHr0mNaEgj9XCTwMwh9J",
});
export const checkout = async (req, res) => {
    const options = {
      amount: Number(req.body.amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.json({
      success: true,
      order,
    });
};

export const paymentverification = async (req, res) => {
    try {
        const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
        const body = razorpay_order_id+ "|" + razorpay_payment_id
        const generated_signature = crypto
        .createHmac("sha256","A2BaCHr0mNaEgj9XCTwMwh9J")
        .update(body.toString())
        .digest("hex")


        console.log("razorpay_payment_id--",razorpay_payment_id)
        console.log("razorpay_signature--",razorpay_signature)
        console.log("generated_signature --",generated_signature )


        const isPayment = razorpay_signature == generated_signature
        if (isPayment)
        {
          res.redirect(`${process.env.Frontend_url}/#/success?refrence=${razorpay_payment_id}`);
        }
        else{
          res.redirect(`${process.env.Frontend_url}/#/fail?refrence=${razorpay_payment_id}`);
        }
    } catch (error) {
        console.error(error);
    }
  
};
