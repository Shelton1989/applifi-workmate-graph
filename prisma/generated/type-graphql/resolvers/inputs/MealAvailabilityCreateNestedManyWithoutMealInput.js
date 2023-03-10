"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCreateNestedManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateManyMealInputEnvelope_1 = require("../inputs/MealAvailabilityCreateManyMealInputEnvelope");
const MealAvailabilityCreateOrConnectWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateOrConnectWithoutMealInput");
const MealAvailabilityCreateWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateWithoutMealInput");
const MealAvailabilityWhereUniqueInput_1 = require("../inputs/MealAvailabilityWhereUniqueInput");
let MealAvailabilityCreateNestedManyWithoutMealInput = class MealAvailabilityCreateNestedManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityCreateWithoutMealInput_1.MealAvailabilityCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityCreateNestedManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityCreateOrConnectWithoutMealInput_1.MealAvailabilityCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityCreateNestedManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateManyMealInputEnvelope_1.MealAvailabilityCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateManyMealInputEnvelope_1.MealAvailabilityCreateManyMealInputEnvelope)
], MealAvailabilityCreateNestedManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityCreateNestedManyWithoutMealInput.prototype, "connect", void 0);
MealAvailabilityCreateNestedManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityCreateNestedManyWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityCreateNestedManyWithoutMealInput);
exports.MealAvailabilityCreateNestedManyWithoutMealInput = MealAvailabilityCreateNestedManyWithoutMealInput;
