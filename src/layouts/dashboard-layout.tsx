import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import {
	Bell,
	ChevronDown,
	Gift,
	HelpCircle,
	Plus,
	Search,
} from "lucide-react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<nav>
			<div className="bg-gradient-to-b from-[#0b2d5f] to-[#0a2a55] text-white fixed right-0 left-0 top-0 z-50">
				<div className="flex h-16 items-center justify-between gap-6 px-2">
					<div className="flex items-center gap-3">
						<div className="bg-[#1d7dff] grid size-9 place-items-center rounded-xl font-bold">
							C
						</div>
						<div className="text-lg font-semibold tracking-wide">Helpdesk</div>
					</div>
					<div className="md:flex items-center hidden flex-1 gap-3 justify-center">
						<div className="bg-[#13376d] flex w-full max-w-xl items-center gap-2 rounded-xl px-4 py-2 text-sm text-white/80 shadow-inner">
							<Search className="h-4 w-4" />
							<input
								type="text"
								placeholder="Search Capacity..."
								className="placeholder:text-white/50 w-full bg-transparent text-sm text-white outline-none"
							/>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex items-center">
							<button className="bg-[#1d7dff] flex items-center gap-2 rounded-l-lg px-4 py-2 text-sm shadow-sm">
								Create
							</button>
							<button className="bg-[#1d7dff] flex items-center gap-2 rounded-r-lg p-2 text-lg font-semibold shadow-sm border-l border-neutral-100/50">
								<ChevronDown className="h-5 w-5" />
							</button>
						</div>
						<button className="grid size-9 place-items-center rounded-xl bg-white/10">
							<HelpCircle className="h-4 w-4" />
						</button>
						<button className="grid size-9 place-items-center rounded-xl bg-white/10">
							<Gift />
						</button>
						<div className="flex items-center rounded-full bg-white/10 text-sm">
							<img src="./src/assets/user.jpg" className="rounded-full object-cover aspect-square h-8 w-8" />
						</div>
					</div>
				</div>
			</div>
			<SidebarProvider
				style={
					{
						"--sidebar-width": "350px",
					} as React.CSSProperties
				}
			>
				<AppSidebar />
				<SidebarInset className="bg-[#eef3fb] text-slate-900 min-h-screen">
					<header className="bg-transparent top-0 flex shrink-0 items-center gap-2 px-6 py-4 pt-20">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Inbox</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</header>

					<div className="px-6 pb-6">{children}</div>
				</SidebarInset>
			</SidebarProvider>
		</nav>
	);
}
