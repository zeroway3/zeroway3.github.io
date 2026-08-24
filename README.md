# zeroway3.github.io

Jekyll + [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) 테마로 만든 포트폴리오/블로그입니다.

## 로컬에서 미리보기

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```

## 개인 정보 수정

- `_config.yml` : 이름, 소개, 이메일, GitHub/LinkedIn 링크 등
- `_pages/about.md` : About 페이지 내용 (소개, 스킬, 프로젝트)
- `assets/images/profile.jpg` : 프로필 사진 추가 후 `_config.yml`의 `author.avatar` 주석 해제

## 글 작성

`_posts/` 폴더에 `YYYY-MM-DD-제목.md` 형식으로 파일을 추가하면 됩니다.
