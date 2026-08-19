<script lang="ts">
	import { onMount } from 'svelte';
	import { useFern, type FernSettings } from './useFern.svelte';
	import { type Vector, dot, norm } from './utils';

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
		const delta = (currentTime - lastTime) / 1000;
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
				accu.y += current.y;

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

	onMount(() => {
		animate();
	});
</script>

<svelte:document onpointermove={handleMouseMove}></svelte:document>

<svg viewBox="0 0 512 512" class="h-full">
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
	{#each ferns as fern, index (index)}
		{#each fern.leafs as leaf, index (index)}
			<path
				d={`M ${leaf.start.x} ${leaf.start.y} C ${leaf.start.x} ${leaf.start.y} ${leaf.controlPoint.x} ${leaf.controlPoint.y} ${leaf.end.x} ${leaf.end.y}`}
				stroke="oklch(51.1% 0.096 186.391)"
				stroke-width="6"
				fill="none"
			></path>
		{/each}
		{#each fern.lines as line, index (index)}
			<line
				x1={line.start.x}
				y1={line.start.y}
				x2={line.end.x}
				y2={line.end.y}
				stroke="oklch(27.7% 0.046 192.524)"
				stroke-width="8"
				stroke-linecap="round"
			></line>
		{/each}
	{/each}
</svg>
