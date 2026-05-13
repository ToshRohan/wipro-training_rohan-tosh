// 1. Generic API Wrapper

interface Album {
    userId: number;
    id: number;
    title: string;
}

async function fetchData<T>(url: string): Promise<T> {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data: T = await response.json();

    return data;
}

async function getAlbum() {

    const album = await fetchData<Album>(
        "https://jsonplaceholder.typicode.com/albums/1"
    );

    console.log(album.title);
}

getAlbum();
// 2. Record Mapping for Configuration

enum Role {
    Admin,
    Editor,
    Guest
}

const PermissionMap: Record<Role, boolean> = {
    [Role.Admin]: true,
    [Role.Editor]: true,
    [Role.Guest]: false
};

console.log(PermissionMap);
// 3. Exhaustiveness Checking (never)

type TaskStatus =
    | "Open"
    | "InProgress"
    | "Closed";

function handleTask(status: TaskStatus) {

    switch (status) {

        case "Open":
            console.log("Task is open");
            break;

        case "InProgress":
            console.log("Task is in progress");
            break;

        case "Closed":
            console.log("Task is closed");
            break;

        default:

            const exhaustiveCheck: never = status;

            return exhaustiveCheck;
    }
}
// 4. Recursive Navigation Type

type FolderNode = {
    name: string;

    files?: string[];

    subFolders?: FolderNode[];
};

const root: FolderNode = {

    name: "Root",

    files: ["index.ts"],

    subFolders: [

        {
            name: "Components",

            files: ["Button.tsx"]
        },

        {
            name: "Utils",

            subFolders: [
                {
                    name: "Helpers",

                    files: ["helper.ts"]
                }
            ]
        }
    ]
};

console.log(root);
// 5. Template Literal Types for CSS

type MarginValue =
    `${number}px`
    | `${number}rem`
    | `${number}vh`;

const m1: MarginValue = "10px";

const m2: MarginValue = "2rem";

const m3: MarginValue = "50vh";

console.log(m1);
console.log(m2);
console.log(m3);

// 6. Conditional Types & infer Keyword

type UnwrapPromise<T> =
    T extends Promise<infer U>
        ? U
        : T;


// Examples

type A = UnwrapPromise<Promise<string>>;
// string

type B = UnwrapPromise<Promise<number>>;
// number

type C = UnwrapPromise<boolean>;
// boolean
// 7. Union Manipulation Puzzle

type AllEvents =
    | "click"
    | "dbclick"
    | "submit"
    | "reset"
    | "keypress";


// Extract

type MouseEvents = Extract<
    AllEvents,
    "click" | "dbclick"
>;


// Exclude

type NonFormEvents = Exclude<
    AllEvents,
    "submit" | "reset"
>;


// Examples

const mouseEvent: MouseEvents = "click";

const nonFormEvent: NonFormEvents = "keypress";

console.log(mouseEvent);

console.log(nonFormEvent);