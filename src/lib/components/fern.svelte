<script lang="ts">
	import { onMount } from 'svelte';
	import { useFern, type FernSettings } from './useFern.svelte';
	import { type Vector, dot, norm } from './utils';
	import { draw, scale } from 'svelte/transition';
	import Stone from './stone.svelte';
	import SmallStone from './small-stone.svelte';
	import { backOut } from 'svelte/easing';

	const fernsSettings: FernSettings[] = [
		{
			baseStiffness: 20,
			tipStiffness: 2,
			length: 256,
			leafLength: 32,
			leafStart: 4,
			restAngles: Array.from({ length: 64 }, (_, index) => index ** 1.1 * -0.01)
		},
		{
			baseStiffness: 20,
			tipStiffness: 2,
			length: 200,
			leafLength: 32,
			leafStart: 4,
			restAngles: Array.from({ length: 64 }, (_, index) => index ** 1.05 * 0.01)
		},
		{
			baseStiffness: 10,
			tipStiffness: 1,
			length: 128,
			leafLength: 32,
			leafStart: 2,
			restAngles: Array.from({ length: 32 }, (_, index) => index ** 1.2 * 0.03)
		},
		{
			baseStiffness: 10,
			tipStiffness: 1,
			length: 128,
			leafLength: 32,
			leafStart: 2,
			restAngles: Array.from({ length: 32 }, (_, index) => index ** 1.2 * -0.04)
		}
	];

	const ferns = fernsSettings.map((fernSettings) => useFern(fernSettings));

	const mousePosition: Vector = { x: 0, y: 0 };
	const lastMouseVector: Vector = { x: 0, y: 0 };
	const mouseVectors: Vector[] = [];

	let lastTime = Date.now();
	const animate = () => {
		const currentTime = Date.now();
		const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
		lastTime = currentTime;

		if (mouseVectors.length > 60) {
			mouseVectors.pop();
		}

		lastMouseVector.x = lastMousePosition.x - mousePosition.x;
		lastMouseVector.y = lastMousePosition.y - mousePosition.y;
		mouseVectors.push(lastMouseVector);
		mousePosition.x = lastMousePosition.x;
		mousePosition.y = lastMousePosition.y;

		const windVector = mouseVectors.reduce(
			(accu, current) => {
				accu.x += current.x;
				accu.y -= current.y;

				return accu;
			},
			{ x: 0, y: 0 }
		);

		const windVectorNorm = norm(windVector);

		const windAngleFromUp =
			windVectorNorm > 0
				? Math.acos(dot({ x: 0, y: 1 }, windVector) / windVectorNorm) * Math.sign(windVector.x)
				: 0;

		ferns.forEach((fern) => fern.update(delta, windVectorNorm, windAngleFromUp));

		requestAnimationFrame(animate);
	};

	const lastMousePosition: Vector = { x: 0, y: 0 };
	const handleMouseMove = (event: PointerEvent) => {
		const x = event.clientX;
		const y = event.clientY;

		lastMousePosition.x = x;
		lastMousePosition.y = y;
	};

	let mounted = $state(false);

	onMount(() => {
		animate();
		mounted = true;
	});
</script>

<svelte:document onpointermove={handleMouseMove}></svelte:document>

<div class="relative size-64">
	{#if mounted}
		<svg viewBox="0 0 512 512" class="size-full">
			<defs>
				<linearGradient id="gradientLeft" x1="0" x2="1" y1="0" y2="0">
					<stop stop-color="oklch(51.1% 0.096 186.391)" offset="0%" />
					<stop stop-color="oklch(27.7% 0.046 192.524)" offset="100%" />
				</linearGradient>
				<linearGradient id="gradientRight" x1="0" x2="-1" y1="0" y2="0">
					<stop stop-color="oklch(51.1% 0.096 186.391)" offset="0%" />
					<stop stop-color="oklch(27.7% 0.046 192.524)" offset="100%" />
				</linearGradient>
				<linearGradient id="gradientTop" x1="0" x2="0" y1="0" y2="1">
					<stop stop-color="oklch(51.1% 0.096 186.391)" offset="0%" />
					<stop stop-color="oklch(27.7% 0.046 192.524)" offset="100%" />
				</linearGradient>
			</defs>
			{#each ferns as fern, fernIndex (fernIndex)}
				{#each fern.leafs as leaf, leafIndex (leafIndex)}
					<path
						d={`M ${leaf.start.x} ${leaf.start.y} C ${leaf.start.x} ${leaf.start.y} ${leaf.controlPoint.x} ${leaf.controlPoint.y} ${leaf.end.x} ${leaf.end.y}`}
						stroke="black"
						stroke-width="7"
						fill="none"
						in:draw|global={{ delay: 450 + leafIndex * 10 }}
					></path>
					<path
						d={`M ${leaf.start.x} ${leaf.start.y} C ${leaf.start.x} ${leaf.start.y} ${leaf.controlPoint.x} ${leaf.controlPoint.y} ${leaf.end.x} ${leaf.end.y}`}
						stroke="oklch(51.1% 0.096 186.391)"
						stroke-width="5"
						fill="none"
						in:draw|global={{ delay: 450 + leafIndex * 10 }}
					></path>
				{/each}
				{@const polyline = fern.lines
					.map((line, index) =>
						index == 0
							? `${line.start.x},${line.start.y} ${line.end.x},${line.end.y}`
							: `${line.end.x},${line.end.y}`
					)
					.join(' ')}
				<polyline
					points={polyline}
					stroke="black"
					stroke-width="10"
					stroke-linecap="round"
					fill="none"
					in:draw|global={{ delay: 450, duration: 800 }}
				></polyline>
				<polyline
					points={polyline}
					stroke="oklch(27.7% 0.046 192.524)"
					stroke-width="8"
					stroke-linecap="round"
					fill="none"
					in:draw|global={{ delay: 450, duration: 800 }}
				></polyline>
			{/each}
		</svg>
		<div class="absolute bottom-12 left-32" in:scale={{ opacity: 1, easing: backOut, delay: 300 }}>
			<Stone></Stone>
		</div>
		<div in:scale={{ opacity: 1, easing: backOut, delay: 150 }} class="absolute bottom-11 left-24">
			<SmallStone></SmallStone>
		</div>
		<div class="absolute bottom-9 left-28 scale-75" in:scale={{ opacity: 1, easing: backOut }}>
			<Stone></Stone>
		</div>
	{/if}
</div>
