const makeTeam = (team) => {
    const teamHTML = []
   
    const getIntern = intern => {
        let internCard =`<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"  class="card w-25 m-2">
        <div class="card-body">
            <div class="bg-info p-2 mb-3 text-white">
                <h4 class="card-title">${intern.name}</h4>
                <h5>${intern.id}</h5>
            </div>
            <ul style="list-style: none" class="bg-white">
                <li><i class="fa-solid fa-school"></i>: Intern</li>
                <li><i class="fa-solid fa-envelope"></i>:<a href="mailto:${intern.email}">${intern.email}</a></li>
                <li><i class="fas fa-chalkboard-teacher"></i>:${intern.school}</li>
            </ul>
        </div>
    </div>`
    teamHTML.push(internCard)
    }
    
    const getEngineer = engineer => {
        let engineerCard =`<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"  class="card w-25 m-2">
        <div class="card-body">
            <div class="bg-info p-2 mb-3 text-white">
                <h4 class="card-title">${engineer.name}</h4>
                <h5>${engineer.id}</h5>
            </div>
            <ul style="list-style: none" class="bg-white">
                <li><i class="fa-solid fa-wrench"></i> Engineer</li>
                <li><i class="fa-solid fa-envelope"></i>:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li><i class="fa-brands fa-github"></i>:<a href="https://github.com/${engineer.userName}/">${engineer.userName}</a></li>
            </ul>
        </div>
    </div>`
    teamHTML.push(engineerCard)
    }

    const getManager = manager => {
        let managerCard =`<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"  class="card w-25 m-2">
        <div class="card-body">
            <div class="bg-info p-2 mb-3 text-white">
                <h4 class="card-title">${manager.name}</h4>
                <h5>${manager.id}</h5>
            </div>
            <ul style="list-style: none" class="bg-white">
                <li><i class="fa-solid fa-list-check"></i> Manager</li>
                <li><i class="fa-solid fa-cube"></i> Office:${manager.office}</li>
                <li><i class="fa-solid fa-envelope"></i>:<a href="mailto:${manager.email}">${manager.email}</a></li>
            </ul>
        </div>
    </div>`
    teamHTML.push(managerCard)
    }

    for (employee of team) {
        if (employee.getRole() === "Manager"){
            getManager(employee)
        }
        if (employee.getRole() === "Engineer"){
            getEngineer(employee)
        }
        if (employee.getRole() === "Intern"){
            getIntern(employee)
        }
    }
    return teamHTML.join('')
}


//TODO REVIEW MAP FUNCTION AGAIN

function generateHTML(collectedData) {
    return `
    <!doctype html>
<html lang="en">

<head>
    <title>My Team</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.2.0-beta1 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <nav style="justify-content: center;" class="navbar navbar-light bg-info mb-3">
        <!-- <div class="nav navbar-nav"> -->
        <p class="fs-1 text-center text-white">My Team</p>
        <!-- </div> -->
    </nav>
    <!--cards go here-->
    <div class="d-flex">  
        ${makeTeam(collectedData)}
    </div>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
        crossorigin="anonymous"></script>


</body>

</html>
    `
}

module.exports = generateHTML;