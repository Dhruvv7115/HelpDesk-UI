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
import { ChevronDown, Gift, HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const searchRef = React.useRef<HTMLInputElement | null>(null);
	const [isSearchOpen, setIsSearchOpen] = React.useState(false);
	const [sidebarWidth, setSidebarWidth] = React.useState(350);

	React.useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			const isCmdK = event.metaKey && event.key.toLowerCase() === "k";
			const isCtrlK = event.ctrlKey && event.key.toLowerCase() === "k";
			if (isCmdK || isCtrlK) {
				event.preventDefault();
				setIsSearchOpen(true);
				return;
			}
			if (event.key === "Escape") {
				setIsSearchOpen(false);
			}
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	React.useEffect(() => {
		if (!isSearchOpen) return;
		const id = window.setTimeout(() => {
			searchRef.current?.focus();
		}, 0);
		return () => window.clearTimeout(id);
	}, [isSearchOpen]);

	return (
		<nav className="bg-blue-950">
			<div className="bg-linear-to-b from-[#0b2d5f] to-[#0a2a55] text-white fixed right-0 left-0 top-0 z-50">
				<div className="flex h-16 items-center justify-between gap-6 px-2">
					<div className="flex items-center gap-3">
						<div className="bg-[#1d7dff] grid size-9 place-items-center rounded-xl font-bold">
							C
						</div>
						<div className="text-lg font-semibold tracking-wide">Helpdesk</div>
					</div>
					<div className="md:flex items-center hidden flex-1 gap-3 justify-center">
						<div className="bg-[#13376d] flex w-full max-w-xl items-center gap-2 rounded-xl px-4 py-1 text-sm text-white/80 shadow-inner">
							<Search className="h-4 w-4" />
							<Input
								type="text"
								placeholder="Search Capacity..."
								className="placeholder:text-white/50 w-full bg-transparent text-sm text-white outline-none border-none"
								onFocus={() => setIsSearchOpen(true)}
								readOnly
							/>
							<Kbd className="bg-transparent text-white/60 border border-blue-500/30 text-xs">
								⌘k
							</Kbd>
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
							<img
								src="./src/assets/user.jpg"
								className="rounded-full object-cover aspect-square h-8 w-8"
							/>
						</div>
					</div>
				</div>
			</div>
			<SidebarProvider
				style={
					{
						"--sidebar-width": `${sidebarWidth}px`,
					} as React.CSSProperties
				}
			>
				{isSearchOpen && (
					<div className="fixed inset-0 z-100 flex items-start justify-center bg-slate-900/30 backdrop-blur-sm">
						<button
							className="absolute inset-0"
							aria-label="Close search"
							onClick={() => setIsSearchOpen(false)}
						/>
						<div className="relative mt-28 w-full max-w-xl rounded-2xl border border-white/20 bg-[#0b2d5f] p-4 text-white shadow-2xl">
							<div className="flex items-center gap-3 rounded-xl bg-[#13376d] px-4 py-3">
								<Search className="h-5 w-5 text-white/80" />
								<input
									type="text"
									placeholder="Search Capacity..."
									className="placeholder:text-white/60 w-full bg-transparent text-base text-white outline-none"
									ref={searchRef}
								/>
								<span className="rounded-md border border-white/20 px-2 py-0.5 text-xs text-white/70">
									Esc
								</span>
							</div>
						</div>
					</div>
				)}
				<AppSidebar onSidebarWidthChange={setSidebarWidth} />
				<SidebarInset className="bg-neutral-200 text-slate-900 min-h-screen mt-16 border-none">
					<header className="bg-transparent top-0 flex shrink-0 items-center gap-2 px-6 py-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
					</header>
					<h2>Landantium neque veritatis</h2>
					<div className="px-6 pb-6">{children}</div>
				</SidebarInset>
			</SidebarProvider>
		</nav>
	);
}
