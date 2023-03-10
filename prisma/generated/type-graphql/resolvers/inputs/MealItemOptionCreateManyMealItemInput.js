"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateManyMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealItemOptionCreateManyMealItemInput = class MealItemOptionCreateManyMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateManyMealItemInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateManyMealItemInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateManyMealItemInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateManyMealItemInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateManyMealItemInput.prototype, "updatedAt", void 0);
MealItemOptionCreateManyMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateManyMealItemInput", {
        isAbstract: true
    })
], MealItemOptionCreateManyMealItemInput);
exports.MealItemOptionCreateManyMealItemInput = MealItemOptionCreateManyMealItemInput;
