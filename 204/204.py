def find_path(x, y, steps = 0, wallBroken = False):
    steps += 1
    if x == len(grid) - 1 and y == len(grid[0]) - 1:
        return steps
    elif x >= len(grid) or y >= len(grid[0]):
        return False
    elif grid[x][y]:
        if wallBroken:
            return False # wall
        wallBroken = True
    return find_path(x + 1, y, steps, wallBroken) or find_path(x, y + 1, steps, wallBroken)
    


grid = [[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0]]
maxStep = 10 ** 6
print(find_path(0, 0))


def answer(maze):
    grid = maze
    maxStep = len(grid) * len(grid[0])
    print(find_path(0, 0))

