import ArrowIcon from '@/assets/arrow-right.svg';
import CogImage from '@/assets/cog.png';
import CilinderImage from '@/assets/cylinder.png';
import NoodleImage from '@/assets/noodle.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
        {/* Title and description hero */}
        <div className='md:w-[478px]'>
          <div className="tag">Version 2.0 is here</div>
          <h1 className="bg-gradient-text font-bold text-5xl md:text-7xl mt-6">Pathway to productivity</h1>
          <p className="text-xl text-[#010d3e] tracking-tight mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda asperiores dignissimos nemo error incidunt explicabo animi ullam quo reiciendis! </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5"/>
            </button>
          </div>
        </div>

        {/* Image Hero */}
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <Image src={CogImage} alt='cog' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'/>
          <Image src={CilinderImage} alt='cylinder' width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute'/>
          <Image src={NoodleImage} alt='noodle' width={220} height={220} className='hidden md:block md:absolute top-[524px] left-[448px] rotate-[30deg]'/>
        </div>
          
        </div>
      </div>
    </section>
  );
};
