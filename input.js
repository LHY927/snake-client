let connection;

const handleUserInput = function (data) {
    // \u0003 maps to ctrl+c input
    if (data === '\u0003') {
      process.exit();
    }else if (data.toString().toUpperCase() === 'W'){
      connection.write("Move: up");
      connection.write("Say: go up")
    }else if (data.toString().toUpperCase() === 'A'){
      connection.write("Move: left");
    }else if (data.toString().toUpperCase() === 'S'){
      connection.write("Move: down");
    }else if (data.toString().toUpperCase() === 'D'){
      connection.write("Move: right");
    }
  };

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", data => {
        handleUserInput(data);
    })
    return stdin;
  };

module.exports = { setupInput };