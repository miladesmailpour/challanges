const Api = require("./helper/Api");
const Menu = require("./helper/Menu");

const init = async () => {
  let closeApplication = true;

  // while (closeApplication) {
    closeApplication = await Api();
    // console.log("index - " + closeApplication);
  // }
  // closeApplication = await Api();
  if (closeApplication) return;
};

init();
