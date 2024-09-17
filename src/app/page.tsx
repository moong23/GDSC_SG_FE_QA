import tw from 'tailwind-styled-components';

export default function Home() {
  const MainWrapper = tw.main`
    flex
    min-h-screen
    flex-col
    items-center
    justify-center
    gap-8
    p-24
  `;
  return (
    <MainWrapper>
      <h1 className='text-gdsc-Blue-100 text-H1_EN'>GDSC Sogang H1_EN 영문 폰트</h1>
      <h2 className='text-gdsc-Blue-100 text-H2_KR'>GDSC Sogang H2_KR 한글 폰트</h2>
      <p className='text-gdsc-Red-100 text-P1_EN'>2024.09.02 ~</p>
    </MainWrapper>
  );
}
