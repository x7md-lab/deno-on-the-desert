/** @jsx h */
import { Fragment, h } from "preact";
import Navbar from "../components/Navbar.tsx"
// import { useState } from "preact/hooks";
import { tw } from "@twind";
const Desert = function(){

    return (
        <Fragment>
            <Navbar />
            <section class={tw`relative bg-[#a6c9ff] w-full flex justify-center items-center flex-col`}>
                <svg class={tw`absolute right-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#EEA559" fill-opacity="1" 
                        d="M0,224L30,218.7C60,213,120,203,180,197.3C240,192,300,192,360,176C420,160,480,128,540,117.3C600,107,660,117,720,133.3C780,149,840,171,900,160C960,149,1020,107,1080,112C1140,117,1200,171,1260,208C1320,245,1380,267,1410,277.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                    </path>
                </svg>
            </section>
        </Fragment>
    )
}
export default Desert;