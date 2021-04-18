import React from 'react';

export const Ticket: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M9.12034 1.54248V3.55915"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M9.12034 12.8008V14.4875"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M9.12034 9.93792V5.92041"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.5726 14.6669C13.8688 14.6669 14.9186 13.4523 14.9186 11.9528V9.79238C14.0609 9.79238 13.3702 8.99327 13.3702 8.00104C13.3702 7.0088 14.0609 6.20883 14.9186 6.20883L14.9179 4.04755C14.9179 2.54804 13.8673 1.3335 12.5718 1.3335H3.03772C1.74227 1.3335 0.69166 2.54804 0.69166 4.04755L0.690918 6.27922C1.54862 6.27922 2.23938 7.0088 2.23938 8.00104C2.23938 8.99327 1.54862 9.79238 0.690918 9.79238V11.9528C0.690918 13.4523 1.74078 14.6669 3.03698 14.6669H12.5726Z"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
