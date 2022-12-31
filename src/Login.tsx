import { useForm } from "react-hook-form";
import {Button, Grid, TextField, Typography} from "@mui/material";
import Box from '@mui/material/Box';


function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (

        <Box
          sx={{
           mt: 8,
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center'
        }}
        >

        <Typography
            component={"h1"}
            variant={"h5"}
        >
            Sign In
        </Typography>
        <Box
            component={"form"}
            sx={{
                mt: 1
            }}
            autoComplete={"off"}
        >
            <div>
                <TextField
                    type={"email"}
                    required
                    defaultValue={"test@example.com"}
                    label={"Email"}
                    name={"email"}
                    id={"email"}
                    fullWidth
                    margin={"normal"}
                />

                <TextField
                    type={"password"}
                    required
                    defaultValue={"password"}
                    label={"Password"}
                    name={"password"}
                    id={"password"}
                    fullWidth
                    margin={"normal"}
                />

                <Button variant={"contained"}>Sign In</Button>
            </div>
        </Box>
        </Box>

    );
}

export default  Login