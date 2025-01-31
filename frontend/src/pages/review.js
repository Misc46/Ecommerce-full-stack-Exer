import axios from "axios";

const reviewsData = {
    "4": [
        "A surprisingly good snack! The crispiness is just right, and the flavor is subtle but enjoyable. It’s not too heavy, making it a nice option when you want something light to munch on.",
        "I really enjoyed the crunch and texture of this snack! The seasoning is mild but pleasant, and it pairs well with a dipping sauce. A great option for a quick and satisfying bite!",
        "This snack is light, airy, and crispy, which makes it very enjoyable to eat. The flavor is nice but could be a bit stronger. Still, it’s something I’d definitely buy again!",
        "Great balance of crunch and flavor! I like that it’s not too salty or overpowering, and it makes for a perfect snack when you just want something simple and tasty.",
        "Much better than I expected! It has a nice crisp to it and just the right amount of seasoning. Would definitely recommend to anyone who enjoys a crunchy, light snack.",
        "A solid snack choice! It’s crunchy, flavorful, and not too greasy. I think it’s even better when paired with a dipping sauce or eaten fresh.",
        "This snack is quite addicting! The texture is really enjoyable, and while the flavor isn’t super bold, it’s still satisfying. I’d definitely get this again for a quick bite.",
        "Tasty, light, and crispy! I appreciate that it doesn’t feel too oily, and it’s a great option when you’re in the mood for something crunchy but not too heavy.",
        "A really good snack overall! It’s simple yet delicious, and it has the perfect crunch. I can see myself grabbing this again when I need a light snack.",
        "A great little snack! The crunch is super satisfying, and the seasoning is just enough to make it enjoyable without being overwhelming. Definitely worth trying!"
    ],
    "5": [
      "This snack is absolutely amazing! The crunch is perfect, and it has just the right amount of seasoning to keep you wanting more. I could eat these all day and never get tired of them!",
    "Hands down one of the best snacks I've had! It’s light, crispy, and full of flavor. Every bite is satisfying, and it doesn't feel too heavy or oily. I’ll definitely be buying more of these!",
    "Incredible snack! It’s so crispy and airy, yet packed with just the right amount of seasoning. Whether you eat it on its own or with a dip, it’s always delicious. Highly recommend!",
    "Absolutely delicious! The balance of crunch and flavor is spot on. It’s light yet satisfying, making it a perfect snack for any time of the day. I can’t wait to get more!",
    "This is exactly what I want in a snack—light, crispy, and bursting with flavor. It’s so addicting that I ended up eating the whole bag in one sitting! Definitely a must-try!",
    "Snack perfection! Every piece is crispy and full of flavor, making it hard to stop eating. Whether as a quick bite or something to enjoy with friends, this is always a great choice!",
    "I love how perfectly crunchy these are! The texture is light and airy, and the flavor is just strong enough to be satisfying without being overpowering. A new favorite for sure!",
    "One of the best snacks I’ve ever had! It’s got that perfect crunch and just the right amount of seasoning. I could eat these every day and never get bored of them!",
    "The ultimate snack experience! Crispy, flavorful, and so easy to keep eating. I’m definitely stocking up on these because they’re just too good to resist!",
    "Perfectly crunchy and packed with flavor! I love how light it is, but it still feels super satisfying. It’s my go-to snack from now on!"
    ]
  };

  const fakeReviews = await axios.get('https://randomuser.me/api/?results=3&nat=us,au');
  const fakeReviewsData = fakeReviews.data.results.map((review) => {
    const rating = Math.floor(Math.random() * 2) + 4;
    return {
      name: review.name.first + ' ' + review.name.last,
      rating: rating,
      review: reviewsData[rating.toString()][Math.floor(Math.random() * 10)],
    };
  })

  export default fakeReviewsData
  