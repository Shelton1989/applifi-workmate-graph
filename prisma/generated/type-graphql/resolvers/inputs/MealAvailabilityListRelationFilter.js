"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityWhereInput_1 = require("../inputs/MealAvailabilityWhereInput");
let MealAvailabilityListRelationFilter = class MealAvailabilityListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], MealAvailabilityListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], MealAvailabilityListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], MealAvailabilityListRelationFilter.prototype, "none", void 0);
MealAvailabilityListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityListRelationFilter", {
        isAbstract: true
    })
], MealAvailabilityListRelationFilter);
exports.MealAvailabilityListRelationFilter = MealAvailabilityListRelationFilter;
