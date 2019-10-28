import React from "react";
import { TableBody } from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import { TableProps } from "./contracts/characters";

export class Table extends React.Component<TableProps, {}> {    
    render() {        
        const { CharactersData, RemoveCharacter} = this.props;
        return (
            <div className="row">
                <div className="col-12">
                   <table className="table">
                    <TableHeader/>
                    <TableBody CharactersData={CharactersData} RemoveCharacter={RemoveCharacter}/>
                   </table>
                </div>
            </div>
        )
    }
}
