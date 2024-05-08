import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { useDispatch } from "react-redux";

export function registerUser(eventname,firstname,lastname,phonenumber,gender,personemail,designation,email, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/addperson', {eventname,firstname,lastname,phonenumber,gender,personemail,designation,email, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Person Registred in event and ticket send to Person mailID")
        }
        catch (error) {
            console.log("Error At Service of User Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}

export function registerEvent(organizerName, eventname, organizerEmail, date, time, categories, venue, description, email, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/registerevent', { organizerName, eventname, organizerEmail, date, time, categories, venue, description, email, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Event Registered")
        }
        catch (error) {
            console.log("Error At Service of event Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}

export function registerAuthorities(eventName,authId,authLocation,authPassword,authDesignation, email, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/registerauth', {eventName, authId,authLocation,authPassword,authDesignation,email, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("auth Registred")
        }
        catch (error) {
            console.log("Error At Service of auth Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}


export async function findallData(setallData, setLoading,email) {
    try {
        setLoading(true);
        const response = await apiConnector("GET",`http://localhost:4000/dashboard/alleventData?email=${email}`);

        if (!response.data.success) {
            setLoading(false);
            throw new Error(response.data.msg);
        }

        if (response.data.success) {
            setallData(response.data.data);
        }
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error)
        toast.error("Could not get your event");
    }

}


//find resisitesion data
export async function resallData(setallData, setLoading,setData, setRecords,email) {
    try {
        setLoading(true);
        const response = await apiConnector("GET",`http://localhost:4000/dashboard/resalldata?email=${email}`);

        if (!response.data.success) {
            setLoading(false);
            throw new Error(response.data.msg);
        }

        if (response.data.success) {
            console.log(response.data.data)
            setallData(response.data.data);
            setData(response.data.data); 
            setRecords(response.data.data);
        }
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error)
        toast.error("Could not get your event");
    }

}


//authalldata
export async function authallData(setallData, setLoading,setData, setRecords,email) {
    try {
        setLoading(true);
        const response = await apiConnector("GET",`http://localhost:4000/dashboard/authalldata?email=${email}`);

        if (!response.data.success) {
            setLoading(false);
            throw new Error(response.data.msg);
        }

        if (response.data.success) {
            console.log(response.data.data)
            setallData(response.data.data);
            setData(response.data.data); 
            setRecords(response.data.data);
        }
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error)
        toast.error("Could not get Auth data");
    }

}

//Check ticketnavigate
export function checkticket(codedata, ) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/checkticket', {codedata, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Ticket Found")

        }
        catch (error) {
            console.log("Error At Service of ticket check Registration", error)
            toast.error("Ticket not Found");
        }
        toast.dismiss(toastId)
    }
}



//Add Home form data
export function addhomeData(name,email,subject,massage, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/addhomedata', {name,email,subject,massage, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Massage Registered")
        }
        catch (error) {
            console.log("Error At Service of data Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}


//subsribemaildata
export function addhomeMail(subInput, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/addsubmail', {subInput, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Mail Subscribed")
        }
        catch (error) {
            console.log("Error At Service of User Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}