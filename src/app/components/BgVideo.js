const videoSrc =
  'https://res.cloudinary.com/ddqehibx0/video/upload/e_fade:1000,so_4/v1684362992/pmu/pexels-engin-akyurt-6067531-3840x2160-30fps_f5x5an.mp4';

export default function BgVideo() {
  return (
    <video
      muted
      loop
      autoPlay
      className='h-full w-full'
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
}
