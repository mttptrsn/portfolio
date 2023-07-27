"use client"

import React, { FormEvent, useState } from 'react'
import FormField from './FormField';
import { FormState } from "@/common.types"
import Button from './Button';


const ContactForm = () => {

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

    const [form, setForm] = useState<FormState>({
        title: "",
        email: "",
        subject: "",
        message: "",     
    })
    
    const handleStateChange = (fieldName: keyof FormState, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        setSubmitting(true)
        
        const data = { 
            title: form.title,
            email: form.email,
            subject: form.subject,
            message: form.message, 
        }
    
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSONdata,
        }
        
        try {
            const res = await fetch(endpoint, options)
            setSubmitSuccess(true);
        } catch (error) {
            alert(`Failed to send message. Please try again!`);
        } finally {
            setSubmitting(false)
        }
    }
    
    return ( 
    <>
        {submitSuccess ? (
            <p className="py-3 text-center text-lg font-semibold">Thanks for reaching out, Ill be in touch soon.</p>
        ) : (

            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block mb-10">
                    <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Contact:</h1>
                </div>
            <div>

            <p className="py-3 text-center text-lg font-semibold">Lets get in touch; send me a message so we can talk about what you need and how I can help.</p>
        
             <form
                onSubmit={handleFormSubmit}
                className="mt-10">
                
                <div className='flex flex-wrap gap-6'>

                    <FormField
                        title="Name"
                        state={form.title}
                        placeholder="Name"
                        setState={(value) => handleStateChange('title', value)}
                    />
                
                    <FormField
                        title="Email"
                        state={form.email}
                        placeholder="Email"
                        setState={(value) => handleStateChange('email', value)}
                    />

                    <FormField
                        title="Subject"
                        state={form.subject}
                        placeholder="Subject"
                        setState={(value) => handleStateChange('subject', value)}
                    />
                    
                    <FormField
                        title='Message'
                        state={form.message}
                        placeholder="Get in touch."
                        isTextArea
                        setState={(value) => handleStateChange('message', value)}
                    />
                
                    <div className='w-full flex flexCenter'>

                    <Button
                        title={submitting ? `Sending` : `Send`}
                        type="submit"
                        submitting={submitting}
                    />
            </div>
            </div>
        </form>
        </div>
        </div> 
    )}
    </>
)}

export default ContactForm;