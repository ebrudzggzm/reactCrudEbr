const formatDate = (date) =>{
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('tr-TR',{   
   
    month: 'numeric',
    day: 'numeric',
   });
   } 

   export default formatDate;