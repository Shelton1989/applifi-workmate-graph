"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionWhereInput_1 = require("../inputs/MealItemOptionWhereInput");
let MealItemOptionRelationFilter = class MealItemOptionRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], MealItemOptionRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], MealItemOptionRelationFilter.prototype, "isNot", void 0);
MealItemOptionRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionRelationFilter", {
        isAbstract: true
    })
], MealItemOptionRelationFilter);
exports.MealItemOptionRelationFilter = MealItemOptionRelationFilter;
