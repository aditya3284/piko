const OutArrow = (props) => {
	return (
		<svg
			{...props}
			width='800px'
			height='800px'
			viewBox='0 0 512 512'
			data-name='Layer 1'
			// fill='#5F6379'
			fill='none'
			stroke='currentColor'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M421.24,269.93h30V429.84a48.72,48.72,0,0,1-48.66,48.66H82.77a48.72,48.72,0,0,1-48.66-48.66V110A48.72,48.72,0,0,1,82.77,61.37H242.68v30H82.77A18.68,18.68,0,0,0,64.11,110V429.84A18.68,18.68,0,0,0,82.77,448.5H402.58a18.68,18.68,0,0,0,18.66-18.66Zm-69-236.43v30h74.4L249.5,240.68l21.21,21.21L447.89,84.71v74.4h30V33.5Z' />
		</svg>
	);
};
export default OutArrow;
