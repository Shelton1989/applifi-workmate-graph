"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealWhereInput_1 = require("../inputs/MealWhereInput");
let MealListRelationFilter = class MealListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], MealListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], MealListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], MealListRelationFilter.prototype, "none", void 0);
MealListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealListRelationFilter", {
        isAbstract: true
    })
], MealListRelationFilter);
exports.MealListRelationFilter = MealListRelationFilter;
