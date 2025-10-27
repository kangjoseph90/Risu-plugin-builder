// src/main.ts

// 1. Tailwind CSS 로드
import './style.css';

// 2. Svelte 컴포넌트 임포트
import MyPopup from './MyPopup.svelte';

// 3. 플러그인 초기화 함수
function initializePlugin() {
  const target = document.querySelector('.rs-setting-cont-3');
  if (!target) {
    console.warn('플러그인: .rs-setting-cont-3 요소를 찾을 수 없습니다.');
    return;
  }

  // 버튼 생성
  const openButton = document.createElement('button');
  openButton.textContent = '플러그인 팝업 열기';
  openButton.className = 'my-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow transition';

  // 버튼 클릭 시 Svelte 컴포넌트 마운트
  openButton.addEventListener('click', () => {
    // 팝업 컨테이너 생성
    const container = document.createElement('div');
    document.body.appendChild(container);

    // Svelte 컴포넌트 마운트
    const popup = new MyPopup({
      target: container,
      props: {
        onClose: () => {
          // 팝업 닫을 때 컴포넌트 제거
          popup.$destroy();
          container.remove();
        }
      }
    });
  });

  target.appendChild(openButton);
}

// 4. DOM 로드 후 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePlugin);
} else {
  initializePlugin();
}
