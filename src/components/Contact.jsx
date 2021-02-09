import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contact=()=>{

    const [contactObjects,setContactObjects]=useState({});
    const [currentId,setCurrentId]=useState('');

    useEffect(()=>{
        firebaseDb.child('contacts')
        .on('value',snapshot=>{
            if(snapshot.val()!=null){
                setContactObjects({
                    ...snapshot.val()
                });
            }else{
                setContactObjects({})
            }
        })  

    },[setContactObjects]);

    const onDelete =(id)=>{
        if(window.confirm("Are you sure you want to delete this contact?")){
            firebaseDb.child(`contacts/${id}`)
            .remove(err=>{
                if(err){
                    console.log(err);
                }else{
                    setCurrentId('');
                }
            });
        }
    } 

    const addOrEdit=(obj)=>{
        if(currentId==""){
            firebaseDb.child("contacts")
            .push(obj,err=>{
                if(err){
                    console.log(err);
                }
                else{
                    setCurrentId('');
                }
            });
        }else{
            firebaseDb.child(`contacts/${currentId}`)
            .set(obj,err=>{
                if(err){
                    console.log(err);
                }else{
                    setCurrentId('');
                }
            });
        }
        
        
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit,currentId,contactObjects})}/>
                </div>
                <div className="col-md-7">
                    <div>
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(contactObjects).map(id=>{
                                        return <tr>
                                            <td>{contactObjects[id].fullName}</td>
                                            <td>{contactObjects[id].mobile}</td>
                                            <td>{contactObjects[id].email}</td>
                                            <td>
                                                <a className="btn text-primary" onClick={()=>{setCurrentId(id)}}>    
                                                    🖊️
                                                </a>
                                                <a className="btn text-danger" onClick={()=>{onDelete(id)}} >
                                                    🗳️
                                                </a>

                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;