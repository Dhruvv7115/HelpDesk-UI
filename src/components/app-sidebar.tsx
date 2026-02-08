"use client";

import * as React from "react";
import {
	ArchiveX,
	ChevronDown,
	File,
	Headset,
	Inbox,
	LayoutGrid,
	List,
	Search,
	Send,
	SlidersHorizontal,
	Trash2,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// This is sample data
const data = {
	navMain: [
		{
			title: "Inbox",
			url: "#",
			icon: Inbox,
			isActive: true,
		},
		{
			title: "Drafts",
			url: "#",
			icon: File,
			isActive: false,
		},
		{
			title: "Sent",
			url: "#",
			icon: Send,
			isActive: false,
		},
		{
			title: "Junk",
			url: "#",
			icon: ArchiveX,
			isActive: false,
		},
		{
			title: "Trash",
			url: "#",
			icon: Trash2,
			isActive: false,
		},
	],
	ticketViews: [
		{
			title: "My Tickets",
			count: 9,
			isActive: true,
		},
		{
			title: "Past Due",
			count: 4,
			isActive: false,
		},
		{
			title: "High Priority",
			count: 11,
			isActive: false,
		},
		{
			title: "Unassigned",
			count: 98,
			isActive: false,
		},
		{
			title: "All Tickets",
			count: 2192,
			isActive: false,
		},
	],
	tickets: [
		{
			title: "Soluta quam velit",
			date: "Jun 2",
			code: "APPS-216",
			status: "To Do",
			priority: "high",
			isActive: false,
		},
		{
			title: "Laudantium neque veritatis",
			date: "Jun 2",
			code: "OPS-102",
			status: "To Do",
			priority: "medium",
			isActive: true,
		},
		{
			title: "Molestiae saepe illum",
			date: "Jun 1",
			code: "APPS-216",
			status: "To Do",
			priority: "low",
			isActive: false,
		},
		{
			title: "Dignissimos maiores porro",
			date: "May 31",
			code: "APPS-216",
			status: "To Do",
			priority: "low",
			isActive: false,
		},
		{
			title: "Nihil porro repudiandae",
			date: "May 31",
			code: "APPS-216",
			status: "To Do",
			priority: "low",
			isActive: false,
		},
		{
			title: "Aspernatur cumque ipsum",
			date: "May 30",
			code: "APPS-216",
			status: "To Do",
			priority: "low",
			isActive: false,
		},
		{
			title: "Culpa quos aliquam",
			date: "May 30",
			code: "APPS-216",
			status: "To Do",
			priority: "low",
			isActive: false,
		},
		{
			title: "Atque incidunt autem",
			date: "May 30",
			code: "APPS-216",
			status: "To Do",
			priority: "low",
			isActive: false,
		},
		{
			title: "Ut sapiente sunt",
			date: "May 29",
			code: "APPS-216",
			status: "Done",
			priority: "low",
			isActive: false,
		},
	],
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
	onSidebarWidthChange?: (width: number) => void;
};

export function AppSidebar({
	onSidebarWidthChange,
	...props
}: AppSidebarProps) {
	// Note: I'm using state to show active item.
	// IRL you should use the url/router.
	const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
	const [isMiddleOpen, setIsMiddleOpen] = React.useState(false);
	const { setOpen } = useSidebar();

	const baseSidebarWidth = 350;
	const middleSidebarWidth = 260;
	const totalSidebarWidth = isMiddleOpen
		? baseSidebarWidth + middleSidebarWidth
		: baseSidebarWidth;

	React.useEffect(() => {
		onSidebarWidthChange?.(totalSidebarWidth);
	}, [onSidebarWidthChange, totalSidebarWidth]);

	return (
		<Sidebar
			collapsible="icon"
			style={
				{
					"--sidebar-width": `${totalSidebarWidth}px`,
				} as React.CSSProperties
			}
			className="overflow-hidden *:data-[sidebar=sidebar]:flex-row top-16 border-none"
			{...props}
		>
			{/* This is the first sidebar */}
			<Sidebar
				collapsible="none"
				className="w-[calc(var(--sidebar-width-icon)+1px)]!"
			>
				<SidebarContent className="bg-blue-950 border-0">
					<SidebarGroup>
						<SidebarGroupContent className="px-1.5 md:px-0">
							<SidebarMenu>
								{data.navMain.map((item) => (
									<SidebarMenuItem
										key={item.title}
										className="data-[active=true]:border-l-2 data-[active=true]:border-blue-950"
									>
										<SidebarMenuButton
											tooltip={{
												children: item.title,
												hidden: false,
											}}
											onClick={() => {
												setActiveItem(item);
												setOpen(true);
											}}
											isActive={activeItem?.title === item.title}
											className="px-2.5 md:px-2 data-[active=true]:bg-blue-950 hover:bg-blue-950 active:bg-blue-950 focus:bg-blue-950 focus-visible:bg-blue-950 data-[active=true]:text-yellow-500 text-blue-500 data-[active=true]:border-l-2 data-[active=true]:border-yellow-500 rounded-none hover:text-yellow-500 active:text-yellow-500 focus:text-yellow-500 focus-visible:text-yellow-500 active:border-l-2 active:border-yellow-500 focus:border-l-2 focus:border-yellow-500 focus-visible:border-l-2 focus-visible:border-yellow-500"
										>
											<item.icon
												className="size-10"
												strokeWidth={3}
											/>
											<span>{item.title}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>

			{/* This is the middle (third) sidebar */}
			<div
				className={cn(
					"hidden md:flex border-0 transition-[width] duration-200 ease-linear overflow-hidden",
					isMiddleOpen ? "w-65" : "w-0",
				)}
			>
				<Sidebar
					collapsible="none"
					style={{ "--sidebar-width": "260px" } as React.CSSProperties}
					className="bg-[#f2f5f9]"
				>
					<SidebarHeader className="gap-3 border-b px-4 py-3">
						<div className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
							TICKET VIEWS
						</div>
					</SidebarHeader>
					<SidebarContent className="px-3 py-3">
						<SidebarGroup className="px-0">
							<SidebarGroupContent className="space-y-1">
								{data.ticketViews.map((view) => (
									<button
										key={view.title}
										type="button"
										className={cn(
											"flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition",
											view.isActive
												? "bg-blue-600 text-white shadow-sm"
												: "text-slate-700 hover:bg-white",
										)}
									>
										<span>{view.title}</span>
										<span
											className={cn(
												"rounded-md px-2 py-0.5 text-xs font-semibold",
												view.isActive
													? "bg-blue-500 text-white"
													: "bg-white text-slate-600",
											)}
										>
											{view.count.toLocaleString()}
										</span>
									</button>
								))}
							</SidebarGroupContent>
						</SidebarGroup>
						<div className="mt-5 space-y-2 border-t pt-4">
							<div className="flex items-center gap-3 px-3 text-xs font-semibold tracking-[0.2em] text-slate-500">
								<Headset className="h-4 w-4" />
								<span>LIVE CHATS</span>
							</div>
							<div className="flex items-center gap-3 px-3 text-xs font-semibold tracking-[0.2em] text-slate-500">
								<LayoutGrid className="h-4 w-4" />
								<span>BOARDS</span>
							</div>
						</div>
					</SidebarContent>
				</Sidebar>
			</div>

			{/* This is the second sidebar */}
			<Sidebar
				collapsible="none"
				className="hidden md:flex border-0 flex-1"
			>
				<SidebarHeader className="gap-3.5 border-b p-4">
					<div className="flex w-full items-center justify-between">
						<div className="flex items-center gap-3">
							<List className="h-5 w-5 text-slate-500" />
							<button
								type="button"
								className="flex items-center gap-2 text-base font-semibold text-slate-800"
							>
								My Tickets
								<ChevronDown className="h-4 w-4 text-slate-500" />
							</button>
						</div>
						<div className="flex items-center gap-2">
							<button
								type="button"
								onClick={() => setIsMiddleOpen((open) => !open)}
								className="text-muted-foreground hover:text-foreground rounded-md border px-2 py-1 text-xs"
							>
								{isMiddleOpen ? "Hide views" : "Show views"}
							</button>
							<button
								type="button"
								className="flex items-center justify-center rounded-lg border px-2 py-1 text-slate-500"
							>
								<SlidersHorizontal className="h-4 w-4" />
							</button>
						</div>
					</div>
					<div className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-slate-500">
						<Search className="h-4 w-4" />
						<span>Search tickets</span>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup className="px-0">
						<SidebarGroupContent>
							{data.tickets.map((ticket) => {
								const priorityStyles: Record<string, string> = {
									high: "border-red-500 text-red-500 bg-red-50",
									medium: "border-orange-500 text-orange-500 bg-orange-50",
									low: "border-emerald-500 text-emerald-500 bg-emerald-50",
								} as const;
								return (
									<button
										key={ticket.title}
										type="button"
										className={cn(
											"flex w-full flex-col gap-3 border-b px-4 py-4 text-left transition",
											ticket.isActive ? "bg-blue-100/70" : "hover:bg-slate-50",
										)}
									>
										<div className="flex items-center justify-between text-sm">
											<span className="font-semibold text-slate-800">
												{ticket.title}
											</span>
											<span className="text-xs text-slate-500">
												{ticket.date}
											</span>
										</div>
										<div className="flex items-center gap-3 text-xs text-slate-500">
											<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white" />
											<span className="text-sm font-semibold tracking-tight text-slate-600">
												{ticket.code}
											</span>
											<span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
												{ticket.status}
											</span>
											<span
												className={cn(
													"inline-flex items-center justify-center rounded-full border px-2 py-1 text-[10px] font-semibold",
													priorityStyles[ticket.priority],
												)}
											>
												!
											</span>
											<span className="h-6 w-6 rounded-full bg-slate-200" />
										</div>
									</button>
								);
							})}
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</Sidebar>
	);
}
