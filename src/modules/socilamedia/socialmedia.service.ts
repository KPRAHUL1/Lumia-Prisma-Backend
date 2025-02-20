import { db } from "../../shared/lib/db";


export async function addSocialMedia(payload: any) {
    return await db.socialMedia.create({
        data:{
            imagePath:payload.imagePath
        }
    });
}


export async function getAllSocialMedia() {
    return await db.socialMedia.findMany({});
}