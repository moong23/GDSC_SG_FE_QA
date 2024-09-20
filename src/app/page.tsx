import LandingPageFooter from '@/components/Footer/LandingPageFooter';
import ContentLayout from '@/components/LandingPage/ContentLayout';
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
      <PageWrapper className='items-start bg-gdsc-Blue-500'>
        <ContentLayout title='Study' btnBoldText='GDSC Study'>
          내용11
        </ContentLayout>
      </PageWrapper>
      <PageWrapper className='items-start bg-gdsc-Red-300'>
        <ContentLayout title='Seminar' btnBoldText='GDSC Seminar'>
          내용22
        </ContentLayout>
      </PageWrapper>
      <LandingPageFooter />
    </MainWrapper>
  );
}
