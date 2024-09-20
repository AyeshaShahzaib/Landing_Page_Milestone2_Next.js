import style from "./header.module.css"
export default function Header(){
   return(
   <div className={style.Header}>
      <a className={style.a}><h1>TECH</h1></a>
    <a href="" className={style.a}>Home</a>
    <a href="" className={style.a}> Features</a>
    <a href="" className={style.a}>About Us</a>
    <a href="" className={style.a}>Contact Us</a>
   </div>
   )
}