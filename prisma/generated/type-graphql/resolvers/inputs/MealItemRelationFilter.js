"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemWhereInput_1 = require("../inputs/MealItemWhereInput");
let MealItemRelationFilter = class MealItemRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], MealItemRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], MealItemRelationFilter.prototype, "isNot", void 0);
MealItemRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemRelationFilter", {
        isAbstract: true
    })
], MealItemRelationFilter);
exports.MealItemRelationFilter = MealItemRelationFilter;
