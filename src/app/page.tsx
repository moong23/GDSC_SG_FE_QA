import LandingPageFooter from '@/components/Footer/LandingPageFooter';
import PageWrapper from '@/components/LandingPage/PageWrapper';
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
      <PageWrapper className='bg-gdsc-Green-600'>페이지1</PageWrapper>
      <PageWrapper className='items-start bg-gdsc-Yellow-600'>페이지2</PageWrapper>
      <LandingPageFooter />
    </MainWrapper>
  );
}
