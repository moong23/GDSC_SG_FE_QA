import Image from 'next/image';
import LandingNonAnimateImage from '@/assets/icon/landing_bg_nonanimate.svg';
import AnimatedStar from '@/assets/icon/landing_star.svg';
import AnimatedSquare from '@/assets/icon/landing_square.svg';
import AnimatedRounded1 from '@/assets/icon/landing_rounded1.svg';
import AnimatedRounded2 from '@/assets/icon/landing_rounded2.svg';

const BackgroundContent = () => {
  return (
    <div className='fixed w-screen h-screen pointer-events-none -z-10'>
      <span className='relative flex w-full h-full'>
        <span className='absolute -bottom-10 left-[calc(32vw+8rem)] w-[350px] aspect-square animate-gdsc-spin'>
          <Image src={AnimatedStar} layout='fill' alt='animated star' />
        </span>
        <span className='absolute -top-20 left-[64vw] w-[250px] h-[300px] animate-gdsc-resize'>
          <Image src={AnimatedSquare} layout='fill' alt='animated square' />
        </span>
        <span className='absolute -top-2 left-[44vw] w-[162px] h-[290px]'>
          <Image src={AnimatedRounded1} alt='animated rounded 1' className='animate-svg-swap' />
          <Image
            src={AnimatedRounded2}
            alt='animated rounded 2'
            className='absolute top-0 left-0 animate-svg-swap-reverse'
          />
        </span>

        <span className='relative flex w-full h-full'>
          <Image
            className='object-contain translate-x-32 -translate-y-20'
            src={LandingNonAnimateImage}
            layout='fill'
            alt='landing page image'
          />
        </span>
        {/* 배경 위 반투명 gradient */}
        <span className='absolute top-0 left-0 w-3/5 h-full pointer-events-none bg-gradient-to-l from-transparent to-gdsc-White'></span>
      </span>
    </div>
  );
};

export default BackgroundContent;
