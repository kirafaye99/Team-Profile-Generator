const createManager = function (manager) {
    return `
    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 left-4 -top-6">
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">${manager.name}</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                     <p>Manager</p>
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                     <p><a href="mailto:${manager.email}">${manager.email}</a></p>
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Office Number</p>
                        <div class="flex space-x-2">
                            <!-- <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            class="w-6 h-6 rounded-full"/>
                             <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                            class="w-6 h-6 rounded-full"/>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
                            class="w-6 h-6 rounded-full"/> -->
                            <p>${manager.office}</p>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">ID</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>${manager.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

const createEngineer = function (engineer) {
    return `
    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 left-4 -top-6">
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">${engineer.name}</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                     <p>Engineer</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                     <p><a href="mailto:${engineer.email}">${engineer.email}</a></p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Github</p>
                        <div class="flex space-x-2">
                            <!-- <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            class="w-6 h-6 rounded-full"/> -->
                            <p><a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></p>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">ID</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>${engineer.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

const createIntern = function (intern) {
    return `
    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 left-4 -top-6">
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">${intern.name}</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                     <p>Intern</p> 
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                     <p><a href="mailto:${intern.email}">${intern.email}</a></p> 
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">School</p>
                        <div class="flex space-x-2">
                            <!-- <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            class="w-6 h-6 rounded-full"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
                            class="w-6 h-6 rounded-full"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
                            class="w-6 h-6 rounded-full"/> -->
                            <p>${intern.school}</p>
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">ID</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>${intern.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
};

pageGenerator = (data) => {
    pageArr = [];

    for (let i = 0; i < data.length; i ++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArr.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArr.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createIntern(employee);

            pageArr.push(internCard);
        }
    }

    const employeeCards = pageArr.join('')

    const createTeam = createTeamPage(employeeCards);
    return createTeam;
}

const createTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <title>Team Profiles</title>
</head>
<body>
    <section>
        <div class="px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <h1
              class="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            >
              Meet the Team
            </h1>
          </div>
        </div>
      </section>

    <!-- component -->
<div class="flex items-center justify-center">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    ${employeeCards}
    </div>
</div>


</body>
</html>`;
}

module.exports = pageGenerator;