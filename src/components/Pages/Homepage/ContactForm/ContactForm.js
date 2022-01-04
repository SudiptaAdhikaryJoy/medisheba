import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cloayx8','template_hwhkh9s',e.target,'user_XUx2hs4Z7T8AVDRMbbqDr')
        .then(res=>{console.log(res)}
        
        ).catch(err=>console.log(err));
        e.target.reset();
    }
    
    return (
        <div className="container border "
            style={{marginTop:'50px',
            width: '50%',
            backgroundImage: `url('https://wallpaperaccess.com/full/2579674.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            border: '20px',
            borderRadius: '10px',
            borderShadow: 'large'
        }}
        
        >
            
            <h1 className='text-center' style={{marginTop: '25px', color:'#E4E5E6', fontWeight: 'bold', fontSize: "30px"}}>Contact Us</h1>
            
            <form className='row' style={{ margin:'25px 85px 75px 100px', color:'#fff'}} onSubmit={sendEmail}>
                {/* <label>Name</label> */}
                <input style={{marginTop:'20px'}} type="text" name="name" className="form-control" placeholder="enter your name" />

                {/* <label>Email</label> */}
                <input style={{marginTop:'20px'}} type="email" name="user_email" className="form-control" placeholder="enter your email address" />

                <label></label>
                <textArea style={{marginTop:'20px'}} name='message' rows='4' className="form-control" placeholder="enter your messages" />
                <button
                 type="submit" 
                 value="send" 
                 className="form control btn btn-success"
                 style={{marginTop:'30px', fontWeight: 600}}
                 >Send</button>
            </form>
        </div>
    );
};

export default ContactForm;