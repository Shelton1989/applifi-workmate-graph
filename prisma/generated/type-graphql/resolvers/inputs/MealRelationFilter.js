"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealWhereInput_1 = require("../inputs/MealWhereInput");
let MealRelationFilter = class MealRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], MealRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], MealRelationFilter.prototype, "isNot", void 0);
MealRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealRelationFilter", {
        isAbstract: true
    })
], MealRelationFilter);
exports.MealRelationFilter = MealRelationFilter;
