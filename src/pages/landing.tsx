import React from "react";
import {
	Calendar,
	CheckCircle2,
	ChevronDown,
	ChevronRight,
	CircleDot,
	ClipboardList,
	Clock,
	Copy,
	Eye,
	Inbox,
	Mail,
	Search,
	User,
	X,
} from "lucide-react";

const tickets = [
	{
		id: "APPS-216",
		title: "Soluta quam velit",
		date: "Jun 2",
		status: "To Do",
		priority: "High",
		selected: false,
	},
	{
		id: "OPS-102",
		title: "Laudantium neque veritatis",
		date: "Jun 2",
		status: "To Do",
		priority: "Medium",
		selected: true,
	},
	{
		id: "APPS-216",
		title: "Molestiae saepe illum",
		date: "Jun 1",
		status: "To Do",
		priority: "Low",
		selected: false,
	},
	{
		id: "APPS-216",
		title: "Dignissimos maiores porro",
		date: "May 31",
		status: "To Do",
		priority: "Medium",
		selected: false,
	},
	{
		id: "APPS-216",
		title: "Nihil porro repudiandae",
		date: "May 31",
		status: "To Do",
		priority: "Low",
		selected: false,
	},
];

const messages = [
	{
		name: "Allie Harmon",
		to: "Danny Amacher <danny@capacity.com>",
		time: "Feb 9, 2022 10:31 AM",
		body: "Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut. Deserunt totam aut nihil quo beatae.",
		attachments: ["Screen_shot.png", "Screen_shot.png"],
	},
	{
		name: "Allie Harmon",
		to: "Danny Amacher <danny@capacity.com>",
		time: "Feb 9, 2022 10:30 AM",
		body: "Dolorem similique et aliquid illum dolor. Vel quo magnam.",
		attachments: [],
	},
];

export default function Landing() {
	return (
		<div className="flex w-full gap-4">
			<section className="flex w-[340px] flex-col gap-4">
					<div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2 font-semibold">
								<Inbox className="h-4 w-4 text-[#1d7dff]" />
								My Tickets
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</div>
							<button className="grid size-9 place-items-center rounded-xl bg-slate-100">
								<Copy className="h-4 w-4 text-slate-500" />
							</button>
						</div>
						<div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-500">
							<Search className="h-4 w-4" />
							Search tickets
						</div>
					</div>

					<div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
						{tickets.map((ticket) => (
							<div
								key={`${ticket.id}-${ticket.title}`}
								className={`border-b border-slate-100 p-4 ${
									ticket.selected
										? "bg-[#e8f1ff] border-l-4 border-l-[#1d7dff]"
										: "bg-white"
								}`}
							>
								<div className="flex items-start justify-between gap-3">
									<div>
										<div className="text-sm font-semibold text-slate-800">
											{ticket.title}
										</div>
										<div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
											<div className="rounded-full border border-slate-200 px-2 py-0.5">
												{ticket.id}
											</div>
											<div className="rounded-full bg-[#e9f5ff] px-2 py-0.5 text-[#1d7dff]">
												{ticket.status}
											</div>
										</div>
									</div>
									<div className="text-xs text-slate-400">{ticket.date}</div>
								</div>
								<div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
									{ticket.priority === "High" && (
										<CircleDot className="h-4 w-4 text-red-500" />
									)}
									{ticket.priority === "Medium" && (
										<CircleDot className="h-4 w-4 text-amber-500" />
									)}
									{ticket.priority === "Low" && (
										<CircleDot className="h-4 w-4 text-emerald-500" />
									)}
									<span>{ticket.priority}</span>
									<div className="ml-auto flex items-center gap-2">
										<div className="grid size-6 place-items-center rounded-full bg-slate-200 text-[10px] font-semibold">
											AW
										</div>
										<div className="grid size-6 place-items-center rounded-full bg-slate-200 text-[10px] font-semibold">
											DK
										</div>
										<div className="grid size-5 place-items-center rounded-full bg-[#1d7dff] text-white text-[10px]">
											2
										</div>
									</div>
								</div>
							</div>
						))}
						<div className="p-4 text-xs text-slate-400">+12 more</div>
					</div>
				</section>

			<main className="flex flex-1 flex-col gap-4">
					<div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
						<div className="flex items-start justify-between gap-6">
							<div>
								<div className="text-lg font-semibold">
									Laudantium neque veritatis
								</div>
								<div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
									<div className="flex items-center gap-2">
										<ClipboardList className="h-4 w-4 text-[#1d7dff]" />
										OPS-102 (100669518)
									</div>
									<span className="text-slate-300">|</span>
									<div className="flex items-center gap-2">
										<Calendar className="h-4 w-4" />
										Created 11/14/22 12:32 PST
									</div>
								</div>
							</div>
							<div className="flex items-center gap-3 text-slate-500">
								<button className="grid size-9 place-items-center rounded-xl bg-slate-100">
									<Mail className="h-4 w-4" />
								</button>
								<button className="grid size-9 place-items-center rounded-xl bg-slate-100">
									<Eye className="h-4 w-4" />
								</button>
								<button className="grid size-9 place-items-center rounded-xl bg-slate-100">
									<Clock className="h-4 w-4" />
								</button>
								<div className="flex items-center gap-2">
									<div className="grid size-8 place-items-center rounded-full bg-slate-200 text-xs font-semibold">
										AW
									</div>
									<div className="grid size-8 place-items-center rounded-full bg-slate-200 text-xs font-semibold">
										DK
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm">
						<div className="flex items-center gap-6 border-b border-slate-100 px-6 py-4 text-sm font-semibold">
							<span className="border-b-2 border-[#1d7dff] pb-2 text-[#1d7dff]">
								Public Reply
							</span>
							<span className="text-slate-400">Private Comment</span>
						</div>
						<div className="px-6 py-4">
							<div className="flex items-center gap-3 text-sm text-slate-500">
								<span>To:</span>
								<div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs">
									<div className="grid size-6 place-items-center rounded-full bg-slate-200 text-[10px] font-semibold">
										AW
									</div>
									Allison Westervelt &lt;awestervelt@email.com&gt;
									<X className="h-3 w-3 text-slate-400" />
								</div>
								<span className="ml-auto text-xs text-slate-400">Cc</span>
							</div>
							<div className="mt-4 h-32 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
								Add a reply...
							</div>
							<div className="mt-4 flex items-center justify-between text-slate-400">
								<div className="flex items-center gap-4 text-sm">
									<button className="font-semibold text-slate-500">B</button>
									<button className="italic">i</button>
									<button className="underline">U</button>
									<button className="grid size-8 place-items-center rounded-xl bg-slate-100">
										<Mail className="h-4 w-4" />
									</button>
									<button className="grid size-8 place-items-center rounded-xl bg-slate-100">
										<Copy className="h-4 w-4" />
									</button>
								</div>
								<div className="flex items-center gap-3 text-xs">
									<button className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
										<CheckCircle2 className="h-4 w-4 text-[#1d7dff]" />
										Add to KB
									</button>
									<button className="grid size-8 place-items-center rounded-xl bg-[#1d7dff] text-white">
										<ChevronRight className="h-4 w-4" />
									</button>
								</div>
							</div>
						</div>
					</div>

					{messages.map((message) => (
						<div
							key={`${message.name}-${message.time}`}
							className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="grid size-9 place-items-center rounded-full bg-slate-200 text-xs font-semibold">
										AH
									</div>
									<div>
										<div className="text-sm font-semibold">{message.name}</div>
										<div className="text-xs text-slate-400">
											To {message.to}
										</div>
									</div>
								</div>
								<div className="text-xs text-slate-400">{message.time}</div>
							</div>
							<p className="mt-4 text-sm text-slate-600">{message.body}</p>
							{message.attachments.length > 0 && (
								<div className="mt-4 flex gap-3">
									{message.attachments.map((attachment, index) => (
										<div
											key={`${attachment}-${index}`}
											className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600"
										>
											<div className="font-semibold">{attachment}</div>
											<div className="text-[10px] text-slate-400">
												16 Jun 2022, 1:30 PM
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</main>

			<aside className="flex w-[300px] flex-col gap-4">
					<div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm">
						<div className="flex items-center justify-between">
							<button className="bg-[#1d7dff] rounded-xl px-4 py-2 text-xs font-semibold text-white">
								To Do
							</button>
							<X className="h-4 w-4 text-slate-400" />
						</div>
						<div className="mt-4 flex flex-col gap-4 text-sm">
							<div>
								<div className="mb-2 text-xs font-semibold text-slate-500">
									Priority
								</div>
								<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
									<div className="flex items-center gap-2">
										<CircleDot className="h-4 w-4 text-amber-500" />
										Medium
									</div>
									<ChevronDown className="h-4 w-4 text-slate-400" />
								</div>
							</div>
							<div>
								<div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
									Assigned To
									<span className="text-[#1d7dff]">Assign to me</span>
								</div>
								<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
									<div className="flex items-center gap-2">
										<div className="grid size-6 place-items-center rounded-full bg-slate-200 text-[10px] font-semibold">
											AH
										</div>
										Allie Harmon
									</div>
									<ChevronDown className="h-4 w-4 text-slate-400" />
								</div>
							</div>
							<div>
								<div className="mb-2 text-xs font-semibold text-slate-500">
									Project
								</div>
								<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
									Administrative
									<ChevronDown className="h-4 w-4 text-slate-400" />
								</div>
							</div>
							<div>
								<div className="mb-2 text-xs font-semibold text-slate-500">
									Ticket Type
								</div>
								<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
									<div className="flex items-center gap-2">
										<ClipboardList className="h-4 w-4 text-[#1d7dff]" />
										Task
									</div>
									<ChevronDown className="h-4 w-4 text-slate-400" />
								</div>
							</div>
							<div>
								<div className="mb-2 text-xs font-semibold text-slate-500">
									Due Date
								</div>
								<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-slate-400">
									mm/dd/yyyy
									<Calendar className="h-4 w-4" />
								</div>
							</div>
							<div>
								<div className="mb-2 text-xs font-semibold text-slate-500">
									Reporter
								</div>
								<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
									<div className="flex items-center gap-2">
										<div className="grid size-6 place-items-center rounded-full bg-slate-200 text-[10px] font-semibold">
											AH
										</div>
										Allie Harmon
									</div>
									<ChevronDown className="h-4 w-4 text-slate-400" />
								</div>
							</div>
							<div>
								<div className="mb-2 text-xs font-semibold text-slate-500">
									Tags
								</div>
								<div className="flex items-center gap-2 text-xs text-slate-400">
									<button className="rounded-full bg-slate-100 px-3 py-1">
										Add Tag +
									</button>
								</div>
							</div>
						</div>
						<div className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
							<div className="flex items-center justify-between py-2">
								Tasks
								<ChevronRight className="h-4 w-4" />
							</div>
							<div className="flex items-center justify-between py-2">
								Collected Fields
								<ChevronRight className="h-4 w-4" />
							</div>
							<div className="flex items-center justify-between py-2">
								Linked Tickets
								<span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px]">
									2
								</span>
							</div>
							<div className="flex items-center justify-between py-2">
								History
								<ChevronRight className="h-4 w-4" />
							</div>
						</div>
					</div>
					<div className="bg-white rounded-2xl border border-slate-200/80 p-4 text-xs text-slate-400 shadow-sm">
						<User className="h-4 w-4" />
						<span className="ml-2">Helpdesk UI Preview</span>
					</div>
				</aside>
		</div>
	);
}
