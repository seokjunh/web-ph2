import Image from "next/image";

const HomeItem2 = () => {
  return (
    <div className="relative h-[50vh] md:h-screen">
      <Image
        src="/image/img1.png"
        alt=""
        fill
        className="object-cover brightness-50"
      />
    </div>
  );
};
export default HomeItem2;
