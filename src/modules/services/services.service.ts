// import { db } from "../../shared/lib/db"


//  export async function addServices(payload : any){
//     return await db.services.create({
//         data: {
//             title:payload.title,
//             shortNote:payload.shortNote,
//             description:payload.description,
//             icon:payload.icon,
//             order:parseInt(payload.order),
//             isActive:payload.isActive,
//             featuredImagePath: payload.featuredImagePath,
//         }
//     })
// }

// export async function getAllServices(){
//    return await db.services.findMany({
//     where:{
//         deletedAt:null
//     },
//     include:{
//         serviceFeatures:true,
//         serviceHighlights:true,
//     }
//    })  
// }

// export async function getServiceById(id: string) {
  
//     return db.services.findFirst({
//       where: {
//         id: id,
//         deletedAt:null
//         }, 
//         include:{
//             serviceFeatures:true,
//             serviceHighlights:true,
//         }
//     });
//   }
// export async function updateServices(id : string, payload : any){
//     return db.services.update({
//         where: {
//             id: id,
//           },
//           data: {
//             title:payload.title,
//             shortNote:payload.shortNote,
//             description:payload.description,
//             icon:payload.icon,
//             order:parseInt(payload.order),
//             isActive:payload.isActive,
//             featuredImagePath: payload.featuredImage,
//             updatedAt: new Date()
//         }
//     })
// } 
// export async function deleteServicesById(id: string){
//     return db.services.update({
//         where: {
//             id: id,
//           },
//           data: {
//             deletedAt: new Date(),
//         }
//     })
// }
