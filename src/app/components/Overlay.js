export default function Overlay() {
  return (
    <div className='h-5/6 w-4/6 md:w-5/6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2	 bg-glass flex flex-col justify-between'>
      <section className='col-span-4 mt-36 text-center'>
        <h1 className='text-slate-100 text-5xl font-bold uppercase'>
          coming soon...
        </h1>

        <p className='text-xl mt-12 tracking-wider text-gradient-animated-purple'>
          Lips. Brows. Eyeliner.
        </p>
      </section>

      <section className='mb-12 flex flex-col items-center'>
        <p className='text-slate-100'>
          Find more on Instagram
        </p>
        <a
          href='https://www.instagram.com/pmu.artist.ny'
          target='_blank'
          rel='noopener'
          className='text-red-500'
        >
          <p>@pmu.artist.ny</p>
        </a>
      </section>
    </div>
  );
}
