//collect data from HTML FOrm
function collect_data()
{
    let Name=validName();
    return false;
}

function validName()
{
    let Name=document.gerElementbyId("Name").value;
    let Error=document.gerElementbyId("NameError");
    if(Name=="")
    {
        Error.innerHTML= "*please Enter your Name";
         }
        else if (Name.length<6)
    {
        Error.innerHTML = " Name Must Carry At least 6 Character";
    }
    else{
        Error.innerHTML = "YOUR Name: "+Name;
    }
    return false;
   

}