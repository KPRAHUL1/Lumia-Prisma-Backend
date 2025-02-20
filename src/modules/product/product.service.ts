import { db } from "../../shared/lib/db";

// Add a new product
export async function addProduct(payload: any) {
  console.log("Received payload:", payload);

  const productData = {
    name: payload.name,
    description: payload.description,
    price: parseFloat(payload.price),
    stock: parseInt(payload.stock, 10),
    imageUrls: payload.imageUrls || [],
    categoryId: payload.categoryId,
    seasonId: payload.seasonId || null,
    brandId: payload.brandId || null,
    subscription: payload.subscription || false,
    colors: payload.colors || [],
    materials: payload.materials || [],
    sizes: payload.sizes || [],
  };

  try {
    return await db.product.create({ data: productData });
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}

// Fetch all products with an optional filter
export async function getAllProduct(filter: any = {}) {
  try {
    return await db.product.findMany({
      where: filter,
      include: {
        category: true,
        season: true,
        brand: true,
        reviews:true,
        orderItems:true
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductById(id: string) {
  
  return db.product.findFirst({
    where: {
      id: id,
      }, 
      include:{
          category:true,
          brand:true,
          season:true
      }
  });
}









