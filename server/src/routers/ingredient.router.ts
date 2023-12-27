import { Router } from 'express';
import { getAllIngredientOfRestaurant, postIngredientToRestaurant, searchIngredient, 
    updateIngredient, deleteIngredient, getIngredientWithCategory, getIngredientsByCategoryName, insertIngredientToCategory } from '../controllers/ingredient.controller';
const router = Router();

router.get('/restaurant/:restaurantId', getAllIngredientOfRestaurant);
router.post('/restaurant/:restaurantId', postIngredientToRestaurant);
router.put('/restaurant/:ingredientId', updateIngredient);
router.delete('/restaurant/:ingredientId', deleteIngredient);
router.get('/restaurant/:restaurantId/ingredients/search', searchIngredient);
router.get('/restaurant/:restaurantId/ingredients/categories', getIngredientWithCategory);
router.get('/restaurant/:restaurantId/ingredients/categories/:categoryName', getIngredientsByCategoryName);
router.post('/restaurant/:restaurantId/ingredients/categories/:categoryId', insertIngredientToCategory);

export default router;