"use strict";
// import { addServiceFeature, getAllServiceFeature, updateServiceFeature, deleteServiceFeatureById, getServiceFeatureById } from "./serviceFeature.service";
// const express = require('express');
// const router = express.Router();
// router.post('/', async (req:any, res: any) => {
//     const payload= req.body;
//     const result = await addServiceFeature(payload);
//     res.status(201).json(result)
// })
// router.get('/',async (req:any,res:any)=>{
//     const serviceId = req.params.serviceId;
//     console.log(req.params.id)
//     const response= await getAllServiceFeature(serviceId);
//     res.status(200).json(response)
// })
// router.get("/:id", async (req: any, res: any) => {
//     const id = req.params.id || req.query.id;
//     const response = await getServiceFeatureById(id);
//     res.status(200).json(response);
//   });
// router.put('/:id',async(req:any, res: any) => {
//     const id =req.params.id
//     const payload= req.body;
//     const result = await updateServiceFeature(id,payload);
//     res.status(200).json(result)
// })
// router.delete('/:id', async(req:any, res:any)=>{
//     const id =req.params.id
//     console.log(req.params)
//     await deleteServiceFeatureById(id)
//     res.status(200).json("Deleted successfully")
// })
// module.exports = router;
