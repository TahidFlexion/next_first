import Image from "next/image";

export default function GallaryPage() {
  const nature = [
    "/images/img1.jpg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
    "/images/img6.jpeg",
    "/images/img7.jpeg",
    "/images/img8.jpeg",
    "/images/img9.jpeg",
    "/images/img10.jpeg",
    "/images/img11.jpeg",
    "/images/img12.jpeg",
  ];

  return (
    <>
      <p className="text-3xl font-bold text-center pt-8">Gallery</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 px-32">
        {nature.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={image}
              alt={`Nature ${index + 1}`}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
              className="rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </>
  );
}
