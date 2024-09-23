import Image from 'next/image';
import seminarIcon from '@/assets/icon/landing_seminar.svg';
import hackatonIcon from '@/assets/icon/landing_hackaton.svg';
import gfdIcon from '@/assets/icon/landing_gfd.svg';
import gfdStarIcon from '@/assets/icon/landing_gfd_star.svg';
import studyIcon from '@/assets/icon/landing_study.svg';
import Link from 'next/link';
interface LogoTitleProps {
  icon: any;
  iconSizeStyle: string;
  title: string;
  titleCustomStyle?: string;
}

const LogoTitle = ({ icon, iconSizeStyle, title, titleCustomStyle }: LogoTitleProps) => {
  const iconStyle = `relative ` + iconSizeStyle;
  const titleStyle = `absolute z-10 ` + titleCustomStyle;
  return (
    <div className='relative'>
      <div className={iconStyle}>
        <Image alt={`${title} icon`} className='w-full h-full' src={icon} />
      </div>
      <div className={titleStyle}>
        <span className='text-gdsc-White'>{title.slice(0, 1)}</span>
        {title.slice(1)}
      </div>
    </div>
  );
};

const GFDTitle = () => {
  return (
    <>
      <div className='relative'>
        <div className='relative h-[95px] w-[95px]'>
          <Image alt={`Google For Developers icon1`} className='w-full h-full' src={gfdIcon} />
        </div>
        <div className='absolute -bottom-6 left-[34px] z-10'>
          <span className='text-gdsc-White'>G</span>
          oogle
          <br />
          <div className='absolute -right-12 bottom-5 h-[41px] w-[41px] rotate-6'>
            <Image alt={`Google For Developers icon2`} className='w-full h-full' src={gfdStarIcon} />
          </div>
        </div>
      </div>
      <div className='whitespace-nowrap pl-[34px]'>For Developers</div>
    </>
  );
};

interface TitleDetailBodyProps {
  data: {
    title: string;
    detail: string;
  }[]
}

const TitleDetailBody = ({data}: TitleDetailBodyProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {data.map(({ title, detail }) => (
        <div key={title} className='flex flex-col gap-1'>
          <h6 className='text-gdsc-Grey-800 text-H3_KR'>{title}</h6>
          <p className='text-gdsc-Grey-600 text-P3_KR whitespace-pre-wrap'>{detail}</p>
        </div>
      ))}
    </div>
  );
};

const HackatonBody = () => {
  return (
    <p className='font-ko text-24 text-gdsc-Grey-600'>
      난이도별 해커톤 및<br />타 GDG Campus와의 연합 해커톤을 진행합니다.
    </p>
  );
};

const GFDBody = () => {
  return (
    <p className='break-words break-keep text-24 text-gdsc-Grey-600'>
      GDSC Sogang은 국내외 Google 생태계 내 개발 관련 단체와의 연합행사들을 기획 중에 있습니다.
      <br />
      <br />
      GDG, GDE, 국/내외 GDSC 콜라보를 진행합니다.
    </p>
  );
};

// 세미나 내용
const SEMINAR_TYPE = [
  {
    title: '파트별 세미나 (TBD)',
    detail: '월마다 각자의 인사이트를 공유하는 자리입니다.',
  },
  {
    title: 'Career Seminar',
    detail: '파트별 현직자를 모셔서 커리어에 대해 공유하는 자리입니다.',
  },
];

const STUDY_BODY = [
  {title: '공부하고 싶은데 함께할 팀원이 없나요?',
    detail: `커뮤니티원과 함께 자유 주제로 학습할 수 있는 자율 스터디에 참가해보세요!\n(UI/UX, Marketing, Web, AI,ML, etc!)`
  }
]

export const SCROLL_CONTENT_LIST = [
  {
    type: 'Mainpage',
    title: <span className='text-[120px] font-bold'>GDG</span>,
    subtitle: (
      <span className='text-H2_EN'>
        on Campus <span className='text-gdsc-Red-500'>Sogang</span>
      </span>
    ),
    body: (
      <span className='text-P3_KR text-[#767676] whitespace-pre-wrap'>
        GDG on Campus Sogang은 2024년 10월 정식으로 출범할 서강대학교의 GDSC 챕터입니다. {'\n'}서강대학교 재학생 중 IT에
        관심이 있는 학생들의 오아시스가 되기 위한 커뮤니티를 만들어나가고 있습니다.
      </span>
    ),
    isDoubleBtn: true,
    btn1: (
      <Link
        className='bg-gdsc-Black text-center rounded-full px-[26px] py-[18px] text-gdsc-White text-[20px]'
        href='https://forms.gle/FBV1BLGTHjgKdH1y9'
        target='_blank'
      >
        Join Now
      </Link>
    ),
    btn2: (
      <Link
        className='bg-gdsc-Black text-center rounded-full px-[26px] py-[18px] text-gdsc-White text-[20px]'
        href='https://gdgoncampus-sg.oopy.io/'
        target='_blank'
      >
        Learn More
      </Link>
    ),
  },
  {
    type: 'Study',
    title: <LogoTitle title='Saint Study' icon={studyIcon} iconSizeStyle='w-[46px] h-[91px]' titleCustomStyle='-bottom-6 left-2' />,
    body: <TitleDetailBody data={STUDY_BODY} />,
    btnText: 'Saint Study',
    btnClickLink: '/',
  },
  {
    type: 'Seminar',
    title: (
      <LogoTitle
        title='Seminar'
        icon={seminarIcon}
        iconSizeStyle='w-[68px] h-[82px]'
        titleCustomStyle='-bottom-8 left-8'
      />
    ),
    body: <TitleDetailBody data={SEMINAR_TYPE} />,
    btnText: 'Career Seminar',
    btnClickLink: '/',
  },
  {
    type: 'Hackaton',
    title: (
      <LogoTitle
        title='Hackaton'
        icon={hackatonIcon}
        iconSizeStyle='w-[105px] h-[105px]'
        titleCustomStyle='-bottom-5 left-11'
      />
    ),
    body: <HackatonBody />,
    btnText: 'Hackaton',
    btnClickLink: '/',
  },
  {
    type: 'GFD',
    title: <GFDTitle />,
    body: <GFDBody />,
    btnText: 'Google For Developers',
    btnClickLink: '/',
  },
];
