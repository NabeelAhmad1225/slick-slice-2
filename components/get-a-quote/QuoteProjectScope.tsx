import { ChangeEvent, useState } from 'react';
import QuoteStepActions from './QuoteStepActions';
import { QuoteStepContentForm } from './QuoteStepContent';

export interface ProjectScope {
	budget: string;
	duration: string;
}

interface Props extends QuoteStepContentForm {
	onSubmit: (body: ProjectScope | null) => void;
}

export default function QuoteProjectScope({
	onSubmit,
	onNext,
	onBack,
	currentStep,
	step,
}: Props) {
	const budgetOptions = ['$24 K or less', '$25 K - $100 K', '$100 K or more'];
	const [budget, setBudget] = useState('');
	const [error, setError] = useState('');

	const handleOnChangeForBudget = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			setBudget(event.target.value);
		}
	};

	const durationOptions = [
		'< 4 weeks',
		'1-3 months',
		'3-6 months',
		'> 6 months',
	];
	const [duration, setDuration] = useState('');

	const handleOnChangeForDuration = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			setDuration(event.target.value);
		}
	};

	function onclickSubmitForm(event: any) {
		event.preventDefault();

		const form: HTMLFormElement = event.target;

		if (!!budget && !!duration) {
			onSubmit({ budget, duration });
			onNext(step + 1);
			setError('');
		} else {
			let msg = '';
			if (!!!budget) {
				msg = 'Please select budget.';
			}
			if (!!!duration) {
				msg = msg + ' Please select duration.';
			}
			setError(msg);
			onSubmit(null);
		}
	}

	return (
		<>
			<form noValidate={true} onSubmit={onclickSubmitForm}>
				<header className="mb-box">
					<h2 className=" text-responsive-2xl">
						Select according to your project scope
					</h2>
					<p className="text-error text-responsive-base">{error}</p>
				</header>
				<label className="pl-0.5 text-responsive-base font-body text-subheading block mb-2">
					Project Budget
				</label>
				<section className="grid grid-auto-col-200 gap-card mb-card">
					{budgetOptions.map((option) => {
						return (
							<article key={option}>
								<input
									type="radio"
									name="budget"
									id={option}
									value={option}
									onChange={handleOnChangeForBudget}
									className="hidden peer"
								/>
								<label
									htmlFor={option}
									className="grid place-items-center rounded-md border-2 border-[#adb2c055] card peer-[.hidden]:peer-checked:bg-[#49c2fa1c] peer-[.hidden]:peer-checked:border-accent-2 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105">
									{option}
								</label>
							</article>
						);
					})}
				</section>
				<label className="pl-0.5 text-responsive-base font-body text-subheading block mb-2">
					Project Duration
				</label>
				<section className="grid grid-auto-col-300 gap-card">
					{durationOptions.map((option) => {
						return (
							<article key={option}>
								<input
									type="radio"
									name="duration"
									id={option}
									value={option}
									onChange={handleOnChangeForDuration}
									className="hidden peer"
								/>
								<label
									htmlFor={option}
									className="grid place-items-center rounded-md border-2 border-[#adb2c055] card peer-[.hidden]:peer-checked:bg-[#49c2fa1c] peer-[.hidden]:peer-checked:border-accent-2 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105">
									{option}
								</label>
							</article>
						);
					})}
				</section>{' '}
				<QuoteStepActions
					isActive={currentStep == step}
					onBack={() => onBack && onBack(step - 1)}
				/>
			</form>
		</>
	);
}
