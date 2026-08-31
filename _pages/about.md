---
title: "About"
permalink: /about/
author_profile: true
---

## 소개

실시간 데이터와 서버 안정성을 다루는 백엔드 개발자 김영식입니다. 백엔드를 중심으로, 필요에 따라 프론트엔드·보안까지 직접 확장해가고 있습니다.

## 경력

### (주)엑센솔루션 · 개발팀 (2025.02 ~ 현재)

건물관리 솔루션(SI/FMS/BEMS) 기업에 입사해 처음 3개월(2025.02–2025.05)은 2개 현장의 레거시 C#(.NET) 패키지 프로그램을 직접 유지관리하며 운영상의 한계를 체감했습니다. 이후 리뉴얼이 결정되자 자진 지원해 Next.js·NestJS 기반 리뉴얼 개발팀에 합류했고, 기존 패키지 분석부터 아키텍처 설계·정의·개발까지 전 과정에 참여하며 백엔드를 중심으로 프론트엔드·모바일·배포까지 담당하고 있습니다.

- **디바이스 3,501대 · 태그 3만 개** — 현장 실측 기반 규모
- **초당 9,000건** — 처리 용량 산정 (시간당 약 3,200만 건)
- **27.8억 건** — 누적 시계열 이력
- **653GB → 35GB** — 압축 정책 적용 후 저장 용량 (94.6% 절감)
- **10개 이상** — 서비스로 구성된 멀티서비스 아키텍처
- **535건 · 440건** — 커밋 · 머지 PR
- **2개 현장** — FMS 배포·운영 중 (오피스빌딩 약 3개월, 대기업 사옥 폐쇄망 약 2개월)

## 개인 프로젝트

회사에서는 백엔드·서버 운영에 집중하는 만큼, 부족한 프론트엔드·보안 역량은 개인 프로젝트로 직접 채우고 있습니다.

### 런덤메이트 — 러닝 크루 매칭 앱 (App Store·웹 동시 배포)
**2026.01 ~ 2026.05 · Frontend(Web)·배포 담당 (팀 프로젝트)**

GPS 러닝 기록, 크루 커뮤니티, 실시간 채팅을 갖춘 소셜 러닝 앱 팀 프로젝트에서 Frontend(Web) 개발을 전담했습니다. STOMP(WebSocket) 실시간 소켓 연동과 1:1·크루 채팅 기능을 개발했고, Docker 기반 빌드와 AWS ECS 배포 파이프라인을 구성·운영하며 dev→prod 배포 머지에도 참여했습니다. 커밋 127건 · 변경 파일 402개 · 머지 PR 40건 이상을 쌓았습니다.

- [App Store](https://apps.apple.com/kr/app/id6761368135) · [Web](https://www.rundommate.com/running)

### VibeShield — AI 생성 코드 보안 검사 도구
**2026.06 ~ 2026.08 · 관제시스템·보안 아키텍처 담당 (3인 팀) · 광운대학교 주관 중소벤처기업부 「모두의 창업 프로젝트」 1차 선정**

AI 코딩 도구가 생성한 코드의 취약점과 존재하지 않는 API(환각) 호출을 탐지하는 로컬 실행형 정적분석 도구입니다. Tree-sitter 기반 AST 파서와 YAML 룰베이스로 OWASP Top 10 9종을 탐지해 ISMS-P·전자금융감독규정 조항에 매핑한 감사 리포트를 자동 생성하고, PyPI·npm 공식 인덱스 화이트리스트 대조로 LLM 환각 API·슬롭스쿼팅 패키지를 잡아냅니다. 현업 개발자 9인 PoC에서 환각 API 탐지율 83%(동일 샘플 Semgrep·SonarQube 0%), 오탐률 3.8%, 평균 설치 소요 24분, 감사 리포트 증빙력 4.3/5점을 실측했고, 테스트 도입을 5개사와 협의했습니다.

## 교육프로그램 및 해커톤

### 한국소프트웨어인재개발원 개발자 과정 수료 (2024.03 ~ 2024.08)

빅데이터 기반 인공지능 융합 서비스 개발자 6개월(960시간) 과정으로, 팀 프로젝트를 통해 풀스택 개발 역량을 다졌습니다.

- **Devhub — 형상 관리 웹사이트** (5인 프로젝트 · PE 역할)
  초보 개발자를 위한 프로젝트 관리·이슈 트래킹·Git 기반 버전 관리·PR 코드 리뷰 플랫폼. 프로젝트 페이지 관련 기능을 전담했습니다.

### 졸업 프로젝트

- **WWW — 리워드 시스템 앱** (8인 융합캡스톤디자인 · 삼진정밀 기업협업 · 소프트웨어 담당)
  삼진정밀 기업협업으로 진행한 캡스톤디자인 프로젝트. 빗물받이 제품 소개와 적립·관리 기능을 제공하는 앱으로, Vue.js·Spring Boot로 앱 개발과 UI/UX 디자인을 맡았습니다.

### 국제 협업 해커톤

- **싱가포르 SIT 해커톤** (2025.02) — 아시아 문명 박물관(Asian Civilisations Museum) 주관, Singapore Institute of Technology와 협업한 2주 해커톤(싱가포르 현지 진행), 수료증·장학금 수상
- **영국 Brunel University 해커톤** (2024.10) — 영국 뷰티기업 Stylideas 주관, Brunel University와 협업한 2주 해커톤(LED 뷰티사업, 국내 진행), 수료증·장학금 수상

## Skills

**Backend**
: Node.js, NestJS, TypeORM, TypeScript

**Database**
: PostgreSQL, TimescaleDB, Redis, MySQL

**Realtime & Messaging**
: Redis Pub/Sub·Stream, WebSocket, SSE, STOMP(사이드)

**Frontend**
: Next.js, React

**Infra & Monitoring**
: Docker, GitHub Actions, Prometheus, Grafana, AWS ECS(사이드)

**Industrial Protocol**
: Modbus, MQTT, OPC-UA, SNMP, BACnet

**AI Tools**
: Claude Code, Orca(멀티 에이전트 오케스트레이션)

## Contact

- Email: [ys0000250000@gmail.com](mailto:ys0000250000@gmail.com)
- GitHub: [zeroway3](https://github.com/zeroway3)
