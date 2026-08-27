---
title: "About"
permalink: /about/
author_profile: true
---

## 소개

안녕하세요, 백엔드 개발자 김영식입니다.
건물관리 솔루션(SI/FMS/BEMS) 기업에서 초당 4,800개 IoT 포인트를 수집·배포하는 실시간 데이터 파이프라인과, 누적 27.8억 건의 시계열 이력을 다루는 멀티테넌트 백엔드를 설계·구현하고 있습니다.

백엔드와 서버 운영을 주 축으로 삼되, 사이드 프로젝트를 통해 프론트엔드와 보안 영역까지 직접 손을 뻗어 넓혀가는 중입니다. 이 블로그는 그 과정에서 부딪힌 문제와 고민, 그리고 왜 그런 선택을 했는지를 기록하는 공간입니다.

## 성장 타임라인

| 시기 | 단계 |
|---|---|
| 2018.03 ~ 2025.02 | 한남대학교 멀티미디어공학과 — 영국 Brunel University, 싱가포르 SIT 협업 해커톤 각 1위 |
| 2024.03 ~ 2024.08 | 한국소프트웨어인재개발원 개발자 과정 — 풀스택 기초, 팀 프로젝트(Devhub, WWW) |
| 2025.02 ~ 현재 | (주)엑센솔루션 — 백엔드 중심, 레거시 리뉴얼 프로젝트 |
| 2026.01 ~ 2026.05 | 사이드 프로젝트 · 런덤메이트 — 프론트엔드 역량 확장 |
| 2026 ~ 현재 | 사이드 프로젝트 · 바이브쉴드 — 보안 아키텍처 역량 확장 |

각 단계에 대한 자세한 이야기는 아래 프로젝트 섹션과 [카테고리별 글 목록](/categories/)에서 확인할 수 있습니다.

## Skills

**Backend**
: NestJS, TypeScript, TypeORM, Prisma, Java, Spring Boot/MVC, Python(Flask)

**Database**
: PostgreSQL / TimescaleDB, MySQL, Oracle, Redis (Pub/Sub · Stream)

**실시간**
: WebSocket(socket.io), SSE, GraphQL Subscription(Apollo, graphql-ws)

**인프라**
: Docker/Docker Compose, nginx, PM2, Prometheus, Grafana, Shell

**산업 프로토콜**
: Modbus, MQTT, OPC-UA, BACnet, SNMP, EtherNet/IP

**Frontend**
: Next.js, React, TypeScript, Zustand, HTML5/CSS3, Vue.js

**Mobile**
: Flutter

**Test & Document**
: Swagger, Postman, Git

## Career

### (주)엑센솔루션 · 개발팀 (2025.02 ~ 현재)

건물관리 솔루션(SI/FMS/BEMS) 개발·공급 기업에서, 레거시 C#(.NET) 기반 시스템을 Next.js·NestJS(TypeScript) 스택으로 전면 리뉴얼하는 프로젝트에 참여하고 있습니다. 백엔드 설계·구현을 주력으로 프론트엔드·모바일·배포까지 8개 저장소(백엔드 4·프론트 2·모바일 1·배포 1)를 담당하며, 커밋 535건·머지 PR 440건을 쌓았습니다.

- **실시간 데이터 수집·배포 파이프라인** — Modbus·MQTT·OPC-UA·BACnet 기반 IoT 포인트 약 4,800개를 초 단위로 폴링 수집, Redis Pub/Sub(실시간)·Stream(무손실) 이중 채널로 배포
- **대용량 시계열 DB 운영** — TimescaleDB 하이퍼테이블로 누적 27.8억 건을 관리, 압축 정책으로 저장 용량 653GB → 35GB(94.6% 절감)
- **멀티테넌트 인증·인가** — JWT 발급 전담 서버 분리, 서비스 단위 인가 + 화면별 read/write 권한 2단 가드
- **운영·관측성** — Docker Compose 기반 12개 서비스 오케스트레이션, Prometheus·Grafana 모니터링, 무중단 11.6일·이벤트 루프 지연 p99 38.6ms 유지

자세한 기술적 의사결정 과정은 아래 프로젝트 글들에 정리했습니다.

- [레거시 C#에서 Next.js·NestJS로, 리뉴얼 프로젝트에 합류하며](/backend/joining-si-renewal/)
- [Redis Pub/Sub과 Stream, 왜 둘 다 썼는가](/backend/pubsub-and-stream/)
- [JWT 인가 체계와 토큰 갱신 동시성 제어](/backend/auth-single-flight/)
- [TimescaleDB로 27.8억 건 시계열 데이터 다루기](/backend/timescaledb-compression/)
- [순찰관리 API와 Flutter 오프라인 동기화](/backend/patrol-offline-sync/)

## Side Projects

회사에서는 백엔드·서버 운영에 집중하는 만큼, 부족한 프론트엔드·보안 역량은 사이드 프로젝트로 직접 채우고 있습니다.

### 런덤메이트 — 러닝 크루 매칭 앱 (App Store 출시)
**2026.01 ~ 2026.05 · 프론트엔드(일부 서버)**

GPS 러닝 기록, 크루 커뮤니티, 실시간 채팅, 랭킹·챌린지 기능을 갖춘 소셜 러닝 앱을 기획부터 스토어 출시까지 완주했습니다. WebSocket 기반 1:1·크루 채팅, 팔로우·소셜 그래프, 주간·월간·연간 통계 차트를 구현하며 커밋 127건 · 변경 파일 402개 · 머지 PR 40건 이상을 쌓았습니다. 백엔드에서 보던 실시간 통신을 프론트엔드 입장에서 다시 구현해보며, 데이터가 화면에 그려지기까지의 전체 흐름을 이해하게 된 프로젝트입니다.

→ [런덤메이트로 프론트엔드 시야를 넓히다](/frontend/randommate/)

### 바이브쉴드 — AI 생성 코드 보안 검사 도구
**2026 ~ 현재 · 관제시스템·보안 아키텍처 담당 (3인 팀) · 중소벤처기업부 「모두의 창업 프로젝트」 선정**

AI 코딩 도구가 생성한 코드의 취약점과 존재하지 않는 API(환각) 호출을 탐지하는 로컬 실행형 정적분석 도구입니다. Tree-sitter 기반 AST 파서와 YAML 룰베이스로 OWASP Top 10 9종을 탐지하고, PyPI·npm 공식 인덱스 화이트리스트 대조로 LLM 환각 API를 잡아냅니다. 현업 개발자 9인 PoC에서 환각 API 탐지율 83%(동일 샘플 Semgrep·SonarQube 0%), 오탐률 3.8%를 실측했습니다. 백엔드 개발자로 일하며 자연스럽게 관심이 옮겨간 "안전한 코드"라는 주제를 직접 도구로 만들어본 경험입니다.

→ [바이브쉴드: 보안 아키텍처에 도전하다](/security/vibeshield/)

## 학부 시절 프로젝트

### Devhub — 형상 관리 웹사이트
**5인 프로젝트 · PE 역할** · [GitHub](https://github.com/Devs-Of-Kosmo/devhub-server)

초보 개발자를 위한 프로젝트 관리·이슈 트래킹·Git 기반 버전 관리·PR 코드 리뷰 플랫폼. 프로젝트 페이지 관련 기능을 전담했습니다.

### WWW — 리워드 시스템 앱
**8인 융합캡스톤디자인 · 삼진정밀 기업협업 · 소프트웨어 담당** · [GitHub](https://github.com/zeroway3/www)

빗물받이 제품 소개와 적립·관리 기능을 제공하는 앱. Vue.js·Spring Boot로 앱 개발과 UI/UX 디자인을 맡았습니다.

→ [학부 시절과 국비교육, 그리고 첫 팀 프로젝트들](/growth/devhub-www/)

## Education

- **한남대학교 멀티미디어공학과** (2018.03 ~ 2025.02) — Brunel University(영국), Singapore Institute of Technology 협업 해커톤 각 1위, 장학금·수료증 수상
- **한국소프트웨어인재개발원 개발자 과정 수료** (2024.03 ~ 2024.08) — 빅데이터 기반 인공지능 융합 서비스 개발자, 풀스택 개발 역량 강화

## Contact

- Email: [ys0000250000@gmail.com](mailto:ys0000250000@gmail.com)
- GitHub: [zeroway3](https://github.com/zeroway3)
