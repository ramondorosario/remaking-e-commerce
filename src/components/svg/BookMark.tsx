import React from 'react';

export const BookMark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="18"
			height="21"
			viewBox="0 0 18 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.66481 16.6314L2.73346 19.8808C2.25989 20.1269 1.67646 19.9527 1.41538 19.4872V19.4872C1.33985 19.343 1.2991 19.1832 1.29639 19.0204V4.62223C1.29639 1.87623 3.17282 0.777832 5.87305 0.777832H12.2163C14.8341 0.777832 16.793 1.803 16.793 4.43916V19.0204C16.793 19.2801 16.6898 19.5293 16.5061 19.7129C16.3224 19.8966 16.0733 19.9998 15.8135 19.9998C15.6479 19.9972 15.485 19.9565 15.3376 19.8808L9.36961 16.6314C9.1497 16.5126 8.88472 16.5126 8.66481 16.6314Z"
				stroke="#FDFDFD"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M5.36963 7.32241H12.6648"
				stroke="#FDFDFD"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
