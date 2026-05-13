interface user {
    id: number;
    title: string;
    genre: string;
    year: number;
    rating: number;
}
 async function movies() {
    const response = await fetch("./api fetch/cn.json");
    const data: user[] = await response.json();
    console.log(data);
}

movies();