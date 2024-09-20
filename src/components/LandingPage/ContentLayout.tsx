'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  title: string;
  btnBoldText: string;
  children: ReactNode;
}

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

  console.log(isVisible);

  return (
    <div className='relative flex w-svw pt-[30vh]'>
      <div className='w-full'>
        <div ref={targetRef}></div>
        <section
          ref={sectionRef}
          className={[
            'scroll-text absolute flex w-full flex-col gap-10 pl-[20%]',
            isVisible ? '' : 'animate-content-out opacity-0',
          ].join(' ')}
        >
          <h3 className={['text-H1_EN', isVisible ? 'animate-content-in' : ''].join(' ')}>{title}</h3>
          <div className={isVisible ? 'animate-content-in-slow' : ''}>{children}</div>
          <button
            className={[
              'w-fit rounded-[35px] bg-gdsc-Black px-[26px] py-[18px] text-gdsc-White',
              isVisible ? 'animate-content-in' : '',
            ].join(' ')}
          >
            Learn more about <span className='font-bold'>{btnBoldText}</span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default ContentLayout;
