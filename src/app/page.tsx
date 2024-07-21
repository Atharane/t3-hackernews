import { db } from "~/server/db";

export const dynamic = "force-dynamic";
// import Image from "next/image";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <div className="">
      <h2 className="p-6 text-center text-6xl font-bold text-slate-600">
        このリポジトリは移動されました↓
      </h2>

      {JSON.stringify(posts)}

      <div className="flex flex-wrap items-center justify-center gap-4 p-12">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className="hover:border-white-300 cursor-pointer space-y-3 border border-slate-200 p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://utfs.io/f/c11b37ef-55a2-401b-bde1-5d0821702279-mtk2r0.png"
              alt="the hack club"
              className="m-4 h-36"
            />
            <div className="text-right font-medium leading-tight text-slate-400">
              the hack club
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
