import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsletterBox';
import Title from '../components/Title';

const About = () => {
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
        <Title text1={'KENAPA'} text2={'PILIH KAMI?'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in offering only the highest quality products that
            meet our stringent standards for durability, performance, and value.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Our user-friendly website and mobile app make it easy to browse,
            compare, and purchase products on the go.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">
            Our dedicated team of customer service representatives is available
            around the clock to assist you with any queries or concerns you may
            have.{' '}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;