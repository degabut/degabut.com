import { Component } from "solid-js";

const Bullshit: Component<{ bottom?: boolean }> = (props) => {
	return (
		<div
			class="absolute w-full flex justify-evenly left-0"
			classList={{
				"bottom-0 items-end": props.bottom,
				"top-0": !props.bottom,
			}}
		>
			<div class="w-3 h-[3.5rem] bg-black/10" />
			<div class="w-3 h-[5rem] bg-black/10" />
			<div class="w-3 h-[6.5rem] bg-black/10" />
			<div class="w-3 h-[7rem] bg-black/10" />
			<div class="w-3 h-[6rem] bg-black/10" />
			<div class="w-3 h-[5.5rem] bg-black/10" />
			<div class="w-3 h-[5rem] bg-black/10" />
			<div class="w-3 h-[5.5rem] bg-black/10" />
			<div class="w-3 h-[6.5rem] bg-black/10" />
			<div class="w-3 h-[4.5rem] bg-black/10" />
			<div class="w-3 h-[3.5rem] bg-black/10" />
			<div class="w-3 h-[4.5rem] bg-black/10" />
			<div class="w-3 h-[6rem] bg-black/10" />
			<div class="w-3 h-[6.5rem] bg-black/10" />
			<div class="w-3 h-[5rem] bg-black/10" />
			<div class="w-3 h-[4rem] bg-black/10" />
			<div class="w-3 h-[3.5rem] bg-black/10" />
			<div class="w-3 h-[5rem] bg-black/10" />
			<div class="w-3 h-[6.5rem] bg-black/10" />
			<div class="w-3 h-[7rem] bg-black/10" />
			<div class="w-3 h-[6rem] bg-black/10" />
			<div class="w-3 h-[5.5rem] bg-black/10" />
			<div class="w-3 h-[4.5rem] bg-black/10" />
		</div>
	);
};

export const App: Component = () => {
	return (
		<div class="h-screen text-neutral-100">
			<div class="flex w-full h-full items-center">
				<div
					classList={{
						"relative flex items-center justify-center h-full px-2 md:px-4": true,
						"bg-gradient-to-tl from-brand-500 to-brand-700": true,
					}}
				>
					<img class="w-16 md:w-32 xl:w-48" src="/img/degabut.png" />

					<Bullshit />
					<Bullshit bottom />
				</div>

				<div
					classList={{
						"relative w-full h-full z-10 overflow-hidden": true,
						"flex flex-col 2xl:flex-row md:items-center justify-center 2xl:justify-start": true,
						"px-4 sm:px-8 md:px-16 space-y-12 2xl:space-x-24": true,
						"bg-gradient-to-tr from-neutral-900 to-neutral-800": true,
					}}
				>
					<div class="flex flex-col space-y-8 shrink-0">
						<div class="2xl:py-4 font-brand font-black text-6xl md:text-7xl 2xl:text-8xl md:text-center 2xl:text-left">
							degabut
						</div>
						<div class="space-y-4">
							<div class="text-neutral-300 text-lg md:text-xl 2xl:text-3xl md:text-center 2xl:text-left">
								Open source, feature rich Discord music bot
							</div>
							<div class="flex flex-row md:justify-center 2xl:justify-start text-neutral-400 text-lg md:text-xl space-x-8">
								<a
									class="underline underline-offset-2 hover:text-neutral-100"
									href="https://github.com/degabut"
								>
									GitHub
								</a>
								<a
									class="underline underline-offset-2 hover:text-neutral-100"
									href="https://github.com/degabut/examples/tree/main/v3"
								>
									Guide
								</a>
							</div>
						</div>
					</div>

					<div class="flex flex-col 2xl:flex-grow items-start 2xl:items-center">
						<a
							href="https://github.com/degabut/degabut-web#screenshot-showcase"
							class="flex flex-col items-center"
						>
							<div
								classList={{
									"relative max-w-lg 2xl:max-w-5xl shadow-black shadow-2xl": true,
									"rounded-md md:rounded-lg": true,
									"border-[3px] border-b-4 md:border-[6px] md:border-b-8 border-neutral-700": true,
								}}
							>
								<img class="w-[72rem]" src="/img/bg.png" alt="" />
							</div>
							<div class="bg-neutral-700 w-[10%] h-8" />
							<div class="bg-neutral-700 w-[25%] h-3 rounded-full" />
						</a>
					</div>

					<div class="absolute w-[200%] bottom-0 h-full bg-gradient-to-bl from-neutral-700 to-neutral-900 opacity-50 -z-10 -rotate-45 left-32" />
				</div>
			</div>
		</div>
	);
};
