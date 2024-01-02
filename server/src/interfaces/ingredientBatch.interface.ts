export interface IIngredientBatch {
    id: number;
    ingredientName: string;
    unitOfStock: string;
    currentStockQuantity: number;
    purchaseQuantity: number;
    unitOfPrice: string;
    purchasePrice: number;
    costPerUnit: number;
    expirationDate: Date; 
    supplierId: number;
    ingredientId: number;
    orderId: number;
    restaurantId: number;
}
