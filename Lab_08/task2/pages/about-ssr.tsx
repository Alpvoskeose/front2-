import { GetServerSideProps } from "next";

export default function AboutSSR({ time }: { time: string }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Page (SSR)</h1>
      <p>This page is generated on every request. The time below WILL change on every refresh.</p>
      <p className="mt-4 font-mono text-red-600">Generated at: {time}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { time: new Date().toISOString() } };
};