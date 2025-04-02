"use strict";
// import { addServiceHighlights, getAllServiceHighlights, updateServiceHighlights, deleteServiceHighlightsById, getServiceHighlightsById } from "./serviceHighlights.service";
// const express = require('express');
// const router = express.Router();
// router.post('/', async (req:any, res: any) => {
//     const payload= req.body;
//     const result = await addServiceHighlights(payload);
//     res.status(201).json(result)
// })
// router.get('/',async (req:any,res:any)=>{
//     const serviceId = req.params.serviceId;
//     const response= await getAllServiceHighlights(serviceId);
//     res.status(200).json(response)
// })
// router.get("/:id", async (req: any, res: any) => {
//     const id = req.params.id;
//     const response = await getServiceHighlightsById(id);
//     res.status(200).json(response);
//   });
// router.put('/:id',async(req:any, res: any) => {
//     const id =req.params.id
//     const payload= req.body;
//     const result = await updateServiceHighlights(id,payload);
//     res.status(200).json(result)
// })
// router.delete('/:id', async(req:any, res:any)=>{
//     const id =req.params.id
//     await deleteServiceHighlightsById(id)
//     res.status(200).json("Deleted successfully")
// })
// module.exports = router;
