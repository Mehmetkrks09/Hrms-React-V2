import {React} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function Categories() {
    return (
      
        <div >
            <Menu   pointing vertical  size="large">
        <Menu.Item  as={Link} to={"/"}
     
     
        />
        <Menu.Item  as={Link} to={"/cvList"}
       
        icon="address card outline"
          name="Cv's"
        />
        <Menu.Item  as={Link} to={"/jobSeeker"}
         icon="users"
          name="Job Seeker's"
         
        />
          <Menu.Item  as={Link} to={"/EmployerList"}
         icon="users"
          name="Employer List"
         
        />
        
        <Menu.Item  as={Link} to={"/advertisement"}
         icon="address card
         "
          name="İş İlanları"
         
        />

        <Menu.Item  as={Link} to={"/favoriteList"}
         icon="heart
         "
          name="Favorilerim"
         
        />
         <Menu.Item  as={Link} to={"/emp"}
         icon="male"
          name="Çalışan Güncelleme"
         
        />
        <Menu.Item  as={Link} to={"/employerUpdate"}
         icon="user plus"
          name="employer Update"
         
        />
        <Menu.Item  as={Link} to={"/emp"}
         icon="male"
          name="Çalışan Güncelleme"
         
        />
       

<Menu.Item  as={Link} to={"/cvAdd"}
         icon="address card"
          name="Cv Add"
         
        />

        
<Menu.Item  as={Link} to={"/photoUpdate"}
         icon=" image"
          name=" Update Photo"
         
        />
      </Menu>
        </div>
    )
}
