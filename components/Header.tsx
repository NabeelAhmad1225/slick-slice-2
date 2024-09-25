import React from 'react';

type Props = {
	title: string;
	accentTitle: string;
	icon: React.ReactNode;
	background?: string;
	text?: string;
};

const Header: React.FC<Props> = ({
	title,
	accentTitle,
	icon,
	background = 'bg-white',
	text = 'text-body',
}) => {
	return (
		<div className={`${background} h-fit pt-32 -mt-32`}>
			<header className="container-fluid w-full pt-card pb-card flex gap-container flex-col md:flex-row items-center justify-between h-fit md:h-[20rem] lg:h-[25rem]">
				<h1
					className={`text-responsive-6xl relative z-10 md:max-w-md self-center lg:max-w-lg ${text}`}>
					{title} &nbsp;<strong>{accentTitle}</strong>
				</h1>
				<div className="max-w-sm md:max-w-2xl w-full h-full -mb-32 md:mb-0">
					{icon}
				</div>
			</header>
		</div>
	);
};

export default Header;
