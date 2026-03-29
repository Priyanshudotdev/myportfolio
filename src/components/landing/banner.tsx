import Image from "next/image";

type BannerPropsType = {
  url: string;
  text: string;
};

const Banner = ({ url = "/banner.png", text }: BannerPropsType) => {
  return (
    <div className="relative w-full h-48 sm:h-64 grayscale-50">
      <Image src={url} alt="Banner" fill className="object-cover" />
      <p className="absolute inset-0 flex items-center justify-center italic text-xl font-serif text-white drop-shadow">
        {text}
      </p>
    </div>
  );
};

export default Banner;
