import VoiceComponent from "@/components/VoiceComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center relative overflow-hidden px-4 py-6">
      {/* Фон */}
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />

      {/* Верхний блок */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Тренажер по переговорам</h1>
        <VoiceComponent />
        <small className="text-xs text-gray-500 my-6">
          The app requires microphone access to work.
        </small>
      </div>

      {/* Низ */}
      <small className="text-sm text-gray-500">Powered by Utlik. Co</small>
       <small className="text-xs text-gray-500 my-6">
          v1.0.0
        </small>
    </main>
  );
}
