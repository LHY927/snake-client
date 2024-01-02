# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Files

1. client.js
- Responsible for the connection between client side and the server side.
2. constants.js
- Holds the constent values include IP address and port of the server.
3. input.js
- Responsible for the input from user to control the snake with WASD.
4. play.js
- The main file to call to start the system.


## Getting Started

- Follow steps inside the snek server repo to run the server side (https://github.com/taniarascia/snek)
- Run the development snake client using the `node play.js` command.