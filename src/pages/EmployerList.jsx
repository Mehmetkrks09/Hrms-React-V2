import React, { useState, useEffect } from "react";
import { Table, Icon, Menu, Label } from "semantic-ui-react";

import EmployerService from "../Services/employerService";

export default function EmployerList() {
  const [employers, setEmloyer] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();

    employerService
      .getEmployeer()
      .then((result) => setEmloyer(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>password</Table.HeaderCell>

            <Table.HeaderCell>CreatedOne</Table.HeaderCell>
            <Table.HeaderCell>companyName</Table.HeaderCell>
            <Table.HeaderCell>phoneNumber</Table.HeaderCell>
            <Table.HeaderCell>webAddress</Table.HeaderCell>
            <Table.HeaderCell> Verify</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employers) => (
            <Table.Row key={employers.id}>
              <Table.Cell>{employers.email}</Table.Cell>
              <Table.Cell>{employers.password}</Table.Cell>

              <Table.Cell>{employers.createdOn}</Table.Cell>
              <Table.Cell>{employers.companyName}</Table.Cell>
              <Table.Cell>{employers.phoneNumber}</Table.Cell>
              <Table.Cell>{employers.webAddress}</Table.Cell>

              <Table.Cell>
                {employers.systemPersonnelVerify ? (
                  <Label color="green">
                    <Icon name="check" size="large" />
                  </Label>
                ) : (
                  <Label
                    basic
                    color="red"
                    style={{ marginLeft: "0.5em", fontSize: "0.80em" }}
                  >
                    <Icon name="hourglass two" />
                    onay bekleniyor.
                  </Label>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
