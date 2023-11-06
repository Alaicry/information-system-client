import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "../redux/slices/branchSlice";
import { ListItem, OrderedList } from "@chakra-ui/react";

const Branch = () => {
	const dispatch = useDispatch();
	const { branchList } = useSelector((state) => state.branch);

	React.useEffect(() => {
		dispatch(getBranches());
	}, [dispatch]);

	return (
		<OrderedList>
			{branchList &&
				branchList?.map((branch) => (
					<ListItem key={branch.id} listStyleType="number">
						{branch.name}
					</ListItem>
				))}
		</OrderedList>
	);
};

export default Branch;
