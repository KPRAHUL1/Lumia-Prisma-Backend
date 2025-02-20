// import { db } from "../../../shared/lib/db"


//  export async function addServiceFeature(payload : any){
//     return await db.serviceFeatures.create({
//         data: {
//             title:payload.title,
//             description:payload.description,
//             imagePath:payload.imagePath,
//             icon:payload.icon,
//             isFeatured:payload.isFeatured,
//             order:payload.order,
//             serviceId:payload.serviceId,
//             isActive:payload.isActive,
//         }
//     })
// }

// export async function getAllServiceFeature(serviceId:string){
//     console.log(serviceId,'server')
//    return await db.serviceFeatures.findMany({
//     where:{
//         serviceId:serviceId,
//         deletedAt:null
//     }
//    })  
// }
// export async function getServiceFeatureById(id: string) {
  
//     return db.serviceFeatures.findFirst({
//       where: {
//         id: id,
//         deletedAt:null
//         },
//     });
//   }
// export async function updateServiceFeature(id : string, payload : any){
//     return db.serviceFeatures.update({
//         where: {
//             id: id,
//           },
//           data: {
//             title:payload.title,
//             description:payload.description,
//             imagePath:payload.imagePath,
//             icon:payload.icon,
//             isFeatured:payload.isFeatured,
//             order:payload.order,
//             isActive:payload.isActive,
//             serviceId:payload.serviceId,
//             updatedAt: new Date()
//         }
//     })
// } 
// export async function deleteServiceFeatureById(id: string){
//     return db.serviceFeatures.delete({
//         where: {
//             id: id,
//           }
//     })
// }
