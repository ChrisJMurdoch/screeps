import Shell from "./shell";

export default class _Room {

    public readonly room: Room;

    constructor(room: Room) {
        this.room = room;
    }

    log(message: string): void {
        console.log(`[${this.room.name}] ${message}`);
    }

    spawn(): void {

        // Check each shell
        const spawner = this.room.find(FIND_MY_SPAWNS)[0];
        for (const shell of [Shell.HAULER]) {

            // Spawn if needed
            if (this.findMyCreeps(shell).length < 2) {
                spawner.spawnCreep(shell.construct(0), `${shell.id}-${Game.time%10000}`, { memory: { shell: shell.id } });
                return
            }
        }
    }

    findMyCreeps(shell?: Shell): Creep[] {
        return this.room.find(FIND_MY_CREEPS, { filter: creep => creep.memory.shell === shell?.id });
    }
}