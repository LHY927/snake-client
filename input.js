let connection;

const handleUserInput = function (data) {
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    process.exit();
  }
    data = data.toString().toUpperCase()
    process.stdout.write(data + "\n")
  };

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    conn.write("Move: left")
    stdin.on("data", data => {
        handleUserInput(data);
    })
    return stdin;
  };

module.exports = { setupInput };