/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { HeadElement } from "../components/HeadElement.tsx";
import Desert  from "../islands/Desert.tsx";


export default function Home(ctx: any) {
  const { data, url } = ctx;
  return (
    <div class={tw`min-h-screen bg-[#EEA559]`}>
      <HeadElement
        description="Saudi Deno Merch"
        // image={url.href + "og-image.png"}
        title="Saudi Deno"
        url={url}
      />
      <div class={tw`flex flex-col `}>
      <Desert />
      <div class={tw`z-10 pt-10 text-center`}>
        <h1 class={tw`text-3xl text-[#ffffff] font-bold`}>
          Deno on the desert!
        </h1>
      </div>
      {/* <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} /> */}
    </div>
    </div>
  );
}
