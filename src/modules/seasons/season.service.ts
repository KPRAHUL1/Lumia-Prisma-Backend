import { db } from "../../shared/lib/db";


// Function to add a new season
export async function addSeason(payload: any) {
  try {
    return await db.season.create({
      data: {
        name: payload.name,
      },
    });
  } catch (error) {
    console.error("Error adding season:", error);
    throw new Error("Failed to add season");
  }
}

// Function to get all seasons
export async function getAllSeasons() {
  try {
    return await db.season.findMany();
  } catch (error) {
    console.error("Error fetching seasons:", error);
    throw new Error("Failed to fetch seasons");
  }
}
