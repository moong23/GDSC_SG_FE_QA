import Image from 'next/image';
import ContentLayout from './ContentLayout';
import PageWrapper from './PageWrapper';
import seminarIcon from '../../../public/icon/landing_seminar.svg';
import hackatonIcon from '../../../public/icon/landing_hackaton.svg';
import gfdIcon from '../../../public/icon/landing_gfd.svg';
import gfdStarIcon from '../../../public/icon/landing_gfd_star.svg';

const SCROLL_CONTENT_LIST = [
  {
    type: 'Study',
    title: 'Study',
    body: <div>추후 변경 예정</div>,
    btnText: 'GDG Study',
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
    body: <SeminarBody />,
    btnText: 'GDG Seminar',
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
    btnText: 'GDG Hackaton',
  },
  {
    type: 'GFD',
    title: <GFDTitle />,
    body: <GFDBody />,
    btnText: 'Google For Developers',
  },
];

function ScrollContent() {
  return (
    <>
      {SCROLL_CONTENT_LIST.map(({ type, title, body, btnText }) => (
        <PageWrapper key={type} className='items-ceneter relative justify-start'>
          <ContentLayout title={title} btnBoldText={btnText}>
            {body}
          </ContentLayout>
        </PageWrapper>
      ))}
    </>
  );
}

export default ScrollContent;

interface LogoTitleProps {
  icon: any;
  iconSizeStyle: string;
  title: string;
  titleCustomStyle?: string;
}

function LogoTitle({ icon, iconSizeStyle, title, titleCustomStyle }: LogoTitleProps) {
  const iconStyle = `relative ` + iconSizeStyle;
  const titleStyle = `absolute z-10 ` + titleCustomStyle;
  return (
    <div className='relative'>
      <div className={iconStyle}>
        <Image alt={`${title} icon`} className='h-full w-full' src={icon} />
      </div>
      <div className={titleStyle}>
        <span className='text-gdsc-White'>{title.slice(0, 1)}</span>
        {title.slice(1)}
      </div>
    </div>
  );
}

function GFDTitle() {
  return (
    <>
      <div className='relative'>
        <div className='relative h-[95px] w-[95px]'>
          <Image alt={`Google For Developers icon1`} className='h-full w-full' src={gfdIcon} />
        </div>
        <div className='absolute -bottom-6 left-[34px] z-10'>
          <span className='text-gdsc-White'>G</span>
          oogle
          <br />
          <div className='absolute -right-12 bottom-5 h-[41px] w-[41px] rotate-6'>
            <Image alt={`Google For Developers icon2`} className='h-full w-full' src={gfdStarIcon} />
          </div>
        </div>
      </div>
      <div className='whitespace-nowrap pl-[34px]'>For Developers</div>
    </>
  );
}

function SeminarBody() {
  const SEMINAR_TYPE = [
    {
      title: '파트별 세미나',
      detail: '월마다 각자의 인사이트를 공유하는 자리입니다.',
    },
    {
      title: '멘토 세미나',
      detail: '파트별 현직자를 모셔서 커리어에 대해 공유하는 자리입니다.',
    },
  ];
  return (
    <div className='flex flex-col gap-8'>
      {SEMINAR_TYPE.map(({ title, detail }) => (
        <div key={title} className='flex flex-col gap-1'>
          <h6 className='text-gdsc-Grey-800 text-H3_KR'>{title}</h6>
          <p className='text-gdsc-Grey-600 text-P3_KR'>{detail}</p>
        </div>
      ))}
    </div>
  );
}

function HackatonBody() {
  return (
    <p className='font-ko text-24 text-gdsc-Grey-600'>
      난이도별 해커톤 및<br />
      GDSC Solution Challenge를 진행합니다.
    </p>
  );
}

function GFDBody() {
  return (
    <p className='break-words break-keep text-24 text-gdsc-Grey-600'>
      GDSC Sogang은 국내외 Google 생태계 내 개발 관련 단체와의 연합행사들을 기획 중에 있습니다.
      <br />
      <br />
      GDG, GDE, 국/내외 GDSC 콜라보를 진행합니다.
    </p>
  );
}
