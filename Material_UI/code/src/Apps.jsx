import React from "react";
import { Typography, AppBar, Card, CardActions, CssBaseline, Grid, Toolbar, Container, Button, CardMedia, CardContent } from "@mui/material";
import { PhotoCamera } from '@mui/icons-material';
import { styled } from '@mui/material';


const cards=[1,2,3,4,5,6,7,8,9]
const Heading = styled(Typography)`
    font-size: 30px;
    margin: 70px 25px 0 0;
`;
const Subpart = styled(Typography)`
    font-size: 20px;
    margin:30px 0;
`;
const Camicon = styled(PhotoCamera)`
    padding-right:15px;
    width:40px;
    height:40px;
`;
const CardImage = styled(CardMedia)`
    padding-top:56.25%;
`;
const Cardbody = styled(Card)`
margin:80px 10px 0 0;
`;

const Footer = styled('footer')({
    padding: '20px',
    backgroundColor:'#E7E1E1',
    margin:'20px 0 0 0'
})

;


const App = () => {
    return (
        <>

        {/* Navbar part  */}

            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Camicon />
                    <Typography Varient='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>

            {/* Text Part */}

            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Heading Varient="h1" align="center" color="textPrimary" gutterBottom>Photo Album</Heading>
                        <Subpart Varient="h3" align="center" color="textSecondary" paragraph>Hello everyone I am Aditya Kumar Jha and I am using the MUI for creating the styled app .I am very glad to thank to the youtube for teaching this subject very efficiently and I think that i wll become very good in it and in future I will make some intresting pages.</Subpart>
                    </Container>
                </div>
                <div>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                see my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secoundary action
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                {/* Card part is here */}

                <Container maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map(()=>(
                            <Grid item xs={12} sm={6} md={4}>
                            <Cardbody>
                                <CardImage 
                                image="https://source.unsplash.com/random"
                                title="Image Title"
                                />
                                <CardContent>
                                    <Typography gutterBottom>Heading</Typography>
                                    <Typography>This is a media card.You can use this section for content.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Cardbody>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer>
                <Typography Varient="h2" align="center">Footer</Typography>
                <Typography align="center" color="textSecondary">I am ending my work her.</Typography>
                <Typography align="center" color="textSecondary">Thank You</Typography>
            </Footer>
        </>
    )
}
export default App;