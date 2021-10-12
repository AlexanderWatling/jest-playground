import {Buffer} from "buffer";
import dotenv from "dotenv";
import {SignJWT} from "jose/jwt/sign";
import {generateSecret} from "jose/util/generate_secret";
export default async function importMe() : Promise<boolean> {
    const sec = await generateSecret('HS256');
    
    // const jwt = await new SignJWT({})
    // .setProtectedHeader({alg: "HS256"})
    // .sign(sec);

    const buf1 = Buffer.from("BASIC=basic");
    const config = dotenv.parse(buf1);
    console.log(sec);
    return true;
} 