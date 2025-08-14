"use client";

import dynamic from "next/dynamic";

export const AppSidebar = dynamic(() => import("./app-sidebar-component"), {
	ssr: false,
});