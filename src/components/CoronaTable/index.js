import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  border-radius: 0.5rem;
  margin-top: 0.5rem;

  border: 0.5px solid ${props => props.theme.colors.text};
  @media only screen and (max-device-width: 480px) {
    margin-bottom: 1rem;
    width: 100%;
    min-width: 100px;
    max-width: 300px;
  }
  :hover {
    animation: elevate 1.5s forwards;
  }

  @keyframes elevate {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
        0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid ${props => props.theme.colors.text};
    padding: 0.4rem;
    color: ${props => props.theme.colors.text};
  }
`;

function CoronaTable({ data = [], isLoading }) {
  return (
    <TableWrapper
      style={{
        maxHeight: 420,
        overflowY: 'scroll',
      }}
    >
      <Table>
        <thead>
          <th>Negara</th>
          <th>Terkonfirmasi</th>
          <th>Aktif</th>
          <th>Sembuh</th>
          <th>Meninggal</th>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5}>Memuat data ... </td>
            </tr>
          ) : (
            data.map(({ attributes }) => (
              <tr key={attributes.OBJECTID}>
                <td>{attributes.Country_Region}</td>
                <td>{attributes.Confirmed}</td>
                <td>{attributes.Active}</td>
                <td>{attributes.Recovered}</td>
                <td>{attributes.Deaths}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default CoronaTable;
