function generateMaze(width = 10, height = 10) {
  const maze = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => Math.random() > 0.2 ? 0 : 1)
  );
  maze[0][0] = 0;
  maze[height - 1][width - 1] = 0;
  return maze;
}

module.exports = { generateMaze };
