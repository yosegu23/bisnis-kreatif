const Hero = () => {
  return (
    <section
      className="bg-lghero bg-no-repeat  bg-center bg-cover pt-[15rem] pb-[12rem] px-[4.5rem] md:py-[4rem] md:pb-[4rem] sm:px-[2rem] xsm:px-[1rem]"
      tabIndex={-1}
    >
      <div className="max-w-[650px] w-[100%]  ">
        <h1 className="text-[#000]  text-[4.5rem] font-medium font-poppins leading-[1.1] pb-[1.7rem] md:text-[3rem] sm:text-center sm:text-left ">
          Love the luxury
        </h1>
        <p className="text-black font-poppins leading-[2] text-[1.1rem] pb-[2.3rem] sm:text-center sm:text-[.9rem]">
          Bisnis Kreatif tempat dimana kisah keindahan dan keberlanjutan
          dimulai.
        </p>
        <div className="flex j gap-[1.5rem] sm:justify-center sm:flex-col">
          <button className="bg-fifth text-third text-[0.87rem] text-center uppercase font-medium font-inter tracking-widest py-[1em] px-[2.1em] transition-all ease-out duration-[.3s] hover:bg-third hover:text-fifth focus:bg-third focus:text-fifth">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
