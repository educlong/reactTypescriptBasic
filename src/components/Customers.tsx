import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { CustomerContext } from '../contexts/CustomerContext';

function Customers() {
  // useContext to get customers, getCustomers
  const { customers, getCustomers, toggleChecked } =
    useContext(CustomerContext);
  // useEffect
  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box mt={1} ml={2}>
      <Card raised={true}>
        <CardHeader
          title="List of user"
          titleTypographyProps={{
            variant: 'h4',
            align: 'center',
            color: 'primary',
          }}
        />
        <CardContent>
          <List>
            {customers.map((c) => (
              <ListItem button={true} key={c.id}>
                <ListItemIcon>
                  <Checkbox
                    checked={c.checked}
                    onClick={() => toggleChecked(c.id)}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${c.id}: ${c.first_name} ${c.last_name}, 
                  email: ${c.email}, checked: ${c.checked}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Customers;
