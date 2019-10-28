import React from 'react';
import { TableProps  } from '../contracts/characters';
export const TableBody = (props: TableProps) => {
    const rows = props.CharactersData.map((row, index) => 
        (
        <tr key={index}>
          <td>{row.name}</td> 
          <td>{row.job}</td>
          <td><button onClick={() => props.RemoveCharacter(index)} className="btn btn-success">Remove</button></td>
        </tr>
        )
    );
    return <tbody>{rows}</tbody>;
  }
