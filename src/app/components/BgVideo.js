const videoSrc =
  'https://res.cloudinary.com/ddqehibx0/video/upload/v1684362992/pmu/lips_2_adjusted_kugngl.mp4';

export default function BgVideo() {
  return (
    <video
      muted
      loop
      autoPlay
      playsInline
      className='h-full w-full'
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
}
