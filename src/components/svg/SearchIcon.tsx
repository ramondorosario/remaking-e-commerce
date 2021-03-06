import React from 'react';

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="11.8445"
				cy="11.8445"
				r="5.99243"
				stroke="white"
				strokeWidth="1.00001"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M16.0122 16.3232L18.3616 18.6665"
				stroke="white"
				strokeWidth="1.00001"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
