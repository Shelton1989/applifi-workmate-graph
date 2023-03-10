"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionWhereInput_1 = require("../inputs/MealItemOptionWhereInput");
let MealItemOptionListRelationFilter = class MealItemOptionListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], MealItemOptionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], MealItemOptionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], MealItemOptionListRelationFilter.prototype, "none", void 0);
MealItemOptionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionListRelationFilter", {
        isAbstract: true
    })
], MealItemOptionListRelationFilter);
exports.MealItemOptionListRelationFilter = MealItemOptionListRelationFilter;
