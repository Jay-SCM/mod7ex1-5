
// import React from 'react';
// const Login = () => {
//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form>
//                 <label>
//                     Username:
//                     <input type="text" />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input type="password" />
//                 </label>
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };
// export default Login;

//exercise5

// Login.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <TextField label="Username" variant="outlined" fullWidth margin="normal" />
                <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;