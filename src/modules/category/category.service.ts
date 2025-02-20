import { db } from "../../shared/lib/db";


export async function addCategory(payload: any) {
    return await db.category.create({
        data: {
            name: payload.name,
            description: payload.description,
            imagePath:payload.imagePath
        },
    });
}


export async function getAllCategory() {
    return await db.category.findMany({});
}


export async function updateCategory(id: string, payload: any) {
    return await db.category.update({
        where: { id:id },
        data: {
            name: payload.name,
            description: payload.description,
            imagePath: payload.imagePath, 
        },
    });
}


export async function deleteAllCategories(id: any) {
    return await db.category.deleteMany();
}

export async function getCategoryById(id: string) {
    return await db.category.findFirst({
        where: {
            id: id,  // Ensure the ID is correct
        }, 
        include: {
            products: true,  // Assuming 'products' relation exists
        }
    });
}
