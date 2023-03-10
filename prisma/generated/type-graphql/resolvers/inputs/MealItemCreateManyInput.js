"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreatemealIdsInput_1 = require("../inputs/MealItemCreatemealIdsInput");
let MealItemCreateManyInput = class MealItemCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput)
], MealItemCreateManyInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateManyInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateManyInput.prototype, "updatedAt", void 0);
MealItemCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateManyInput", {
        isAbstract: true
    })
], MealItemCreateManyInput);
exports.MealItemCreateManyInput = MealItemCreateManyInput;
