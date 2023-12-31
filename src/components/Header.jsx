import React from "react";
import { navLinkRoutes } from "../utils/constants/routes";
// import { NavLink } from "react-router-dom";
import {
	Box,
	Container,
	Link,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<Box as="header" padding="10px 0 10px">
			<Container
				maxW="1054px"
				padding="5px"
				margin="0 auto"
				borderRadius="10px"
				backgroundColor="#fff"
				boxShadow="6px 6px 10px 5px rgba(34, 60, 80, 0.2)"
			>
				<UnorderedList
					margin="0"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					{navLinkRoutes.map((route) => (
						<ListItem key={route.name} padding="10px" fontWeight="500">
							<Link
								as={NavLink}
								to={route.path}
								padding="8px 15px"
								borderRadius="8px"
								transition="all ease 0.75s"
								_activeLink={{ backgroundColor: "rgba(229, 229, 229, 1)" }}
								_hover={{
									transition: "all ease 0.75s",
									backgroundColor: "rgba(229, 229, 229, 1)",
								}}
							>
								{route.name}
							</Link>
						</ListItem>
					))}
				</UnorderedList>
			</Container>
		</Box>
	);
};
export default Header;
