import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header';

const Header = () => {
	const { allContexts } = useAuth();
	const { user, logOut } = allContexts;
	const { displayName, photoURL, email, uid } = user;
	return (

		<div className="">
			<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as={NavLink} className="text-white" to="/home">

						<span className="title">RoamX</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto align-items-center">
							<Nav.Link as={NavLink} to="/home" className="text-white">
								Home
							</Nav.Link>

							<Nav.Link as={NavLink} to="/about" className="text-white">
								About
							</Nav.Link>

							<Nav.Link as={NavLink} to="/contact" className="text-white">
								Contact
							</Nav.Link>
							<Nav.Link as={NavLink} to="/courses" className="text-white">
								Courses
							</Nav.Link>
							<Nav.Link as={HashLink} to="/home#feature" className="text-white">
								Feature Courses
							</Nav.Link>

							{!displayName ? (
								<>
									<Nav.Link as={NavLink} to="/signup" className="text-white">
										Sign Up
									</Nav.Link>

									<Nav.Link className="text-white" as={NavLink} to="/login">
										Log in
									</Nav.Link>
								</>
							) : (
								<>
									<Nav.Link
										as={HashLink}
										to="/dashboard"
										className="text-white"
									>
										Dashboard
									</Nav.Link>

									<NavDropdown
										title={
											<img
												style={{
													width: "45px",
													borderRadius: "50%",
												}}
												src={photoURL}
												alt=""
											/>
										}
									>

										<div className="text-center">
											<h6>{displayName}</h6>
											<p className="m-0 mb-2">{email}</p>
											<button onClick={logOut} className="btn btn-primary">
												Sign Out
											</button>
										</div>
									</NavDropdown>
								</>
							)}
							{uid === "5SR1S1fW76UBrzUJW0bjxdxcdo73" && (
								<Nav.Link as={HashLink} to="/admin" className="text-white">
									Admin Panel
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;