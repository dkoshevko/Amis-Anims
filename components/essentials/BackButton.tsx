import { useRouter } from "next/navigation";

const defaultFallback = "/";

export default function BackButton({ fallback = defaultFallback }: any) {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback || "/");
    }
  }

  return (
    <button onClick={handleBack}>
      <svg
        width="800"
        height="800"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(-1 1)"
        className="w-6 h-6 mr-2"
      >
        <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
      </svg>
    </button>
  );
}
