export  const handleEnter = (e)=>{
     if(e.key === "Enter"){
        e.preventDefault();
        const form = e.target.form;
        const index = Array.from(form.elements).indexOf(e.target);
        if(form.elements[index+1]){
            form.elements[index+1].focus();
        }
     }
}

