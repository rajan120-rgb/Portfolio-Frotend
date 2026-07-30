export const handleSave = (e,popUp,setPopUp,handleSubmit) =>{
    if(e.ctrlKey && e.key.toLowerCase() === "s"){
        e.preventDefault();
        setPopUp(true);
    }
     if(popUp && e.key === "Enter"){
        e.preventDefault();
           handleSubmit(e);
        }
}