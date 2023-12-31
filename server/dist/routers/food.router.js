"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const food_controller_1 = require("../controllers/food.controller");
const router = (0, express_1.Router)();
router.get('/all', food_controller_1.getAllFoodWithRestaurantInfo);
router.get('/restaurant/:id', food_controller_1.getAllFoodOfRestaurant);
router.post('/restaurant/:id', food_controller_1.postFoodToRestaurant);
router.get('/search', food_controller_1.searchFood);
exports.default = router;
