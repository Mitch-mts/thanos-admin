import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import GameOfThrones from '../service/thanos/GameOfThronesService';
import { Link } from 'react-router-dom';

const Got = () => {
    const [filters1, setFilters1] = useState(null);
    const [filters2, setFilters2] = useState(null)
    const [loading2, setLoading2] = useState(true);
    const [characters, setCharacters] = useState([])

    const gameOfThronesService = new GameOfThrones();

    
    useEffect(() => {
        setLoading2(true);

        gameOfThronesService.getGameOfThronesCharacters().then(handleGameOfThronesCharacters)

        initFilters1();
        initFilters2();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    const handleGameOfThronesCharacters = (data) => {
        setCharacters(data)        
    }

    const initFilters1 = () => {
        setFilters1({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
    };

    const initFilters2 = () => {
        setFilters2({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            house: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            member: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            aka: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
        });
    };

    
    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <span className="image-text font-bold ml-2">{data.family}</span>
            </React.Fragment>
        );
    };

    
    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: 'right' }} className="text-bold pr-6">
                    Total Members
                </td>
                <td>{calculateCustomerTotal(data.family)}</td>
            </React.Fragment>
        );
    };

    const calculateCustomerTotal = (famiily_name) => {
        let total = 0;

        if (characters) {
            for (let members of characters) {
                if (members.family === famiily_name) {
                    total++;
                }
            }
        }

        return total;
    };

    const imageBodyTemplate = (rowData) => {
        return   <Link to={`/notfound/${rowData.id}`}>
        <img src={`${rowData.imageUrl}`} 
        onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
        alt={rowData.image} className="shadow-2" width={100} />;
    </Link>
       
    };


    return(
        <div>
            <div className="col-12">
                <div className="card">
                    <h5>Game Of Thrones Characters</h5>
                    <DataTable
                        value={characters}
                        rowGroupMode="subheader"
                        groupRowsBy="family"
                        sortMode="single"
                        sortField="family"
                        sortOrder={1}
                        scrollable
                        scrollHeight="400px"
                        rowGroupHeaderTemplate={headerTemplate}
                        rowGroupFooterTemplate={footerTemplate}
                        responsiveLayout="scroll"
                    >
              
                        <Column body={imageBodyTemplate} />
                        <Column field="fullName" header="Full Name" style={{ minWidth: '200px' }}></Column>
                        <Column field="title" header="Title" style={{ minWidth: '200px' }}></Column>                        
                        
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default Got