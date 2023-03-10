"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutAvailabilityInput_1 = require("../inputs/MealCreateWithoutAvailabilityInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutAvailabilityInput = class MealCreateOrConnectWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutAvailabilityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput)
], MealCreateOrConnectWithoutAvailabilityInput.prototype, "create", void 0);
MealCreateOrConnectWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutAvailabilityInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutAvailabilityInput);
exports.MealCreateOrConnectWithoutAvailabilityInput = MealCreateOrConnectWithoutAvailabilityInput;
