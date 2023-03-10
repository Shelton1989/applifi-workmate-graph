"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityWhereUniqueInput_1 = require("../../../inputs/MealAvailabilityWhereUniqueInput");
let FindUniqueMealAvailabilityArgs = class FindUniqueMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], FindUniqueMealAvailabilityArgs.prototype, "where", void 0);
FindUniqueMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMealAvailabilityArgs);
exports.FindUniqueMealAvailabilityArgs = FindUniqueMealAvailabilityArgs;
