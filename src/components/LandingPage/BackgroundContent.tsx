import Image from 'next/image';
import LandingNonAnimateImage from '@/assets/icon/landing_bg_nonanimate.svg';
import AnimatedStar from '@/assets/icon/landing_star.svg';
import AnimatedSquare from '@/assets/icon/landing_square.svg';

const BackgroundContent = () => {
  return (
    <div className='fixed w-screen h-screen pointer-events-none -z-10 flex justify-center'>
      <span className='relative flex w-content h-full justify-center'>
        <span className='absolute -bottom-14 right-[26rem] w-[38vh] aspect-square animate-gdsc-spin'>
          <Image src={AnimatedStar} layout='fill' alt='animated star' />
        </span>
        <span className='absolute top-0 right-[5.5rem] w-[23vh] h-[38vh]'>
          <div className='w-full h-full bg-gdsc-Red-700 animate-gdsc-resize'></div>
        </span>
        <span className='absolute top-10 right-[35rem] w-[15.1vh] h-[26.8vh]'>
          <div className='bg-gdsc-Blue-700 w-full h-full animate-gdsc-rounded'></div>
        </span>

        <span className='relative flex w-content h-full justify-end'>
          <span className='relative h-[100vh] aspect-[1134/1080]'>
            <Image className='object-contain' fill src={LandingNonAnimateImage} alt='landing page image' />
          </span>
        </span>
        {/* 배경 위 반투명 gradient */}
        {/* <span className='absolute top-0 left-0 w-3/5 h-full pointer-events-none bg-gradient-to-l from-transparent to-gdsc-White'></span> */}
      </span>
    </div>
  );
};

export default BackgroundContent;
