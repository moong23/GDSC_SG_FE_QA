# GDSC Sogang FE Repository

## 📌 Introduction

- This repository is for the GDSC Sogang Webpage.

## 📌 How to start

1. Fork this repository  
   `git clone https://github.com/GDSC-Sogang-Univ/GDSC_SG_FE`

2. Install dependencies  
   `yarn install`

> 2-1. If you don't have yarn, install yarn  
> `npm install -g yarn`  
> 2-2. If you have yarn version 1, upgrade yarn  
> `yarn set version berry`  
> 2-3. (remove node_moduels if you have,) install dependencies  
> `yarn install`

3. Start the development server
   ```bash
   yarn dev
   ```

## 📌 Directory Structure

```bash
.
├── public # 정적 파일을 저장하는 디렉토리 (예: 이미지, 폰트 등)
├── src # 소스 코드가 위치한 디렉토리
│ ├── api # API 관련 코드 및 서비스 로직을 저장하는 디렉토리
│ ├── app # 페이지와 레이아웃 구성 파일을 포함하는 디렉토리
│ │ ├── page.tsx # 메인 페이지 컴포넌트
│ │ └── layout.tsx # 레이아웃 컴포넌트
│ │ └── ...
│ ├── assets # 애플리케이션에서 사용하는 자산(이미지, 아이콘 등)을 저장하는 디렉토리
│ │ ├── images # 이미지 파일을 저장하는 디렉토리
│ │ └── icons # 아이콘 파일을 저장하는 디렉토리
│ ├── components # 재사용 가능한 UI 컴포넌트를 저장하는 디렉토리
│ ├── store # 상태 관리 관련 코드를 저장하는 디렉토리
│ ├── types # TypeScript 타입 정의 파일을 저장하는 디렉토리
│ └── utils # 유틸리티 함수들을 저장하는 디렉토리
│   └── hooks # 커스텀 훅을 저장하는 디렉토리
├── .gitignore # Git이 무시할 파일 및 디렉토리를 정의하는 파일
├── .prettierrc.json # 코드 스타일을 정의하는 Prettier 설정 파일
├── .eslintrc.json # 코드 품질을 체크하는 ESLint 설정 파일
├── Dockerfile # Docker 이미지를 빌드하기 위한 설정 파일
├── next.config.mjs # Next.js 애플리케이션의 설정 파일
├── package.json # 프로젝트의 메타데이터와 의존성을 정의하는 파일
├── tsconfig.json # TypeScript 컴파일러 설정 파일
└── tailwind.config.js # Tailwind CSS 설정 파일
```
