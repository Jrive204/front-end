
import React from 'react';

import { Ul , Li, LiA, StyledLink} from "../styles/HeaderStyles"

  const Navigation= (props) => {
    
  
    return (
     
             <>
           <Ul>

            <Li>
                <LiA>
                <StyledLink as="a" href="https://bwfoodtrucktracker.github.io/marketing-ui/">Marketing Page</StyledLink>
                </LiA>
            </Li>


           <Li>
                <LiA>
                <StyledLink to="/home">Home</StyledLink>
                </LiA>
            </Li>

            <Li>
                <LiA>
                <StyledLink to="/trucks">Truck Wall</StyledLink>
                </LiA>
            </Li>
            
            <Li>
                <LiA>
                <StyledLink to="/addtruck">Add Truck</StyledLink>
                </LiA>
            </Li>
 

        </Ul>
        </>

       



    );  
 




      
  }


  
  

export default Navigation;