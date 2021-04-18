import React from 'react';

export const Time: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="33"
			height="32"
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="16.5" cy="16" r="16" fill="url(#paint0_linear)" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.6522 9.27246H13.3475C11.1504 9.27246 9.77295 10.8281 9.77295 13.0296V18.9699C9.77295 21.1714 11.1431 22.727 13.3475 22.727H19.6515C21.8559 22.727 23.2275 21.1714 23.2275 18.9699V13.0296C23.2275 10.8281 21.8559 9.27246 19.6522 9.27246Z"
				stroke="#200E32"
				strokeWidth="1.09091"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M18.9662 17.4671L16.5 15.9959V12.8242"
				stroke="#200E32"
				strokeWidth="1.09091"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="36.5"
					y1="-1.81818"
					x2="-6.40909"
					y2="32"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#E5DBFB" />
					<stop offset="1" stopColor="#B395F3" />
				</linearGradient>
			</defs>
		</svg>
	);
};
