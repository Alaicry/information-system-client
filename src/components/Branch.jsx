import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "../redux/slices/branchSlice";

const Branch = () => {
	const dispatch = useDispatch();
	const { branchList } = useSelector((state) => state.branch);

	React.useEffect(() => {
		dispatch(getBranches());
	}, [dispatch]);

	return (
		<ol className="list list-reset">
			{branchList &&
				branchList?.map((branch) => (
					<li key={branch.id} className="">
						{branch.name}
					</li>
				))}
		</ol>
	);
};

export default Branch;
