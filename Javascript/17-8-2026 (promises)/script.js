/* Promises in Javascript */

let production = true;

function step(time , message){
    return new Promise((resolve , reject) => {
        if(production){
            setTimeout(() => {
                console.log(message);
                resolve()
            }, time)
        }else{
            reject("Production is stopped...")
        }
    })
}

/* Swiggy step by step activity */
// step(2000, "step:1 Open the Swiggy app.")
// .then(() => step(2000, "step:2 Enter or confirm your delivery location/address."))
// .then(() => step(2000, "step:3 Search for the restaurant or food item you want."))
// .then(() => step(2000, "step:4 Select a restaurant from the available options."))
// .then(() => step(2000, "step:5 Select your desired food items."))
// .then(() => step(2000, "step:6 Add the items to your cart."))
// .then(() => step(2000, "step:7 Open the cart and review your order."))
// .then(() => step(2000, "step:8 Check the quantity and total price."))
// .then(() => step(2000, "step:9 Confirm your delivery address."))
// .then(() => step(2000, "step:10 Make the payment."))
// .then(() => step(2000, "step:11 The restaurant receives and accepts the order."))
// .then(() => step(2000, "step:12 The restaurant prepares your food."))
// .then(() => step(2000, "step:13 A delivery partner picks up the order."))
// .then(() => step(2000, "step:14 Track the delivery partner and order status in the app."))
// .then(() => step(2000, "step:15 The delivery partner travels to your location."))
// .then(() => step(2000, "step:16 The delivery partner delivers the food to you."))
// .then(() => step(2000, "step:17 Receive the order and check the items."))
// .then(() => step(2000, "step:18 Rate and review the restaurant and delivery service. ⭐"))
// .then(() => step(2000, "step:19 Enjoy your meal! 🍔🍕🥤"))


/* E-commerce step by step activity */
// step(2000, "step:1 Open the e-commerce website/app.")
// .then(() => step(2000, "step:2 Login or Sign Up to your account."))
// .then(() => step(2000, "step:3 Search for the product you want to buy."))
// .then(() => step(2000, "step:4 Select the product."))
// .then(() => step(2000, "step:5 Check the product details, price, size, and reviews."))
// .then(() => step(2000, "step:6 Select the required quantity/variant."))
// .then(() => step(2000, "step:7 Click Add to Cart."))
// .then(() => step(2000, "step:8 Open the Shopping Cart."))
// .then(() => step(2000, "step:9 Review the selected products."))
// .then(() => step(2000, "step:10 Apply a coupon or discount if available."))
// .then(() => step(2000, "step:11 Enter or select the delivery address."))
// .then(() => step(2000, "step:12 Select the delivery option."))
// .then(() => step(2000, "step:13 Choose a payment method."))
// .then(() => step(2000, "step:14 Complete the payment."))
// .then(() => step(2000, "step:15 The order is placed successfully."))
// .then(() => step(2000, "step:16 The seller receives and confirms the order."))
// .then(() => step(2000, "step:17 The product is packed. 📦~"))
// .then(() => step(2000, "step:18 The order is shipped. 🚢"))
// .then(() => step(2000, "step:19 The delivery partner delivers the product. 🚚"))
// .then(() => step(2000, "step:20 Receive and check the product."))
// .then(() => step(2000, "step:21 If needed, return or exchange the product."))
// .then(() => step(2000, "step:22 Give a rating and review. ⭐"))
// .then(() => step(2000, "step:23 Order completed successfully. ✅"))


/* Maggi step by step activity */
// step(2000, "step:1 Take Maggi noodles.")
// .then(() => step(2000, "step:2 Boil water in a pan."))
// .then(() => step(2000, "step:3 Add the Maggi noodles."))
// .then(() => step(2000, "step:4 Add the Maggi tastemaker."))
// .then(() => step(2000, "step:5 Mix everything well."))
// .then(() => step(2000, "step:6 Cook for 2–3 minutes."))
// .then(() => step(2000, "step:7 Stir the noodles properly."))
// .then(() => step(2000, "step:8 Check the consistency."))
// .then(() => step(2000, "step:9 Turn off the gas/stove."))
// .then(() => step(2000, "step:10 Serve the hot Maggi in a bowl. 🍜"))


/* Uploading a Video on YouTube ▶️ step by step activity */
step(2000, "step:1 Open YouTube.")
.then(() => step(2000, "step:2 Sign in to your acoount."))
.then(() => step(2000, "step:3 Click the Create (+) button."))
.then(() => step(2000, "step:4 Select Upload Video."))
.then(() => step(2000, "step:5 Choose the video file from your device."))
.then(() => step(2000, "step:6 Add a title for the video."))
.then(() => step(2000, "step:7 Write a description."))
.then(() => step(2000, "step:8 Add a thumbnail."))
.then(() => step(2000, "step:9 Select the audience."))
.then(() => step(2000, "step:10 Add tags if required."))
.then(() => step(2000, "step:11 Check the video details."))
.then(() => step(2000, "step:12 Select Public, Private, or Unlisted."))
.then(() => step(2000, "step:13 Click Publish."))
.then(() => step(2000, "step:14 Wait for the video to finish uploading."))
.then(() => step(2000, "step:15 The video is now live on YouTube. ▶️"))


