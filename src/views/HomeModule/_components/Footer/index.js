import React from 'react';
import styled from 'styled-components'


const HeaderList = styled.ul`
  padding: 0!important;
  max-width: 250px;
`;
const ListTitle = styled.h5`
  font-size: 22px;
  color: #F08B23;
`;

const ListItem = styled.li`
  list-style: none !important;
  cursor: pointer;
  line-height: 2;
  color: rgba(255,255,255,0.8);
  font-size: 16px;
`;
const ItemLink = styled.a`
  text-decoration: none !important;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  &:hover{
    color:#F08B23;
  }
`

export default function FooterComponent(props) {
  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 pt-4">
            <ListTitle>IMV Vietnam</ListTitle>
            <HeaderList>
              <ListItem>
                <ItemLink>About Us</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>e-CGV</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>Gift Card</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>Career</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>Contact IMV</ItemLink>
              </ListItem>
            </HeaderList>
          </div>
          <div className="col-md-3 pt-4">
            <ListTitle>Terms and Conditions</ListTitle>
            <HeaderList>
              <ListItem>
                <ItemLink>Conditions of Website</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>Terms of Service</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>Payment Policy</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink>Privacy Policy</ItemLink>
              </ListItem>
              <ListItem>
                <ItemLink> F.A.Q</ItemLink>
              </ListItem>
            </HeaderList>
          </div>
          <div className="col-md-3 pt-4">
            <ListTitle>Follow Us</ListTitle>
            <>
              <ItemLink> <i style={{fontSize: 40}} class="fa fa-facebook-square"></i></ItemLink>
              <ItemLink> <i style={{fontSize: 40}} class="fa fa-twitter-square"></i></ItemLink>
              <ItemLink> <i style={{fontSize: 40}} class="fa fa-youtube-square"></i></ItemLink>
              <ItemLink> <i style={{fontSize: 40}} class="fa fa-instagram"></i></ItemLink>
            </>
          </div>
          <div className="col-md-3 pt-4">
            <ListTitle>Customer Service</ListTitle>
            <HeaderList>
              <ListItem>Hotline: 1900 6017</ListItem>
              <ListItem>Working hours: 8:00 - 22:00 (Monday to Sunday, including Public Holidays)</ListItem>
              <ListItem>Email support: hoidap@imv.vn</ListItem>
            </HeaderList>
          </div>
        </div>
      </div>
    </div>
  )
}
