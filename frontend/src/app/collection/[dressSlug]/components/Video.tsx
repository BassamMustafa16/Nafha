// Improved Video Component with better mobile handling

type Dress = {
  name: string;
};

export default function Video({ name }: Dress) {
  return (
    <section className="">
      <div className="relative aspect-video lg:aspect-[16/9] bg-gray-100 overflow-hidden max-h-screen w-full">
        <video
          src={`/products/${name}/video.mp4`}
          muted
          loop
          playsInline
          controls={false}
          autoPlay
          className="w-full h-full object-cover"
          poster={`/products/${name}/video-poster.jpg`} // Add poster image
        />
      </div>
    </section>
  );
}
