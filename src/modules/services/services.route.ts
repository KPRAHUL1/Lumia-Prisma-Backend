// import {
//   addServices,
//   getAllServices,
//   updateServices,
//   deleteServicesById,
//   getServiceById,
// } from "../services/services.service";

// const express = require("express");
// const router = express.Router();

// router.post("/", async (req: any, res: any) => {
//   const payload = req.body;
//   const result = await addServices(payload);
//   res.status(201).json(result);
// });

// router.get("/", async (req: any, res: any) => {
//   const response = await getAllServices();
//   res.status(200).json(response);
// });
// router.get("/:id", async (req: any, res: any) => {
//   const id = req.params.id;
//   const response = await getServiceById(id);
//   res.status(200).json(response);
// });

// router.put("/:id", async (req: any, res: any) => {
//   const id = req.params.id;
//   const payload = req.body;
//   const result = await updateServices(id, payload);
//   res.status(200).json(result);
// });

// router.delete("/:id", async (req: any, res: any) => {
//   const id = req.params.id;
//   await deleteServicesById(id);
//   res.status(200).json("Deleted successfully");
// });
// module.exports = router;
