"use client";
import { getViewContent } from "@/components/seller-dashboard/view-content";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  const [selectedView, setSelectedView] = useState("Dashboard");

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }>
      <AppSidebar
        selectedView={selectedView}
        onSidebarSelect={setSelectedView}
        variant='inset'
      />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
              {getViewContent(selectedView)}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
