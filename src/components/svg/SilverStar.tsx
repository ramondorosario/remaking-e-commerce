import React from 'react';

export const SilverStar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="20"
			height="18"
			viewBox="0 0 20 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z"
				stroke="white"
				strokeOpacity="0.83"
			/>
		</svg>
	);
};
