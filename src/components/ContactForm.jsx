import React, { useEffect, useState } from "react";

const ContactForm=(props)=>{
    
    const initialFieldValues={
        fullName:"",
        mobile:"",
        email:"",
        address:""
    };
    const [values, setValues]=useState(initialFieldValues);
    
    useEffect(()=>{
        if(props.currentId==""){
            setValues({
                ...initialFieldValues
            })
        }else{
            // console.log(props.contactObjects[props.currentId]);
            setValues({
                
                 ...props.contactObjects[props.currentId]
            })
            // console.log(values);   
        }
    },[props.currentId, props.contactObjects])

    const inputEvent=(e)=>{
        const {name,value}=e.target;
        setValues((prevValue)=>{
            return{
                ...prevValue,
                [name]:value,
            };

        });

    }

    const formSubmit=(event)=>{
        event.preventDefault(); 
        alert(values.fullName+ values.mobile);
        props.addOrEdit(values);
    }

    return (
        <>
            <form autoComplete="off" onSubmit={formSubmit}>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            👨
                        </div>
                    </div>
                    <input className="form-control" placeholder="Full Name" onChange={inputEvent} name="fullName" values={values.fullName}>

                    </input>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            📲
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" onChange={inputEvent} name="mobile" values={values.mobile}>

                    </input>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            ✉️
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email"  onChange={inputEvent} name="email" values={values.email}>

                    </input>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            🏠
                        </div>
                    </div>
                    <input className="form-control" placeholder="Address" onChange={inputEvent} name="address" values={values.address}>

                    </input>
                </div>
                <input type="submit" value={props.currentId==""?"Save":"Update"} className="btn btn-primary"/>

            </form>
        </>
    );
}

export default ContactForm;