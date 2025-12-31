declare global {

    interface CreepMemory {
        shell: string;
    }

    interface FlagMemory {
        [name: string]: any;
    }

    interface SpawnMemory {
        [name: string]: any;
    }

    interface RoomMemory {
        [name: string]: any;
    }
}

export {};