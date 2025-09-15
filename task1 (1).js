function emailmatch()
    {
        var email = document.getElementById("email").value;
        var conemail = document.getElementById("conemail").value;
        if(email === conemail)
        {
            return true;
        }
        else
        {
            alert("Emails dont match!");
        }
    }
function ageverify()
    {
        var current = new Date();
        var dobvalue = document.getElementById("dob").value;
        dob = new Date(dobvalue);
        current.setHours(0, 0, 0, 0);
        dob.setHours(0, 0, 0, 0);
        var oneyear = 1000*60*60*24*365;

        if(dob < current)
        {
            if(dob.getMonth() >= current.getMonth() && dob.getDate() > current.getDate())
            {
                var years = (current.getTime() - dob.getTime())/oneyear;
                if((Math.ceil(parseInt(years) + 1)) >= 17)
                {
                    return true;
                }
                else
                {
                    alert("Must be 17 years old or over!")
                    return false;
                }
            }
            else
            {
                var years = (current.getTime() - dob.getTime())/oneyear;
                if(Math.ceil(parseInt(years)) >= 17)
                    {
                        return true;
                    }
                    else
                    {
                        alert("Must be 17 years old or over!")
                        return false;
                    }
            }
        }
        else if(dob > current)
        {
            alert("date cant be in the future!");
            return "no valid date inputted!";
        }
    }
function startdate()
    {
        var current = new Date();
        var startvalue = document.getElementById("start").value;
        start = new Date(startvalue);
        current.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);

        if(start >= current)
        {
            return true;
        }
        else
        {
            alert("Start date cant be before today!")
            return false;
        }
    }
document.querySelector("form").addEventListener("submit", function(event)
{
    event.preventDefault();
    var agevalid = ageverify();
    var startvalid = startdate();
    var emailvalid = emailmatch();
    if(agevalid && startvalid && emailvalid)
    {
        alert("Form submitted!")
        event.target.submit();
    }
}
)