const headerPrinter = (choice) => {
  if (choice === "logo") {
    console.log(`
  ███ █   █ ███ █    ██  █   █ ███ ███   █   █  ██  █   █  ██   ██  ███ ████          
  █   ██ ██ █ █ █   █  █ █   █ █   █     ██ ██ █  █ ██  █ █  █ █    █   █  █         
  ██  █ █ █ ███ █   █  █  ███  ██  ██    █ █ █ ████ █ █ █ ████ █    ██  ████          
  █   █   █ █   █   █  █   █   █   █     █   █ █  █ █  ██ █  █ █  █ █   █ █         
  ███ █   █ █   ███  ██    █   ███ ███   █   █ █  █ █   █ █  █  ██  ███ █  █ 
  `);
  }
  if (choice === "allEmp") {
    console.log(`
              ╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗╔═╗
              ║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣ ╚═╗
              ╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝╚═╝
  `);
  }
};
module.exports = headerPrinter;