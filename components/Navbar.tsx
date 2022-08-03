/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
const Nav = function(){
    return (
        <header class={tw`flex flex-start items-center bg-[#a6c9ff] w-100`}>
            <div class={tw`logo flex justify-center items-center`}>
                <img class={tw`p-4 lg:w-28 w-20`} src="/deno_with_ghutrah.svg" />
                <span class={tw`font-bold lg:text-xl text-lg`}>Saudi Deno</span>
            </div>
        </header>
    )
}

export default Nav;