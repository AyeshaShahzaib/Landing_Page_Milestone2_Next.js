import style from "./HeroSection.module.css"
export default function HeroSection(){
    return(
        <div className={style.HeroSection_Background}>
        <div className={style.video_container}>
        <video src="/main_video.mp4" autoplay muted loop preload="autoplay" className={style.video}></video>
        <div className={style.overlay}>
                    <div className={style.SubTitle}><h2><em>"Join the Future of Technology"</em></h2></div>
                   <div className={style.p}><p>
                    "Join us at the tech event of the year! Explore groundbreaking innovations, connect with industry leaders, and gain insights from top experts. Secure your spot now and be part of the future of technology."</p></div>
                    <div className={style.secondSubTitle}><p className={style.secondSubTitle}><b> "Innovate, Inspire, Impact"</b></p></div>
                    <div className={style.Button}><button><b>Join Now</b></button></div>
                </div>
      </div> 
      </div>
       
    )
}