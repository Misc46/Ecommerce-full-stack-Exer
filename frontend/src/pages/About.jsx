import React, { useEffect, useState } from 'react';
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import getFakeReviewsData from "../pages/review";

const About = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getFakeReviewsData();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          Di TULAT, kami berkomitmen untuk menghadirkan produk berbahan dasar kedelai terbaik ke meja Anda. Berdiri di atas prinsip kualitas, inovasi, dan cita rasa autentik, kami terus mengembangkan berbagai varian tahu dan olahan kedelai yang tidak hanya lezat, tetapi juga bergizi. Dengan menggunakan bahan baku pilihan dan proses produksi yang higienis, kami memastikan setiap produk yang kami hasilkan memenuhi standar tinggi.
          <br/>
          <br/>
Sebagai perusahaan yang mengutamakan kepuasan pelanggan, kami juga mengadopsi teknologi dalam pemasaran dan distribusi, memastikan produk kami dapat diakses dengan lebih mudah oleh semua orang. Kami percaya bahwa tahu bukan sekadar makanan, tetapi bagian dari gaya hidup sehat yang dapat dinikmati siapa saja.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={"APA"} text2={"KATA MEREKA?"} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>{review.name}</b>
            <p className="text-gray-600">{review.rating}/5 </p>
            <p className="text-gray-600">{review.review} </p>
          </div>
        ))}
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;