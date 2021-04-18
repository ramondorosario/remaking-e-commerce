import React from 'react';

export const Bag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="35"
			height="36"
			viewBox="0 0 35 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.7348 31.8354L6.09552 26.2701C2.55479 24.2259 0.576833 21.3787 4.32017 16.6769L9.24603 10.2198C11.2045 7.9261 13.4102 7.88899 14.8477 8.71889L26.6008 15.5046C28.0593 16.3467 28.9922 18.2945 28.1017 21.1062L24.9727 28.6006C22.9918 33.5449 19.2755 33.8796 15.7348 31.8354Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M25.8278 14.72C27.4185 11.9648 26.4745 8.4417 23.7193 6.85099V6.85099C22.3958 6.07937 20.8194 5.86674 19.3388 6.26013C17.8582 6.65351 16.5952 7.6205 15.8292 8.94727V8.94727"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.261 19.0168L21.2082 18.9863"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.5286 15.1296L14.4757 15.0991"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
