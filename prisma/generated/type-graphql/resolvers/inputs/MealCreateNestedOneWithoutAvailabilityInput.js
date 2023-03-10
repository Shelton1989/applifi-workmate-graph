"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedOneWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutAvailabilityInput_1 = require("../inputs/MealCreateOrConnectWithoutAvailabilityInput");
const MealCreateWithoutAvailabilityInput_1 = require("../inputs/MealCreateWithoutAvailabilityInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedOneWithoutAvailabilityInput = class MealCreateNestedOneWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput)
], MealCreateNestedOneWithoutAvailabilityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutAvailabilityInput_1.MealCreateOrConnectWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutAvailabilityInput_1.MealCreateOrConnectWithoutAvailabilityInput)
], MealCreateNestedOneWithoutAvailabilityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateNestedOneWithoutAvailabilityInput.prototype, "connect", void 0);
MealCreateNestedOneWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedOneWithoutAvailabilityInput", {
        isAbstract: true
    })
], MealCreateNestedOneWithoutAvailabilityInput);
exports.MealCreateNestedOneWithoutAvailabilityInput = MealCreateNestedOneWithoutAvailabilityInput;
