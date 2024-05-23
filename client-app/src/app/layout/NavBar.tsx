import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function NavBar()
{
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Reactivities</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify='start'>
        <NavbarItem>
          <Link color="foreground" href="#">
            Activities
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Create Activity
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}