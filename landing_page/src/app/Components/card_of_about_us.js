import style from "./card_of_about_us.module.css";
export default function AboutUS() {
  return (
    <div className={style.background}>
      <div className={style.heading}>
        <h1 className={style.Main_heading}>About Us</h1>
      </div>
       <div className={style.main_div}>
        <div className={style.image}>
        </div>
        <div className={style.content_div}>
          <div className={style.overview}>
            <h2>Overview</h2>
            <p>
              The Tech Conference 2024 brings together leading innovators,
              industry experts, and technology enthusiasts for a dynamic exploration
              of the future of technology. Our goal is to empower attendees with
              knowledge, connections, and inspiration to shape tomorrows tech landscape.
            </p>
          </div>
          <div className={style.our_mission}>
            <h2>Our Mission</h2>
            <p>Our mission is to inspire and equip attendees to push the boundaries of technology, drive innovation in their respective fields, and make meaningful contributions to the future of tech.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
