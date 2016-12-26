export class Menu {
    private name: string;
    private image: string;
    private subName: string;
    private desc: string;

    public constructor(name: string, image: string, subName: string, desc: string) {
        this.name = name;
        this.image = image;
        this.subName = subName;
        this.desc = desc;
    }
    getName() { return this.name; }
    getImage() { return this.image; }
    getSubName() { return this.subName; }
    getDesc() { return this.desc; }
}
