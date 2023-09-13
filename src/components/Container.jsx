import React from "react";

const Container = ({ children, classNameFromProps }) => {
	return (
		<div
			className={
				classNameFromProps ? `container ${classNameFromProps}` : "container"
			}
		>
			{children}
		</div>
	);
};

export default Container;
