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
      break;
    case 3:
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
      // fetching the user input
      const userInput = await Inquirer.inquirerQuestioner(
        [{ menu: "Please enter the Department name:" }],
        false
      );
      addRole("http://localhost:3001/api/department/", {
        department_name: userInput.menu,
      });
      break;
    default:
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
const addRole = async (url, data) => {
  console.log(data);
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
