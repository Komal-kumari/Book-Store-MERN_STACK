import React from 'react'
import './ContactUs.css'


const ContactUs = () => {

    const submit = () => {
        alert("Your message Sent! We will get back to you soon");
    }
    return (
        <div>
            <div class="row" style={{ fontSize: "1.8rem" }}>
                <div class="col-md-3 "></div>
                <div class="col-md-7" id="form_container">
                    <h2>Contact Us</h2>
                    <p> Please send your message below. We will get back to you at the earliest! </p>
                    <form >
                        <div class="row">
                            <div class="col-sm-12 form-group">
                                <label for="message"> Message:</label>
                                <textarea class="form-control" type="textarea" maxlength="6000" rows="7" ></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <label for="name"> Your Name:</label>
                                <input type="text" class="form-control"  />
                            </div>
                            <div class="col-sm-6 form-group">
                                <label for="email"> Email:</label>
                                <input type="email" class="form-control"  />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 form-group">
                                <button type="submit" onClick={submit}  class="btn btn-lg btn-success" >Send </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactUs