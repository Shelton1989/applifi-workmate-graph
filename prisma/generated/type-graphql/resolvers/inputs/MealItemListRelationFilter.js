"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemWhereInput_1 = require("../inputs/MealItemWhereInput");
let MealItemListRelationFilter = class MealItemListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], MealItemListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], MealItemListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], MealItemListRelationFilter.prototype, "none", void 0);
MealItemListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemListRelationFilter", {
        isAbstract: true
    })
], MealItemListRelationFilter);
exports.MealItemListRelationFilter = MealItemListRelationFilter;
