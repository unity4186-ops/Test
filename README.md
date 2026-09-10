# Grid Game (2048)

키보드 방향키 / WASD / 터치 스와이프로 조작하는 그리드 퍼즐 게임입니다.
`index.html` 파일 하나로 동작하며 별도 빌드나 의존성이 없습니다.

## 실행

```
# 파일을 브라우저로 열거나
python3 -m http.server 8000
```

## 기능

- 4x4 그리드, 방향키 / WASD / 스와이프 조작
- 최고 점수 `localStorage` 저장
- 한 수 되돌리기(Undo)
- 이동/합치기 애니메이션과 점수 증가 표시
- 게임 오버 / 2048 달성 감지 (달성 후 계속 진행 가능)
- 모바일 반응형 레이아웃, 다크 모드 대응

## 아이콘

- `assets/icons.svg` — 63개 UI 아이콘 스프라이트 (24×24, 스트로크, `currentColor` 상속)
- `assets/icons.js` — 위 스프라이트를 인라인 주입하는 생성 파일 (`file://`에서도 동작)
- `icons.html` — 전체 아이콘 카탈로그. 카드를 누르면 `<use>` 코드가 복사됩니다.

아이콘을 수정한 뒤에는 반드시 다시 빌드하세요:

```
node tools/build-icons.js
```

사용 예:

```html
<button class="icon-btn"><svg class="icon"><use href="#i-restart"></use></svg>새 게임</button>
```

### 설정 패널

톱니 버튼으로 열리며 애니메이션 on/off, 다크 모드, 최고 점수 초기화를 제공합니다.
선택값은 `localStorage`에 저장됩니다.
