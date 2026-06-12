function ImageGrid() {
  const images = [
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262181/22d093b723fb28ad304fec1ad23125d16ca9e317_uhwe72.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262141/6830cb3003533fd22c10d8ec89e5dcd045cb3509_blpaja.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262107/491f09956cc07a368661a904a61687307a3c6997_yzw4i0.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262137/ac2c88baadbe2628461ffa068dd94882aba23281_dfmgzx.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262146/1f8d6a806d6a451f9775e8fc097a444a86d65a97_cydhqr.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262132/4543edd8f968ab047c0eb91260c4d4fdd074ef8b_v4jnhy.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262125/484e56d6e84a26ce75801559685cda99ab042705_rewpgs.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262116/b592bff838cb2feef47daf59aa050f76475984e2_s1fvkk.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262111/1390322e1af59aa599f47ca645433fcbc62148e5_mxsyvv.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262098/9aeb5ddc01a9d34b25e91b705abf20066b4781ac_rasqq4.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764262099/8fcaecf87402b5bc59868ea5540d6dff3740cad9_nrl2xb.avif",
    "https://res.cloudinary.com/dwdekki8t/image/upload/v1764263434/66be8cacd94f43d07df7b185c59da0a003583d4d_c9je6w.avif",
  ];

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center transition"
          >
            <img
              src={img}
              alt={`Clothing ${index + 1}`}
              className="w-full h-full object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
