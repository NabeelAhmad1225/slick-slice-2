import { CheckIcon } from '@heroicons/react/24/solid';
import { ChangeEvent, useState } from 'react';

export interface Props {
	name: string;
	label?: string;
	value: string;
	checked: boolean;
	onChange?: (value: string) => void;
	onChangeBoolean?: (checked: boolean) => void;
}
export default function Checkbox({
	name,
	label,
	value,
	checked,
	onChange,
	onChangeBoolean,
}: Props) {
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(event.target.value);
		onChangeBoolean && onChangeBoolean(event.target.checked);
	};

	return (
		<article className="flex gap-box ml-0.5">
			<div className="relative">
				<input
					type="checkbox"
					name={name}
					id={name}
					value={value}
					checked={checked}
					onChange={handleOnChange}
					className="peer w-4 h-4 appearance-none transition duration-200 cursor-pointer focus:outline-none rounded-sm ring-2 ring-[#adb2c055] bg-white hover:ring-[#adb2c0ad] checked:scale-[.8] checked:ring-8 checked:ring-accent-2 checked:bg-accent-2 checked:hover:ring-accent-2"
				/>
				<label
					htmlFor={name}
					className="left-0 top-0.5 hidden peer-checked:block absolute cursor-pointer">
					<CheckIcon className="stroke-[3] h-4 w-4 stroke-white" />
				</label>
			</div>
			<label htmlFor={name} className=" text-body font-body cursor-pointer">
				{label}
			</label>
		</article>
	);
}
