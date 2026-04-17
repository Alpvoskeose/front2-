import { GetStaticProps } from "next";

export default function AboutSSG({ time }: { time: string }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Page (SSG)</h1>
      <p>This page was generated at build time. The time below will NOT change on refresh.</p>
      <p className="mt-4 font-mono text-blue-600">Generated at: {time}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { time: new Date().toISOString() } };
};