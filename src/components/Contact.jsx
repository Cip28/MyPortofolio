import React, { useState } from "react";
import { useForm } from "react-hook-form";import './sass/Contact.scss';
import background from "../images/common-bg.svg";
import Button from './Button';

const Contact = () => {

    const [pressed,setPressed] =useState(false)
    const { register, handleSubmit,formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setPressed(true);
        console.log(pressed);
    }

    return (
        <section className='contact-wrapper'>           
                  <a name="contact"></a>
            <article>
                <img src={background} alt="bg" />         
                <div className="text">
                    <h1>CONTACT</h1>
                    <div className='decorative'></div>
                    <p>Let's discuss for a possible future collaboration! </p>
                    <form action="mailto:ciprianbarbu38@yahoo.com" onSubmit={handleSubmit(onSubmit)}>
                        <label>Name  </label>
                            <br />
                            <div className="input-wrap">
                                <input type="text" {...register("name", { required: true })} placeholder='Enter your name...' className='effect-9' /><br />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        {errors.name && <span className='error'>This field is required</span>}<br/>
                        
                        <label>Email </label>
                        <div className="input-wrap">
                                <input type="text" {...register("email",{ required: true })} placeholder='Enter your email...' className='effect-9'/><br />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                        </div>                          
                        {errors.email && <span className='error' >This field is required</span>}<br/>

                        <label>Message</label><br />
                        <div className="input-wrap">
                            <textarea {...register("message", { required: true })} cols="30" rows="10" className='effect-9' placeholder='Enter your message for me...'></textarea>
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        {errors.message && <span className='error' >This field is required</span>}<br/>

                        <div className="btn-wrap">
                            <Button name="submit" classTag='contact' />
                            
                       </div>
                    </form>
                </div>
            </article>    
        </section>
    )
};

export default Contact;
