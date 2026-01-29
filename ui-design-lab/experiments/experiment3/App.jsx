import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, CardActions, Typography, Box } from '@mui/material';

function App() {
    const [userData, setUserData] = useState({
        username: '',
        email: ''
    });

    const handleSubmit = () => {
        alert(`User Info:\nUsername: ${userData.username}\nEmail: ${userData.email}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                padding: 2
            }}
        >
            <Card sx={{ maxWidth: 500, width: '100%' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Material UI Form
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom align="center">
                        Experience Material Design components
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            value={userData.username}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                    </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button variant="contained" color="primary" onClick={handleSubmit} size="large">
                        Submit
                    </Button>
                    <Button variant="outlined" color="secondary" size="large">
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default App;
