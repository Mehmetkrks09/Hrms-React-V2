import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu, Icon,Header} from "semantic-ui-react";
import { Link } from "react-router-dom";

import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut(params) {
    setIsAuthenticated(false);

    history.push("/");
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <div class="">
      <Menu  fixed="top">
        <Container >
          {" "}
          <Menu.Item  name="Ana Sayfa"  as={Link} to={"/"}>
          <Header as="h4" color="blue" className="orbitron" icon="cube" content="HRMS" />
            
          </Menu.Item>
          
  
         
          {/* <Menu.Item name="messages" /> */}
          <Menu.Menu position="right">
            {/* <CartSummary /> */}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
