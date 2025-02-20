// import { db } from "../../../shared/lib/db"


//  export async function addServiceHighlights(payload : any){
//     return await db.serviceHighlights.create({
//         data: {
//             name: payload.name,
//             icon: payload.icon,
//             description: payload.description,
//             imagePath: payload.imagePath,
//             order:payload.order,
//             serviceId:payload.serviceId,
//             isActive:payload.isActive,
//         }
//     })
// }
// export async function getAllServiceHighlights(serviceId:string){
//    return await db.serviceHighlights.findMany({
//     where:{
//         serviceId:serviceId,
//         deletedAt:null
//     }
//    })  
// }
// export async function getServiceHighlightsById(id: string) {
  
//     return db.serviceHighlights.findFirst({
//       where: {
//         id: id,
//         deletedAt:null
//         },
//     });
//   }
// export async function updateServiceHighlights(id : string, payload : any){
//     return db.serviceHighlights.update({
//         where: {
//             id: id,
//           },
//           data: {
//             name: payload.name,
//             icon: payload.icon,
//             description: payload.description,
//             imagePath: payload.imagePath,
//             order:payload.order,
//             isActive:payload.isActive,
//             serviceId:payload.serviceId,
//             updatedAt: new Date()
//         }
//     })
// } 
// export async function deleteServiceHighlightsById(id: string){
//     return db.serviceHighlights.delete({
//         where: {
//             id: id,
//           },
//     })
// }
