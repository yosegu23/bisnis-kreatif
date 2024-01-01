import Image from "next/image";

const About = () => {
  return (
    <section className="container container-primary-px py-[6rem]" tabIndex={-1}>
      <div className="flex gap-[4.5rem] lg:flex-col lg:justify-center lg:items-center">
        <div className="shrink-0">
          <Image src="/about.jpeg" alt="about" width={600} height={640} />
        </div>
        <div className="flex flex-col justify-center ">
          <div>
            <h2 className="text-secondary uppercase text-[.95rem] font-semibold tracking-[0.1em] sm:text-center">
              about us
            </h2>
            <h3 className="text-[2.3rem]  text-third font-semibold font-poppins w-[30vw] my-[1.7rem] mx-[0rem] lg:w-[100%] md:text-[1.5rem] sm:text-center">
              Bisnis Kreatif
            </h3>
            <p className="text-fourth text-[1.1rem] w-[71%] sm:w-[100%] sm:text-center">
              PT Bisnis Kreatif tempat dimana kisah keindahan dan keberlanjutan
              dimulai. Sebagai pionir dalam industri furniture, perjalanan kami
              dimulai dari sebuah visi sederhana untuk menciptakan ruang yang
              menginspirasi, menghadirkan kehangatan, dan memberikan kenyamanan
              kepada setiap rumah. Tahun 2020 menjadi tonggak awal berdirinya PT
              Bisnis Kreatif .
            </p>
            <button className="text-third uppercase text-[.95rem] font-semibold tracking-[0.1em] mt-[2rem] border-b-[2px] border-secondary transform-all duration-[.5s] hover:border-third hover:border-third sm:block sm:w-fit sm:mx-auto">
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
