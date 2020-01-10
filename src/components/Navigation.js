
import React from 'react';

import { Ul , Li, LiA, StyledLink, Leftlinks, Otherlinks} from "../styles/HeaderStyles"

  const Navigation= (props) => {
    
  
    return (
     
             <>
           
           <Ul>
           <Leftlinks>
            <Li>
                <LiA>
                <StyledLink as="a" href="https://bwfoodtrucktracker.github.io/marketing-ui/">Marketing Page</StyledLink>
                </LiA>
            </Li>
           <Li>
                <LiA>
                <StyledLink to="/">Login</StyledLink>
                </LiA>
            </Li>
            </Leftlinks> 

            <Otherlinks>
            <Li>
                <LiA>
                <StyledLink to="/trucks">Truck Wall</StyledLink>
                </LiA>
            </Li>
            </Otherlinks>
           
 

        </Ul>
        </>

       



    );  
 




      
  }


  
  

export default Navigation;