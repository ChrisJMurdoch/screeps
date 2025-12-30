
export const loop = (): void => {
    console.log('tick')
    for (const name in Game.creeps) {
        const creep = Game.creeps[name];
        creep.say('tick');
    }
};
