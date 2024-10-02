import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from '@/assets/icon/landing_gdg_footer.svg';
import InstagramIcon from '@/assets/icon/Logo_Instagram.svg';
import ButtonWithHrefLink from '../ButtonWithHrefLink';

const LandingPageFooter = () => {
  return (
    <div className='w-full justify-center h-[569px] bg-[#f9f9f9] flex flex-col items-center shrink-0'>
      <div className='flex flex-col items-start justify-end h-full mb-20 w-content'>
        <span className='flex flex-col gap-12'>
          <span className='text-H4_KR text-gdsc-Black mobile:text-H_KR mobile:text-14'>
            GDSC Sogang은 개발자부터 기획자, 디자이너까지
            <br />
            IT 제품과 서비스를 만들고자 하는 모든 서강대학교 학생들을 환영합니다.
          </span>
          <ButtonWithHrefLink
          hrefLink="https://forms.gle/FBV1BLGTHjgKdH1y9"
          >
            Join Now
          </ButtonWithHrefLink>
        </span>
      </div>
      <div className='w-full border-t-[#767676] h-0.5 border-t' />
      <div className='flex justify-between py-12 w-content'>
        <Image src={FooterIcon} alt='GDSC Sogang Footer Icon' />
        <span className='flex flex-row items-center gap-10'>
          <span className='flex flex-col gap-2'>
            <span className='flex items-center gap-2 w-[284px] text-P3_KR text-gdsc-Black'>
              <span className='basis-[78px] shrink-0'>Instagram</span>
              <span className='h-3 w-[1px] shrink-0 bg-gdsc-Black' />
              <span className='basis-[190px] shrink-0'>@gdg.on.campus_sg</span>
            </span>
            <span className='flex items-center gap-2 w-[284px] text-P3_KR text-gdsc-Black'>
              <span className='basis-[78px] shrink-0'>Gmail</span>
              <span className='h-3 w-[1px] shrink-0 bg-gdsc-Black' />
              <span className='basis-[190px] shrink-0'>gdsc.sogang@gmail.com</span>
            </span>
          </span>
          <span className='h-9 w-[1px] bg-[#D9D9D9]' />
          <Link href='https://www.instagram.com/gdg.on.campus_sg/' target='_blank'>
            <Image src={InstagramIcon} alt='GDSC Sogang Instagram Icon' />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LandingPageFooter;
