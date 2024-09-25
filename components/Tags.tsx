export default function Tags({ tags, parentId }: any) {
	return (
		<>
			<div className="flex flex-wrap gap-y-2 gap-x-2">
				{tags?.map((tag: string, innerIndex: number) => {
					let color = 'bg-blue-200 hover:bg-blue-300 text-blue-600';

					if (tag === 'APP') {
						color = 'bg-green-200 hover:bg-green-300 text-green-600';
					} else if (tag === 'CMS') {
						color = 'bg-red-200 hover:bg-red-300 text-red-600';
					} else if (tag === 'SEO') {
						color = 'bg-blue-200 hover:bg-blue-300 text-blue-600';
					} else {
						color = 'bg-yellow-200 hover:bg-yellow-300 text-yellow-600';
					}
					const className = `px-2.5 py-1 ${color} rounded-full text-xs font-semibold h-fit w-fit`;
					return (
						<span key={`${parentId}-${innerIndex}`} className={className}>
							{tag}
						</span>
					);
				})}
			</div>
		</>
	);
}
