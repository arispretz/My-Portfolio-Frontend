import React from 'react';
import '../App.css';
import { Box, Text, Button, Link, Table, Tooltip } from '@radix-ui/themes';

const Certifications = ({certificates}) => {
    return (
      <>
        <Box style={{ display: 'flex' }}>
            <Box style={{ flex: 2, paddingTop: '20px', backgroundColor: '#F6EEB4', color: 'purple' }}>
              <Text as="div" style={{ textAlign: 'center' }}>
                <h3>View my Certifications here</h3>
              </Text>
              </Box>
            </Box>
            <Box style={{ paddingBottom: '50px', backgroundColor: '#F6EEB4' }}>
            <Table.Root style={{ paddingLeft: '70px', backgroundColor: '#F6EEB4', border: '3px solid #fff' }}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Certificate</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Organization</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Year</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body variant="surface" size="2">
              {certificates.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell><Link href={item.Url} target="_blank" rel="noopener noreferrer" size="2" backgroundColor="sand" weight="bold" color="green" highContrast>
                  <Tooltip content="Click to open">
                    <Button variant="ghost" cursor= "pointer">
                      {item.Certificate}
                    </Button>
                    </Tooltip>
                  </Link></Table.Cell>
                <Table.Cell>{item.Organization}</Table.Cell>
                <Table.Cell>{item.Year}</Table.Cell>
              </Table.Row>
               ))}
            </Table.Body>
          </Table.Root>
          </Box>
                </>
              );
            };

  export default Certifications;
