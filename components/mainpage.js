import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'

export default function Mainpage() {
    return (
        <>
        <Button variant="outlined">테스트 버튼</Button>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <div style={{border : '1px solid black'}}>size=4</div>
                </Grid>
                <Grid size={8}>
                    <div style={{border : '1px solid black'}}>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}