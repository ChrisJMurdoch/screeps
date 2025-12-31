export default class Shell {

    static readonly HAULER: Shell = new Shell('HLR', [CARRY, MOVE], 3, [CARRY, MOVE]);

    public readonly id: string;
    private readonly baseParts: BodyPartConstant[];
    private readonly maxExtensions: number;
    private readonly extensionParts: BodyPartConstant[];
    private readonly baseCost: number;
    private readonly extensionCost: number;

    constructor(name: string, baseParts: BodyPartConstant[], maxExtensions: number, extensionParts: BodyPartConstant[]) {
        this.id = name;
        this.baseParts = baseParts;
        this.maxExtensions = maxExtensions;
        this.extensionParts = extensionParts;
        this.baseCost = this.baseParts.reduce((sum, part) => sum + BODYPART_COST[part], 0);
        this.extensionCost = this.extensionParts.reduce((sum, part) => sum + BODYPART_COST[part], 0);
    }

    construct(energy: number): BodyPartConstant[] {
        let parts = [...this.baseParts];
        let cost = this.baseCost;
        let extensions = 0;
        while (cost + this.extensionCost <= energy && extensions < this.maxExtensions) {
            parts = parts.concat(this.extensionParts);
            cost += this.extensionCost;
            extensions++;
        }
        return parts;
    }
}