import LandingPageFooter from '@/components/Footer/LandingPageFooter';
import ContentLayout from '@/components/LandingPage/ContentLayout';
import PageWrapper from '@/components/LandingPage/PageWrapper';
import { SCROLL_CONTENT_LIST } from '@/components/LandingPage/ScrollContent';
import tw from 'tailwind-styled-components';

export default function Home() {
  const MainWrapper = tw.main`
    flex
    flex-col
    h-screen
    overflow-y-auto
    snap-y
    snap-proximity
  `;
  return (
    <MainWrapper>
      <PageWrapper className='bg-gdsc-Green-600'>메인페이지</PageWrapper>
      {SCROLL_CONTENT_LIST.map(({ type, title, body, btnText }) => (
        <PageWrapper key={type} className='items-ceneter relative justify-start'>
          <ContentLayout title={title} btnBoldText={btnText}>
            {body}
          </ContentLayout>
        </PageWrapper>
      ))}
      <LandingPageFooter />
    </MainWrapper>
  );
}
