export default function Video() {
  return (
    <div className="w-full h-[100vh]">
      <video
        src="/videos/sec 01 video.mp4"
        autoPlay
        muted
        loop
        className="w-full h-[100vh] object-cover"
      />
    </div>
  );
}
