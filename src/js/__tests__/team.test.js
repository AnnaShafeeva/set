import Team from "../team";
import Character from "../character";

const team = new Team();
const nameA = new Character("мечник");
const nameB = new Character("маг");
const nameC = new Character("лучник");

test("adding character with add()", () => {
  team.add(nameA);
  expect(team.toArray()).toContain(nameA);
  expect(team.toArray().length).toBe(1);
});

test("adding duplicate character with add()", () => {
  team.add(nameA);
  expect(() => team.add(nameA)).toThrow("Игрок уже в команде!");
});

test("adding characters with addAll()", () => {
  team.addAll(nameA, nameB, nameC);
  expect(team.toArray()).toEqual([nameA, nameB, nameC]);
});

test("adding duplicate characters with addAll()", () => {
  team.addAll(nameA, nameB, nameC, nameA);
  expect(team.toArray().length).toBe(3);
});
