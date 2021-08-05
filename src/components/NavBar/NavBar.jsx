import { Link } from 'react-router-dom';
// We can call any exported function with this import as userService
import * as usersService from '../../utilities/users-service';

function NavBar({ user, setUser }) {
	// Add the following function
	function handleLogOut() {
		// Delegate to the users-service
		usersService.logOut();
		// Update the state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/surfspots'>SurfSpot History</Link>
			&nbsp; | &nbsp;
			<Link to='/surfspots/new'>New SurfSpot</Link>
			&nbsp; | &nbsp;
			<span>
				<b>Welcome, {user.name}</b>
			</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}

export default NavBar;
