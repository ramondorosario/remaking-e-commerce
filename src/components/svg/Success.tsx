import React from 'react';

export const Success: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="90"
			height="90"
			viewBox="0 0 90 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M64.1443 4.14648H25.8562C12.5135 4.14648 4.14832 13.5937 4.14832 26.963V63.0383C4.14832 76.4076 12.4737 85.8548 25.8562 85.8548H64.1399C77.5268 85.8548 85.8566 76.4076 85.8566 63.0383V26.963C85.8566 13.5937 77.5268 4.14648 64.1443 4.14648Z"
				stroke="#00FFC2"
				strokeWidth="6.625"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M29.2754 45.0008L39.7606 55.4815L60.7221 34.52"
				stroke="#00FFC2"
				strokeWidth="6.625"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
