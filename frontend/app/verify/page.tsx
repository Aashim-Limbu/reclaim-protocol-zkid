"use client";

import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {VerificationFlow} from "../components/VerificationFlow";

export default function VerifyPage() {
    return (
        <>
            <Header />
            <VerificationFlow />
            <Footer />
        </>
    );
}
