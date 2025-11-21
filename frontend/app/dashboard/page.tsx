"use client";

import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {DashboardPage} from "../components/DashboardPage";

export default function Dashboard() {
    return (
        <>
            <Header />
            <DashboardPage />
            <Footer />
        </>
    );
}
