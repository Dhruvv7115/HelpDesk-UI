import { useState } from "react";
import {
	AtSign,
	Bug,
	Calendar,
	ChevronDown,
	ChevronRight,
	CircleCheck,
	CircleDot,
	CircleMinus,
	CirclePlus,
	Eye,
	Image,
	Mail,
	MoreHorizontal,
	Paperclip,
	Send,
	Tag,
	X,
} from "lucide-react";

export default function Landing() {
	const [activeTab, setActiveTab] = useState<"public" | "private">("public");
	const [status, setStatus] = useState("To Do");
	const [priority, setPriority] = useState("Medium");
	const [assignee, setAssignee] = useState("Allie Harmon");
	const [project, setProject] = useState("Administrative");
	const [ticketType, setTicketType] = useState("Task");
	const [dueDate, setDueDate] = useState("");
	const [tagInput, setTagInput] = useState("");
	const [ccVisible, setCcVisible] = useState(false);
	const [reply, setReply] = useState("");
	const [openMessageId, setOpenMessageId] = useState<string | null>("msg-1");

	function cycle<T>(values: T[], current: T) {
		const index = values.indexOf(current);
		return values[(index + 1) % values.length];
	}

	return (
		<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
			<div className="flex flex-col gap-5">
				<div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div>
							<h1 className="text-xl font-semibold text-slate-900">
								Laudantium neque veritatis
							</h1>
							<div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
								<div className="flex items-center gap-2">
									<Bug className="h-4 w-4 text-blue-600" />
									OPS-102 (100669518)
								</div>
								<span className="text-slate-300">|</span>
								<span>Created 11/14/22 12:32 PST</span>
							</div>
						</div>
						<div className="flex flex-wrap items-center gap-3">
							<div className="flex items-center gap-2 text-slate-500">
								<button
									type="button"
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white"
								>
									<Mail className="h-4 w-4" />
								</button>
								<button
									type="button"
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white"
								>
									<Eye className="h-4 w-4" />
								</button>
								<div className="flex items-center gap-2 text-sm">
									<CircleDot className="h-4 w-4" />2
								</div>
								<button
									type="button"
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white"
								>
									<MoreHorizontal className="h-4 w-4" />
								</button>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-amber-200" />
								<div className="h-8 w-8 rounded-full bg-slate-200" />
								<div className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-semibold text-white">
									DK
								</div>
							</div>
							<div className="flex items-center rounded-xl border border-blue-200 bg-blue-50">
								<button className="px-4 py-2 text-sm font-semibold text-blue-700">
									{status}
								</button>
								<button
									type="button"
									onClick={() =>
										setStatus(cycle(["To Do", "In Progress", "Done"], status))
									}
									className="grid h-10 w-10 place-items-center border-l border-blue-200 text-blue-700"
								>
									<ChevronDown className="h-4 w-4" />
								</button>
							</div>
							<button
								type="button"
								className="grid h-10 w-10 place-items-center rounded-full text-slate-400"
							>
								<X className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
					<div className="flex items-center gap-6 border-b border-slate-200 px-6 pt-4 text-sm font-semibold text-slate-500">
						<button
							type="button"
							onClick={() => setActiveTab("public")}
							className={[
								"-mb-px pb-3",
								activeTab === "public"
									? "border-b-2 border-blue-600 text-blue-600"
									: "text-slate-500",
							].join(" ")}
						>
							Public Reply
						</button>
						<button
							type="button"
							onClick={() => setActiveTab("private")}
							className={[
								"pb-3",
								activeTab === "private"
									? "border-b-2 border-blue-600 text-blue-600 -mb-px"
									: "text-slate-500",
							].join(" ")}
						>
							Private Comment
						</button>
					</div>
					<div className="border-b border-slate-200 px-6 py-4 text-sm text-slate-600">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<div className="flex flex-wrap items-center gap-3">
								<span className="font-semibold text-slate-500">To:</span>
								<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
									<div className="h-6 w-6 rounded-full bg-amber-200" />
									<span>Allison Westervelt &lt;awestervelt@email.com&gt;</span>
									<X className="h-3 w-3 text-slate-400" />
								</div>
							</div>
							<button
								type="button"
								className="text-sm font-semibold text-slate-500"
								onClick={() => setCcVisible((v) => !v)}
							>
								Cc
							</button>
						</div>
						{ccVisible && (
							<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
								<AtSign className="h-4 w-4" />
								<input
									value="support@email.com"
									readOnly
									className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1"
								/>
							</div>
						)}
					</div>
					<div className="px-6 py-4">
						<textarea
							value={reply}
							onChange={(event) => setReply(event.target.value)}
							placeholder="Add a reply..."
							className="h-40 w-full rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-200"
						/>
						<div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-slate-500">
							<div className="flex items-center gap-3">
								<button
									type="button"
									className="px-2 text-sm font-semibold"
								>
									B
								</button>
								<button
									type="button"
									className="px-2 text-sm italic"
								>
									i
								</button>
								<button
									type="button"
									className="px-2 text-sm underline"
								>
									U
								</button>
								<button
									type="button"
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200"
								>
									<Image className="h-4 w-4" />
								</button>
								<button
									type="button"
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200"
								>
									<Paperclip className="h-4 w-4" />
								</button>
								<button
									type="button"
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200"
								>
									<AtSign className="h-4 w-4" />
								</button>
							</div>
							<div className="flex items-center gap-3 text-sm">
								<button
									type="button"
									className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-500"
								>
									Add to KB
								</button>
								<button
									type="button"
									onClick={() => setReply("")}
									className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-blue-600"
								>
									<Send className="h-4 w-4" />
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<div className="flex items-start justify-between gap-4">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 rounded-full bg-slate-200" />
							<div>
								<div className="text-sm font-semibold text-slate-800">
									Allie Harmon
								</div>
								<div className="text-xs text-slate-500">
									To Danny Amacher &lt;danny@capacity.com&gt;
								</div>
							</div>
						</div>
						<div className="flex items-center gap-3 text-xs text-slate-400">
							Feb 9, 2022 10:31 AM
							<button
								type="button"
								onClick={() =>
									setOpenMessageId((id) => (id === "msg-1" ? null : "msg-1"))
								}
								className="grid h-7 w-7 place-items-center rounded-lg border border-slate-200 text-slate-400"
							>
								<ChevronDown className="h-4 w-4" />
							</button>
						</div>
					</div>
					{openMessageId === "msg-1" && (
						<>
							<p className="mt-4 text-sm text-slate-700 leading-relaxed">
								Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem
								recusandae. Maxime beatae nostrum ut. Deserunt totam aut nihil
								quo beatae. Quas non delectus praesentium est illum vitae nemo
								iure.
							</p>
							<div className="mt-4 flex flex-wrap gap-3">
								<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
									<Image className="h-4 w-4" />
									<div>
										<div>Screen_shot.png</div>
										<div className="text-xs text-slate-500">
											16 Jun 2022, 1:30 PM
										</div>
									</div>
								</div>
								<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
									<Image className="h-4 w-4" />
									<div>
										<div>Screen_shot.png</div>
										<div className="text-xs text-slate-500">
											16 Jun 2022, 1:30 PM
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>

				<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<div className="flex items-start justify-between gap-4">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 rounded-full bg-slate-200" />
							<div>
								<div className="text-sm font-semibold text-slate-800">
									Allie Harmon
								</div>
								<div className="text-xs text-slate-500">
									To Danny Amacher &lt;danny@capacity.com&gt;
								</div>
							</div>
						</div>
						<div className="flex items-center gap-3 text-xs text-slate-400">
							Feb 9, 2022 10:31 AM
							<button
								type="button"
								onClick={() =>
									setOpenMessageId((id) => (id === "msg-2" ? null : "msg-2"))
								}
								className="grid h-7 w-7 place-items-center rounded-lg border border-slate-200 text-slate-400"
							>
								<ChevronDown className="h-4 w-4" />
							</button>
						</div>
					</div>
					{openMessageId === "msg-2" && (
						<p className="mt-4 text-sm text-slate-700 leading-relaxed">
							Dolorem similique et aliquid illum dolor. Vel quo magnam.
						</p>
					)}
				</div>
			</div>

			<aside className="flex flex-col gap-4">
				<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
					<div className="space-y-4 text-sm text-slate-700">
						<div>
							<div className="text-xs font-semibold uppercase text-slate-400">
								Priority
							</div>
							<button
								type="button"
								onClick={() =>
									setPriority(cycle(["Low", "Medium", "High"], priority))
								}
								className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
							>
								<span className="flex items-center gap-2">
									<CircleMinus className="h-4 w-4 text-emerald-500" />
									{priority}
								</span>
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</button>
						</div>
						<div>
							<div className="flex items-center justify-between text-xs font-semibold uppercase text-slate-400">
								Assigned To
								<button
									type="button"
									className="text-blue-600"
								>
									Assign to me
								</button>
							</div>
							<button
								type="button"
								onClick={() =>
									setAssignee(
										cycle(
											["Allie Harmon", "Danny Amacher", "Jules Cortez"],
											assignee,
										),
									)
								}
								className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
							>
								<span className="flex items-center gap-2">
									<div className="h-6 w-6 rounded-full bg-slate-200" />
									{assignee}
								</span>
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</button>
						</div>
						<div>
							<div className="text-xs font-semibold uppercase text-slate-400">
								Project
							</div>
							<button
								type="button"
								onClick={() =>
									setProject(
										cycle(
											["Administrative", "Customer Success", "Engineering"],
											project,
										),
									)
								}
								className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
							>
								<span>{project}</span>
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</button>
						</div>
						<div>
							<div className="text-xs font-semibold uppercase text-slate-400">
								Ticket Type
							</div>
							<button
								type="button"
								onClick={() =>
									setTicketType(cycle(["Task", "Bug", "Question"], ticketType))
								}
								className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
							>
								<span className="flex items-center gap-2">
									<CircleCheck className="h-4 w-4 text-blue-600" />
									{ticketType}
								</span>
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</button>
						</div>
						<div>
							<div className="text-xs font-semibold uppercase text-slate-400">
								Due Date
							</div>
							<div className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-slate-400">
								<label className="flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									<input
										type="date"
										value={dueDate}
										onChange={(event) => setDueDate(event.target.value)}
										className="bg-transparent text-sm text-slate-600 outline-none"
									/>
								</label>
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</div>
						</div>
						<div>
							<div className="text-xs font-semibold uppercase text-slate-400">
								Reporter
							</div>
							<button
								type="button"
								onClick={() =>
									setAssignee(
										cycle(
											["Allie Harmon", "Danny Amacher", "Jules Cortez"],
											assignee,
										),
									)
								}
								className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
							>
								<span className="flex items-center gap-2">
									<div className="h-6 w-6 rounded-full bg-slate-200" />
									{assignee}
								</span>
								<ChevronDown className="h-4 w-4 text-slate-400" />
							</button>
						</div>
						<div>
							<div className="text-xs font-semibold uppercase text-slate-400">
								Tags
							</div>
							<div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-500">
								<Tag className="h-4 w-4" />
								<input
									type="text"
									value={tagInput}
									onChange={(event) => setTagInput(event.target.value)}
									placeholder="Add Tag"
									className="w-full bg-transparent text-sm outline-none"
								/>
								<button
									type="button"
									onClick={() => setTagInput("")}
									className="grid h-6 w-6 place-items-center rounded-full text-slate-400"
								>
									<CirclePlus className="h-4 w-4" />
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-2 text-xs font-semibold uppercase text-slate-500">
					<button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
						Tasks
						<ChevronRight className="h-4 w-4" />
					</button>
					<button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
						Collected Fields
						<ChevronRight className="h-4 w-4" />
					</button>
					<button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
						Linked Tickets
						<span className="flex items-center gap-2">
							<span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
								2
							</span>
							<ChevronRight className="h-4 w-4" />
						</span>
					</button>
					<button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
						History
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</aside>
		</div>
	);
}
