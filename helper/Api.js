const Inquirer = require("../helper/Inquirer");

const Api = async (userInput) => {
  const choice = parseInt(userInput[0].slice(0, 1));
  let result = [];

  switch (choice) {
    case 1:
      result = await viewAll("http://localhost:3001/api/employee/");
      console.log(` `);
      console.log(
        `id\tFirst Name\tLast Name\ttitle\t\tdepartment\tsalary\t\tManeger Name`
      );
      console.log(
        `--\t----------\t----------\t----------\t----------\t--------\t--------------------`
      );
      for (let i = 0; i < result.length; i++) {
        console.log(
          `${result[i].id}\t${result[i].first_name}\t\t${result[i].last_name}\t${result[i].title}\t${result[i].department}\t\t${result[i].salary}\t\t${result[i].maneger}`
        );
      }
      break;
    case 2:
      // fetching the user input and add to role table
      const employee = await Inquirer.inquirerQuestioner(
        [
          { first_name: "Please enter the first name:" },
          { last_name: "Please enter the last name:" },
          { role_id: "Please enter the role id" },
          { manager_id: "Please enter the manager id" },
        ],
        false
      );
      addToDB("http://localhost:3001/api/employee/", {
        first_name: employee.first_name,
        last_name: employee.last_name,
        role_id: employee.role_id,
        manager_id: employee.manager_id,
      });
      break;
    case 3:
      // fetching the user input and add to role table
      const shouldUpdate = await Inquirer.inquirerQuestioner(
        [
          { userID: "Please enter the employee id:" },
          { roleID: "Please enter the new role id:" },
        ],
        false
      );
      update("http://localhost:3001/api/employee/" + shouldUpdate.userID, {
        role_id: shouldUpdate.roleID,
      });
      break;
    case 4:
      result = await viewAll("http://localhost:3001/api/role/");
      console.log(` `);
      console.log(`id\ttitle\t\tdepartment\tsalary`);
      console.log(`--\t-------------\t----------\t----------`);
      for (let i = 0; i < result.length; i++) {
        console.log(
          `${result[i].id}\t${result[i].title}\t${result[i].department}\t\t${result[i].salary}`
        );
      }
      break;
    case 5:
      // fetching the user input and add to role table
      const role = await Inquirer.inquirerQuestioner(
        [
          { title: "Please enter the role title:" },
          { salary: "Please enter the role salary:" },
          { d_id: "Please enter the department id" },
        ],
        false
      );
      addToDB("http://localhost:3001/api/role/", {
        title: role.title,
        salary: role.salary,
        department_id: role.d_id,
      });
      break;
    case 6:
      result = await viewAll("http://localhost:3001/api/department/");
      console.log(` `);
      console.log(`id\tdepartment`);
      console.log(`--\t-------------`);
      for (let i = 0; i < result.length; i++) {
        console.log(`${result[i].id}\t${result[i].department}`);
      }
      break;
    case 7:
      // fetching the user input and add to department table
      const department = await Inquirer.inquirerQuestioner(
        [{ name: "Please enter the Department name:" }],
        false
      );
      addToDB("http://localhost:3001/api/department/", {
        department_name: department.name,
      });
      break;
    default:
      break;
  }
};
module.exports = Api;

const viewAll = async (url) => {
  const json = await getAll(url);
  return json.data;
};

const getAll = async (url) => {
  return fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {});
};
const addToDB = async (url, data) => {
  //   console.log(data);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {});
};
const update = async (url, data) => {
  //   console.log(data);
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {});
};
