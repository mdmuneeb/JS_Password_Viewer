let bool = true;

function showHide()
{
    let pass = document.getElementById("password");
    let data = pass.value;
    console.log(data);
    if(bool)
    {
        pass.type = "text"
        bool = false
    }    
    else
    {
        pass.type = "password"
        bool = true
    }
}


