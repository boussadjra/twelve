const IconMedicationAlert = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M22 19H24V24H22z" />
			<path d="M23,31a8,8,0,1,1,8-8A8,8,0,0,1,23,31Zm0-14a6,6,0,1,0,6,6A6,6,0,0,0,23,17Z" />
			<circle cx="23" cy="26" r="1" />
			<path d="M20,2H4A2,2,0,0,0,2,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2h8V28H6V26h5V12H6V10H18v3h2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM9,14V24H6V14ZM4,8V4H20V8Z" />
		</svg>
	);
};
export default IconMedicationAlert;
