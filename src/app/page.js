import BgVideo from './components/BgVideo';
import Overlay from './components/Overlay';

export default function Page() {
  return (
    <main className='h-screen w-screen relative'>
      <BgVideo />
      <Overlay />
    </main>
  );
}
