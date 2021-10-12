import importMe from "./imported";
export async function server() : Promise<boolean> {
    if(await importMe()){

        return true;
    } else {
        return false;
    }
}
server()
.then((val) => {
    console.log(val);
})