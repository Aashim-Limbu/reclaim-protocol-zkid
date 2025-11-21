"use client";

import React from "react";
import {Header} from "./components/Header";
import {LandingPage} from "./components/LandingPage";
import {Footer} from "./components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <LandingPage />
            <Footer />
        </>
    );
}
