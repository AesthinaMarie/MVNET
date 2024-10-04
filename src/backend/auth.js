import React,{createContext,useContext,useEffect,useState} from "react";
import { supabase } from "./client";


const AuthContext = createContext();

export const AuthProvider = ({childern}) => {
    const [session,setSession] = useState(null);
    const [loading,setLoading] = useState(true);


    // Handle User session on Initial Load

    useEffect(()=>{
        const currentSession = supabase.auth.session();
        setSession(currentSession)
        setLoading(false);

        const {data: authListener} = supabase.auth.onAuthStateChange(
            (event,newSession) =>{
                setSession(newSession);
                console.log('Auth event'+ event)
            }
        )

        return () =>{
            authListener?.unsubscribe()
        }




    },[])

    const value = {
        session,
        user : session?.user || null,
        signIn : (credentials) => supabase.auth.sign
    }


}