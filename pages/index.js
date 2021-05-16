import Head from 'next/head';
import Image from 'next/image';
import Navbar from '#components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen">
        <h1 className="text-4xl font-bold text-center">Hello, 世界！</h1>
      </div>
    </>
  );
}
