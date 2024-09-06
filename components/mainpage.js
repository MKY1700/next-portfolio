import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import { useRouter } from 'next/router';

export default function Mainpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/projects');
    };
    return (
        <div className={styles.wrapper}>
            <Grid container spacing={10}>
                <Grid size={4}>
                    <div className={styles.introduce}>
                        <h2 style={{fontSize:'45px'}}>안녕하십니까</h2>
                        <p>충주상업고등학교 스마트IT과 2학년 5반 문근영입니다. 저는 2007년 12월 5일 서울에서 태어났습니다. 제가 가장 좋아하는 것은 야구입니다. 저는 친구들과의 커뮤니케이션이 잘 되며 리더쉽이 강합니다.</p>
                        <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
                    </div>
                </Grid>
                <Grid size={7}>
                    <div>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}