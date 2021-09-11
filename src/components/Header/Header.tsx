import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "styles/globalStyles";

const HeaderWrapper = styled.header`
	display: flex;
	width: 100%;
	padding: 10px;
	background: var(--base07); 
	border-bottom: 1px solid var(--base00);
	justify-content: space-between;
	align-items: center;
`;

const LogoWrapper = styled.div`
	display: flex;
	width: 150px;
	justify-content: left;
	align-content: center;
`;

const NavWrapper = styled.ul`
	display: flex;
	justify-content: center;
	align-content: center;
`;

const Nav = styled.nav`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;

const NavList = styled.li`
	display: flex;
	padding: 10px;
	a {
		color: var(--base0C)
	}
	a.active {
		color: var(--base09)
	}
`;

export const HeaderComponent = () => {
  return (
		<HeaderWrapper>
			<Container>
			<LogoWrapper>
				<Logo width={100} height={50}/>
				</LogoWrapper>
			<Nav>
				<NavWrapper>
					<NavList>
						<NavLink to="/" activeClassName="active" exact> Home </NavLink>
					</NavList>
					<NavList>
						<NavLink to="/context" activeClassName="active"> Context Page </NavLink>
					</NavList>
					<NavList>
						<NavLink to="/redux" activeClassName="active">Redux Page</NavLink>
					</NavList>
				</NavWrapper>
			</Nav>
			</Container>
		</HeaderWrapper>
  );
};
