"use client";

import React, { useId, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SparklesProps = {
	id?: string;
	className?: string;
	background?: string;
	minSize?: number;
	maxSize?: number;
	speed?: number;
	particleColor?: string;
	particleDensity?: number;
};

export const SparklesCore = ({
	id,
	className,
	background = "transparent",
	minSize = 1,
	maxSize = 3,
	speed = 4,
	particleColor = "#ffffff",
	particleDensity = 120,
}: SparklesProps) => {
	const generatedId = useId();
	const [opacity, setOpacity] = useState(0);

	const particlesLoaded = () => {
		setOpacity(1);
	};

	return (
		<motion.div
			animate={{ opacity }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1 }}
			className={cn("h-full w-full", className)}
		>
			<ParticlesProvider init={loadSlim}>
				<Particles
					id={id ?? generatedId}
					className="h-full w-full"
					particlesLoaded={particlesLoaded}
					options={{
						background: {
							color: {
								value: background,
							},
						},
						fullScreen: {
							enable: false,
						},
						fpsLimit: 120,
						detectRetina: true,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: "push",
								},
								onHover: {
									enable: false,
								},
							},
							modes: {
								push: {
									quantity: 4,
								},
							},
						},
						particles: {
							color: {
								value: particleColor,
							},
							move: {
								enable: true,
								direction: "none",
								speed: {
									min: 0.1,
									max: 1,
								},
								outModes: {
									default: "out",
								},
							},
							number: {
								density: {
									enable: true,
								},
								value: particleDensity,
							},
							opacity: {
								value: {
									min: 0.1,
									max: 1,
								},
								animation: {
									enable: true,
									speed,
									startValue: "random",
									sync: false,
								},
							},
							shape: {
								type: "circle",
							},
							size: {
								value: {
									min: minSize,
									max: maxSize,
								},
							},
							links: {
								enable: false,
							},
						},
					}}
				/>
			</ParticlesProvider>
		</motion.div>
	);
};

export default SparklesCore;
