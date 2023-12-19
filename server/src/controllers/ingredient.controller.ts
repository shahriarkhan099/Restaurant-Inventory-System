import { Request, Response } from "express";
import { findAllIngredientOfRestaurant, addIngredientToRestaurant, findIngredientBySearchTerm } from "../models/ingredient/ingredient.query";


export async function getAllIngredientOfRestaurant (req: Request, res: Response) {
  try {
    let id = req.params.id;
    const restaurantId = Number(id);
    if (id && restaurantId) {
      const ingredient = await findAllIngredientOfRestaurant(restaurantId);
      res.json({ data: ingredient });
    } else res.status(400).json({ message: "Invalid restaurant ID." });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function postIngredientToRestaurant (req: Request, res: Response) {
  try {
    let id = req.params.id;
    const restaurantId = Number(id);
    if (id && restaurantId) {
      const { name, unit, stockQuantity, purchasePrice, costPerUnit, caloriesPerUnit, expirationDate, reorderPoint, description, imageUrl, idealStoringTemperature } = req.body;
      if (typeof name === 'string' && typeof purchasePrice === 'number') {
        const ingredient = await addIngredientToRestaurant(restaurantId, {name, unit, stockQuantity, purchasePrice, costPerUnit, caloriesPerUnit, expirationDate, reorderPoint, description, imageUrl, idealStoringTemperature});
        res.status(201).json(ingredient);
      } else res.status(400).json({ message: "Invalid ingredient information." });
    } else res.status(400).json({ message: "Invalid restaurant ID." });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function searchIngredient (req: Request, res: Response) {
  try {
    const search = req.query.q;
    const searchTerm = search?.toString();

    if (searchTerm) {
      const ingredient = await findIngredientBySearchTerm(searchTerm);
      res.json({ data: ingredient });
    } else res.json({ data: [] });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}