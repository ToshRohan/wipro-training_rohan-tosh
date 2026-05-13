"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function movies() {
    const response = await fetch("./api fetch/cn.json");
    const data = await response.json();
    console.log(data);
}
movies();
//# sourceMappingURL=cn.js.map