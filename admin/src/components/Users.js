/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: Displays a list of users, so that admins can manage and make changes to a users account.
*/
import React, { useEffect, useState } from 'react'

import firebase from 'firebase/app';
import 'firebase/firestore';

import { DataGrid } from '@material-ui/data-grid';
import Chip from '@material-ui/core/Chip';
import { Clear, Check } from '@material-ui/icons';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

//Gets all the users from the database.
export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        firebase.firestore()
            .collection("users")

            .onSnapshot((snapshot) => {
                let result = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                setUsers(result)
            })
    }, [])
    const history = useHistory();
//List a grid of users and has a button that lets you edit a user.
    const columns = [
        { field: 'id', headerName: 'ID', width: 280 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'username', headerName: 'Username', width: 130 },
        {
            field: 'banned', headerName: 'banned', width: 150,
            renderCell: (params) => (
                <div>
                    {params.value ?
                        <Chip
                            icon={<Check />}
                            label="True"
                            color="primary"
                            variant="outlined"
                        />
                        :
                        <Chip
                            icon={<Clear />}
                            label="False"
                            color="secondary"
                            variant="outlined"
                        />


                    }
                </div>

            ),

        },
        {
            field: 'link', headerName: 'Detail', width: 150,
            renderCell: (params) => (

                <div>
                    <Button variant="contained" color="primary" onClick={() => { history.push({pathname: `/user/${params.row.id}`}) }}>
                        View
                    </Button>
                </div>

            ),

        },
    ];

    return (
        //return a datagrid that lists all the users.
        <div style={{ height: 400, width: '100%', marginTop: '100px', backgroundColor: 'white' }}>
            <DataGrid rows={users} columns={columns} pageSize={5} column={columns.map((column) => ({
                ...column,
                disableClickEventBubbling: true,
            }))} />
        </div>
    )
}
