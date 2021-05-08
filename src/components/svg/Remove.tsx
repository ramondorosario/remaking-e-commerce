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
				opacity="0.4"
				d="M19.325 9.46777C19.325 9.46777 18.782 16.2028 18.467 19.0398C18.317 20.3948 17.48 21.1888 16.109 21.2138C13.5 21.2608 10.888 21.2638 8.28003 21.2088C6.96103 21.1818 6.13803 20.3778 5.99103 19.0468C5.67403 16.1848 5.13403 9.46777 5.13403 9.46777"
				stroke="#FF7366"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.7082 6.23926H3.75024"
				stroke="#FF7366"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949"
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
