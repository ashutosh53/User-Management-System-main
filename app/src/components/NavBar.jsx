import { AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : black
`;

const Nav = styled(NavLink)`
    font-size : 20px;
    margin-right : 20px;
    color : white;
    text-decoration : None;
`;

const NavBar = () =>{
    return (
        <Header position='static'>
            <Toolbar>
                <Nav to='/'>Home</Nav>
                <Nav to='/add'>Add User</Nav>
                <Nav to='/all'>All Users</Nav>
            </Toolbar>
        </Header>
    )
}

export default NavBar;