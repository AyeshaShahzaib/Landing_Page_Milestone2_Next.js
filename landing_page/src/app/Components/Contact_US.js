import style from "./contact_us.module.css"
export default function Contact_Us(){
    return(
        <div className={style.background}>
           <div className={style.heading}><h2>Contact us</h2> </div> 

      <div className={style.contactform}>
      <h3 className={style.heading2}>Send a Message</h3>
        <form>
        <div className={style.first_input}><input type="text" name="name" placeholder="  Your Name" required /> 
          <input type="email" name="email" placeholder="  Your Email" required /></div> 
          <div className={style.message}><textarea name="message" rows="5" placeholder="  Your Message" required></textarea></div>
          <button type="submit">Submit</button>
        </form>
      </div>
            
            
            
            
            
            <div className={style.contactsection}>
    <div class="contact-info">
        <h2>Contact Info</h2>
        <p><strong>Email:</strong> info@techconference.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 Tech Conference Street, City, Country</p>
        <div class="social-links">
            <a href="#">Twitter</a> |
            <a href="#">LinkedIn</a> |
            <a href="#">Facebook</a>
        </div>
    </div>
    </div>
    </div>
    )}