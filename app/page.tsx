'use client';
import { useEffect } from 'react';
import { init } from 'ragged-chat-sdk';

export default function Home() {
  useEffect(() => {
    init({
      subdomain: 'icehub-hdhkac',
      apiUrl: 'https://ragflowdb.onrender.com/api'
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Ragged SDK Test</h1>
      <p className="text-xl">The chat widget should appear in the bottom right corner.</p>
    </div>
  );
}
