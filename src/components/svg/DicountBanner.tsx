import React from 'react';

export const DiscountBanner: React.FC<React.SVGProps<SVGSVGElement>> = (
	props,
) => {
	return (
		<svg
			{...props}
			width="47"
			height="47"
			viewBox="0 0 47 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d)">
				<circle cx="23.5" cy="20" r="16" fill="url(#paint0_linear)" />
			</g>
			<path
				opacity="0.4"
				d="M24.8451 14.3638V16.1238"
				stroke="white"
				strokeWidth="1.09091"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M24.8451 24.189V25.661"
				stroke="white"
				strokeWidth="1.09091"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M24.8451 21.6908V18.1846"
				stroke="white"
				strokeWidth="1.09091"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M28.3741 25.818C29.6992 25.818 30.7725 24.758 30.7725 23.4494V21.5639C29.8957 21.5639 29.1895 20.8665 29.1895 20.0006C29.1895 19.1346 29.8957 18.4365 30.7725 18.4365L30.7717 16.5503C30.7717 15.2416 29.6977 14.1816 28.3733 14.1816H18.6263C17.3019 14.1816 16.2278 15.2416 16.2278 16.5503L16.2271 18.4979C17.1039 18.4979 17.8101 19.1346 17.8101 20.0006C17.8101 20.8665 17.1039 21.5639 16.2271 21.5639V23.4494C16.2271 24.758 17.3004 25.818 18.6255 25.818H28.3741Z"
				stroke="white"
				strokeWidth="1.09091"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<defs>
				<filter
					id="filter0_d"
					x="0.227273"
					y="0.363637"
					width="46.5455"
					height="46.5455"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feMorphology
						radius="1.45455"
						operator="erode"
						in="SourceAlpha"
						result="effect1_dropShadow"
					/>
					<feOffset dy="3.63636" />
					<feGaussianBlur stdDeviation="4.36364" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.973987 0 0 0 0 0.676463 0 0 0 0 0.89068 0 0 0 0.2 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear"
					x1="15.5"
					y1="33.4545"
					x2="39.5"
					y2="11.6364"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#EE82D0" />
					<stop offset="0.685857" stopColor="#F8ACE3" />
					<stop offset="1" stopColor="#FFC8F0" />
				</linearGradient>
			</defs>
		</svg>
	);
};
