import RegistrationForm from "@/components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates:{
        canonical:"https://buyget.co"
    }
}

export default function FormPage(){
    return(
        <div>
            <RegistrationForm />
        </div>
    )
}