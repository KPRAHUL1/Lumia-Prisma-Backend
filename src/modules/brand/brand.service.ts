import { db } from "../../shared/lib/db";


export async function addBrand(payload: any) {
    return await db.brand.create({
        data:{
            name:payload.name,
            imageUrl:payload.imageUrl
        }
    });
}


export async function getAllBrand() {
    return await db.brand.findMany({});
}