import React from "react";
import VoiceComponent from "@/components/VoiceComponent";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen relative overflow-hidden px-4 py-6 text-center">
      {/* Абсолютный фон */}
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />

      {/* Центрированный блок */}
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <img
          src="/Utlik_logo.png"
          alt="Utlik Logo"
          className="w-24 h-auto mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-6">Переговорный тренажер</h1>
        <VoiceComponent />
        <small className="text-xs text-gray-500 mt-6">
          Приложение требует доступа к микрофону для работы.
        </small>
        <small className="text-xs text-gray-500 mt-2">v1.0.0</small>
        <small className="text-sm text-gray-500 mb-2">Powered by Utlik.Co</small>

        {/* Логотип Милы Моровой 
        <img
          src="/MilaMorova_logo.svg"
          alt="Мастерская переговоров Милы Моровой"
          className="w-48 h-auto opacity-80 mt-2"
        /> */}
      </div>
    </main>
  );
}
