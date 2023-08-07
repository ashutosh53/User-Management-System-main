import { FormGroup, FormControl, Button, InputLabel, Input, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { editUser, getUser } from "../service/api.js";

import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width : 50%;
    margin : auto;
    margin-top : 20px;
`;

const Text = styled(FormControl)`
    margin-top : 20px;
`;

const defaultValue = {
    name: '',
    email: '',
    username: '',
    phone: ''
}

const EditUser = () =>{

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <Text>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "name" value={user.name}/>
            </Text>
            <Text>
                <InputLabel>email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email" value={user.email}/>
            </Text>
            <Text>
                <InputLabel>username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "username" value={user.username}/>
            </Text>
            <Text>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "phone" value={user.phone}/>
            </Text>
            <Text>
                <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
            </Text>
        </Container>
    )
}

export default EditUser;