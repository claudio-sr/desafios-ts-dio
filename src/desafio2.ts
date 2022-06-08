enum Profession {
    Developer,
    Doctor,
    Actor,
    Engineer
}

interface People {
    name: string,
    old: number,
    profession: Profession
}

let people1: People = {
    name: "Mary",
    old: 21,
    profession: Profession.Developer
}