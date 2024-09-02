import tw from "tailwind-styled-components";

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
      <h1 className="text-4xl font-bold">GDSC Sogang</h1>
      <p className="text-lg text-gray-600">2024.09.02 ~</p>
    </MainWrapper>
  );
}
