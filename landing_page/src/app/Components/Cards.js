import style from "./Cards.module.css";
export default function Cards() {
    return (
        <div className={style.background}>
            <div className={style.heading}>
                <h1 className={style.Main_heading}>Features</h1>
            </div>
            <div className={style.Main_Div}>
                <div className={style.Sub_Div}>
                    <div className={style.card}><h1 className={style.Inside}>1. Inspiring Keynotes</h1><p className={style.Inside2}>"Hear from the visionaries shaping tech's future."</p></div>
                    <div className={style.card}><h1 className={style.Inside}>2. Hands-On Workshops</h1><p className={style.Inside2}>"Learn new skills with expert-led sessions."</p></div>
                </div>
                <div className={style.Sub_Div2}>
                    <div className={style.card}><h1 className={style.Inside}>3. Exclusive Networking</h1><p className={style.Inside2}>"Connect with top professionals and peers."</p></div>
                    <div className={style.card}><h1 className={style.Inside}>4. Startup Demos</h1><p className={style.Inside2}>"Discover groundbreaking ideas from rising startups."</p></div>
                    <div className={style.card}><h1 className={style.Inside}>5. On-Demand Content</h1><p className={style.Inside2}>"Access conference materials anytime, anywhere."</p></div>
                </div>
                <div className={style.Sub_Div}>
                    <div className={style.card}><h1 className={style.Inside}>6. Innovation Expo</h1><p className={style.Inside2}>"Explore the latest tech innovations firsthand."</p></div>
                    <div className={style.card}><h1 className={style.Inside}>7. VIP Experience</h1><p className={style.Inside2}>"Enjoy special perks and exclusive access."</p></div>
                </div>
            </div>
        </div>
    );
}
