"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealAvailabilityWhereUniqueInput = class MealAvailabilityWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityWhereUniqueInput.prototype, "id", void 0);
MealAvailabilityWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityWhereUniqueInput", {
        isAbstract: true
    })
], MealAvailabilityWhereUniqueInput);
exports.MealAvailabilityWhereUniqueInput = MealAvailabilityWhereUniqueInput;