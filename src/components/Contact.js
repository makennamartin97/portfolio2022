import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Spin from 'react-reveal/Spin';


const Contact = ()=>{
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleValidation=()=>{
            let fields = values;
            let errors = {};
            let formIsValid = true;

            //Name
            if(!fields["name"]){
               formIsValid = false;
               errors["name"] = "Cannot be empty";
            }
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Cannot be empty";
             }
             if(!fields["message"]){
                formIsValid = false;
                errors["message"] = "Cannot be empty";
             }
             setErrors(errors)
           return formIsValid;
    }

 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
    };
    
    function sendEmail(e) {
        e.preventDefault();
        if(handleValidation()){
            emailjs.sendForm('service_ifny9hi', 'template_6vo7f7h', e.target, 'user_tlZlD5XvX8g1NQ5XuvEDM')
            .then((result) => {
            console.log(result.text);
            setSent("Your message was sent!")
            
            }, (error) => {
            console.log(error.text);
            setSent("Error")
            },[errors]);
            
            
        }
        else{
            alert("The name, email, and message fields are required")
        }
        e.target.reset();
        
        
        

        
    }
    
    


    return (
        
            
        <div className="section"id="contact">
            <form onSubmit={sendEmail} className="contact" >
                <div>
                    <div className="header">
                        <Spin>
                            <h2>Get In Touch</h2>
                        </Spin>
            
                        
                        <h3>My inbox is always open for new opportunities and questions!</h3>
                    </div>
                    
                    {sent == 'Error'? <p className='error'>{sent}</p> : <p className='success'>{sent}</p>}
                    
                    <div className="line">
                        <label for="name">Name:</label>
                        <input onChange={handleChange} value={values.name} type="text" className="form-control input" placeholder="Name" name="name"/>
                    </div>
                    <div className="line">
                        <label for="email">Email:</label>
                        <input onChange={handleChange}value={values.email} type="email" className="form-control input" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="line">
                        <label for="subject">Subject:</label>
                        <input onChange={handleChange} type="text" className="form-control input" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="line">
                        <label for="message">Message:</label>
                        <textarea onChange={handleChange} value={values.message} className="form-control input" placeholder="Message" id="" rows="3" name="message"></textarea>
                    </div>
                    <div className="center">
                        <input type="submit" className="btn2 buttonslide slidedown" value="Send Message"></input>
                    </div>
                </div>
            </form>

            
            
        </div>
       
    )
}

export default Contact