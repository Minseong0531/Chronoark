<div align="center">

<!-- logo -->

### 리액트 웹사이트 제작 프로젝트
#### 이 프로젝트는 비상업적 포트폴리오 용도로 제작되었으며, 상업적 사용 목적이 없습니다.

[<img src="https://img.shields.io/badge/프로젝트 기간-2025.07.02~2025.07.16-fab2ac?style=flat&logo=&logoColor=white" />]()

</div> 

## 📝 소개
이 프로젝트는 **React**를 기반으로 제작된 웹사이트로,  
React 기반으로 제작되었으며 Swiper, Framer Motion, Sakura.js 등을 활용해   
**캐릭터 카드, 세계관 애니메이션, 벚꽃 효과, 사운드 트랙** 등을 구현했습니다.

## 🚀 설치 및 실행 방법

```bash
# 레포지토리 클론
git clone https://github.com/minseong0531/Chronoark.git

# 패키지 설치
npm install

# 로컬 실행
npm start
```


## ⚙ 기술 스택

### Basic
<div>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

### Library
<div>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
    <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=black">
    
</div>

### Tools
<div>
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=black">
    <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
</div>

<br />

**주요 기능**
### 1. Character Card
- **기술:** Swiper + React Tabs + Axios + fixPath
- **특징**
  - 탭 선택과 슬라이드 이동 동기화
  - 모바일: 가로 스와이프, 데스크톱: 세로 스와이프
  - 캐릭터 이미지, 배경, 타입, 키워드, 스킬 등 상세 표시
  - JSON 데이터 비동기 로딩
  - 클릭 이벤트 중복 방지 및 반응형 대응

---

### 2. Sakura.js 벚꽃 애니메이션
- **기능:** 화면에 벚꽃잎이 떨어지는 효과
- **특징**
  - 랜덤 크기, 색상, 위치, 애니메이션
  - 특정 시간 후 제거 가능 (lifeTime 옵션)
  - CSS 애니메이션과 연동, requestAnimationFrame 사용

---

### 3. Framer Motion
- **기술:** Framer Motion + fixPath
- **특징**
  - 적 캐릭터 순차적 등장 애니메이션
  - z-index로 깊이감 표현
  - 스토리 텍스트와 캐릭터 이미지를 동시에 표시

---

### 4. SoundTrack
- **기술:** React Hooks + MUI Icons + fixPath
- **특징**
  - JSON 데이터 기반 사운드 트랙 목록 로딩
  - 재생, 일시정지, 이전/다음 트랙 버튼 지원
  - 현재 재생 트랙에 맞춰 LP 이미지 회전 애니메이션
  - 원형 프로그래스 바로 재생 진행률 표시
  - 트랙별 배경 이미지, EP 이미지 지원
<br />



## 🤔 기술적 이슈와 해결 과정

### 1. Tabs와 Swiper이벤트 충돌 이슈

**이슈**
- Swiper 슬라이드와 React Tabs가 동시에 동작할 때, 클릭/스와이프 이벤트가 서로 충돌
- 화면 리사이즈 시 슬라이드 방향 변경 필요

**해결 과정**
- `swiperRef`를 사용해 현재 슬라이드 인덱스를 상태(`tabIndex`)와 동기화
- `onSlideChange`와 `onSelect`에서 각각 상태를 업데이트하여 중복 실행 방지
- `useEffect`로 윈도우 리사이즈 이벤트 감지 후 `isDesktop` 상태 업데이트

---

### 2. 벚꽃 이벤트 최적화

**이슈**
- 화면 크기에 따라 벚꽃 애니메이션 위치가 부자연스러움
- 무한 requestAnimationFrame으로 인해 성능 부담

**해결 과정**
- petal 생성 시 랜덤 위치, 크기, 색상 적용
- `lifeTime` 옵션으로 일정 시간 이후 petal 제거
- `WeakMap`으로 현재 존재하는 petal 관리 → 불필요한 DOM 제거

---

### 3. SoundTrack Section

**이슈**
- 원형 프로그래스 바로 재생 시간을 시각화
- 트랙 전환 시 LP 이미지 회전 애니메이션 초기화 필요

**해결 과정**
- `audioRef`와 `progressRef`를 사용해 실시간 시간 업데이트
- `strokeDasharray`와 `strokeDashoffset`으로 원형 프로그래스 구현
- 트랙 변경 시 `audio.pause()` 후 새 트랙 로딩, LP 애니메이션 클래스 업데이트

---

### 4. 이미지 경로 문제

**이슈**
- JSON 데이터에 상대 경로, 절대 URL 혼합
- React에서 빌드 후 이미지 경로 깨짐 문제

**해결 과정**
- `fixPath` 유틸 제작
```javascript
export function fixPath(path) {
    if (!path) return "";
    if (path.startsWith('http')) return path;
    return `${process.env.PUBLIC_URL}/${path.replace(/^\/+/, '')}`;
}

<br />



