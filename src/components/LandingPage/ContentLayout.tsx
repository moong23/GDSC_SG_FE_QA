'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  title: ReactNode;
  btnBoldText: string;
  children: ReactNode;
}

/**
 * 스크롤 애니메이션이 들어가는 content의 layout
 * @param children title과 button 제외 body 영역
 */
function ContentLayout({ title, btnBoldText, children }: Props) {
  const targetRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className='ml-[20%] max-w-[712px]'>
      <div ref={targetRef}></div>
      <section
        ref={sectionRef}
        className={['flex w-full flex-col gap-10', isVisible ? '' : 'animate-content-out opacity-0'].join(' ')}
      >
        <h3 className={['text-H1_EN', isVisible ? 'animate-content-in' : ''].join(' ')}>{title}</h3>
        <div className={['px-11', isVisible ? 'animate-content-in-slow' : ''].join(' ')}>{children}</div>
        <button
          className={[
            'mx-5 w-fit rounded-[35px] bg-gdsc-Black px-[26px] py-[18px] text-gdsc-White',
            isVisible ? 'animate-content-in' : '',
          ].join(' ')}
        >
          Learn more about <span className='font-bold'>{btnBoldText}</span>
        </button>
      </section>
    </div>
  );
}

export default ContentLayout;
