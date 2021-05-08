import React from 'react';

export const Remove: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_b)">
				<rect width="24" height="24" fill="black" fillOpacity="0.37" />
			</g>
			<path
				d="M20.7082 11.5H3.75024"
				stroke="#FF7366"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<defs>
				<filter
					id="filter0_b"
					x="-15"
					y="-15"
					width="54"
					height="54"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImage" stdDeviation="7.5" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
