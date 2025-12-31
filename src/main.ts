import _Room from "./room";

export const loop = (): void => {

    // Run rooms
    for (const room of Object.values(Game.rooms))
        new _Room(room).spawn();
};