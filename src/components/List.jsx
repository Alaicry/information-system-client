import { Link, ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { Link as ReactRouterLink } from "react-router-dom";

const List = ({ list }) => {
	return (
		<UnorderedList
			margin="0"
			padding="5px"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			listStyleType="none"
			gap="15px"
		>
			{list.map((item) => (
				<ListItem
					key={item.name}
					padding="10px"
					borderRadius="10px"
					backgroundColor="rgba(229, 229, 229, 1)"
					transition="all ease 0.3s"
					_hover={{
						backgroundColor: "rgba(229, 229, 229, 0.6)",
					}}
				>
					<Link
						as={ReactRouterLink}
						to={item.path}
						display="flex"
						alignItems="center"
						gap="5px"
						_hover={{
							textDecoration: "none",
						}}
					>
						{item.name}
						<ListIcon as={GoLinkExternal} />
					</Link>
				</ListItem>
			))}
		</UnorderedList>
	);
};

export default List;
