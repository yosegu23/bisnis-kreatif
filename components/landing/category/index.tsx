import Image from "next/image";

const Category = () => {
  return (
    <section className="container container-primary-px grid grid-cols-auto-fit gap-[2.5rem] py-[6rem]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.pixabay.com/photo/2023/06/17/20/30/bathroom-8070786_1280.jpg"
            alt="Tub Bisnis Kreatif"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.victoriaplum.com/vp_prod_images/da253b29-9f95-41e6-aacc-501b92f332ac.jpg?auto=format%2Ccompress&q=55&w=600"
            alt="Wastafel"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://static.wixstatic.com/media/625175_a518604fcb1240d595b3494914a09fc1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
            alt="Plant Pot"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://image.architonic.com/img_pro2-1/139/1784/eau-soaking-tub-carrara-marble-1-b.jpg"
            alt="Tub"
          />
        </div>
      </div>
    </section>
  );
};
export default Category;
