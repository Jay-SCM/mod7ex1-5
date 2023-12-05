//home.jsx
// import React from 'react';
// const Home = () => {
//     return (
//         <div>
//             <h2>Home Page</h2>
//             <p>Welcome to the Home page!</p>
//         </div>
//     );
// };
// export default Home;

//exercise5

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Home Page
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Welcome to the Home page!
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;