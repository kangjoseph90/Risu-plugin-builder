<script lang="ts">
  export let onClose: () => void;

  let inputValue: string = '';

  function handleSubmit(): void {
    console.log('입력값:', inputValue);
    onClose();
  }
</script>

<div 
  class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
  on:click={onClose}
  on:keydown={(e) => e.key === 'Escape' && onClose()}
  role="button"
  tabindex="0"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div 
    class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
    on:click|stopPropagation
    role="dialog"
    aria-modal="true"
  >
    <h2 class="text-2xl font-bold mb-4 text-gray-800">
      플러그인 팝업
    </h2>

    <p class="text-gray-600 mb-4">
      Svelte + TypeScript + Tailwind로 만든 UI입니다.
    </p>

    <input 
      type="text" 
      bind:value={inputValue}
      placeholder="입력 테스트..." 
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div class="flex gap-3 mt-6">
      <button 
        on:click={onClose}
        class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        취소
      </button>
      <button 
        on:click={handleSubmit}
        class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        확인
      </button>
    </div>
  </div>
</div>
