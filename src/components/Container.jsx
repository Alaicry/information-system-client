import React from "react";

const Container = ({ children, classNameFromProps }) => {
	return (
		<div
			className={
				classNameFromProps ? `${classNameFromProps} container` : "container"
			}
		>
			{children}
		</div>
	);
};

export default Container;
