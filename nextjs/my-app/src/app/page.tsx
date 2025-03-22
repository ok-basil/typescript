import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col w-[40%]">
        <h1>Creative Thoughts Agency</h1>
        <p>We are a creative agency that specializes in providing innovative solutions to help businesses and individuals achieve their goals.</p>
        <div>
          <button>Learn More</button>
          <button>Contact Us</button>
        </div>
        <div>
          <Image src="/brands.png" alt="" fill className='object-contain' />
        </div>
      </div>
      <div>
        <Image src="/hero.gif" alt="" fill className='object-contain h-auto relative'/>
      </div>
    </div>
  );
}
