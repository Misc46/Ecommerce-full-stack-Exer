import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsletterBox';
import Title from '../components/Title';
import fakeReviewsData from '../pages/review'



const About = () => {

  const reviews = fakeReviewsData;
  console.log(reviews);

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          Di TULAT, kami berkomitmen untuk menghadirkan produk berbahan dasar kedelai terbaik ke meja Anda. Berdiri di atas prinsip kualitas, inovasi, dan keberlanjutan, kami menciptakan beragam pilihan makanan lezat dan sehat untuk dinikmati semua kalangan. Mulai dari ikon Tahu Bulat hingga berbagai kreasi berbasis kedelai lainnya, misi kami adalah memadukan tradisi dengan cita rasa modern yang sesuai dengan selera dan gaya hidup yang beragam.
          </p>
          <p>
          Komitmen kami tidak hanya berhenti pada rasa yang lezat. Kami bekerja sama dengan petani dan pemasok lokal untuk memastikan bahan baku diperoleh secara etis, sambil memprioritaskan pertumbuhan komunitas dan kelestarian lingkungan. Dengan setiap gigitan, kami ingin membagikan tidak hanya kualitas, tetapi juga cerita tentang dedikasi, kolaborasi, dan cinta terhadap kerajinan kami. Selamat datang di keluarga TULAT, tempat setiap produk dibuat dengan penuh perhatian untuk Anda dan dunia di sekitar kita.
          </p>
          <b className="text-gray-800">Misi Kami</b>
          <p>
            {' '}
            Di TULAT, misi kami adalah menghadirkan produk berbahan dasar kedelai yang lezat, sehat, dan inovatif, sekaligus berkontribusi pada pelestarian kedelai sebagai sumber daya yang berkelanjutan. Kami percaya bahwa setiap langkah dalam proses produksi, mulai dari pemilihan bahan baku hingga distribusi, harus mencerminkan komitmen kami terhadap keberlanjutan dan tanggung jawab lingkungan.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'APA'} text2={'KATA MEREKA?'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{reviews[0].name}</b>
          <p className="text-gray-600">
            {reviews[0].rating}/5{' '}
          </p>
          <p className="text-gray-600">
            {reviews[0].review}{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{reviews[1].name}</b>
          <p className="text-gray-600">
            {reviews[1].rating}/5{' '}
          </p>
          <p className="text-gray-600">
          {reviews[1].review}{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{reviews[2].name}</b>
          <p className="text-gray-600">
            {reviews[2].rating}/5{' '}
          </p>
          <p className="text-gray-600">
          {reviews[2].review}{' '}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;