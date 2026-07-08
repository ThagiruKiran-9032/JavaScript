            function hello(){
                let age = document.getElementById("age").value;
                if (age>=1) {
                    if (age>=18) {
                    document.getElementById("vote").innerHTML = "You are eligible to vote"
                }
                else if (age<18 && age>12) {
                    document.getElementById("vote").innerHTML = "Apprecited but not correct age to vote"
                }
                else {
                    document.getElementById("vote").innerHTML = "You are too young !!!"
                }

                }
                else {
                    document.getElementById("vote").innerHTML= h3;
                }
            }
       
            
