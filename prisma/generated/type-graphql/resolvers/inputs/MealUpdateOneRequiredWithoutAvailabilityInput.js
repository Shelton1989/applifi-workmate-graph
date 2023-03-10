"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateOneRequiredWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutAvailabilityInput_1 = require("../inputs/MealCreateOrConnectWithoutAvailabilityInput");
const MealCreateWithoutAvailabilityInput_1 = require("../inputs/MealCreateWithoutAvailabilityInput");
const MealUpdateWithoutAvailabilityInput_1 = require("../inputs/MealUpdateWithoutAvailabilityInput");
const MealUpsertWithoutAvailabilityInput_1 = require("../inputs/MealUpsertWithoutAvailabilityInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateOneRequiredWithoutAvailabilityInput = class MealUpdateOneRequiredWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput)
], MealUpdateOneRequiredWithoutAvailabilityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutAvailabilityInput_1.MealCreateOrConnectWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutAvailabilityInput_1.MealCreateOrConnectWithoutAvailabilityInput)
], MealUpdateOneRequiredWithoutAvailabilityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpsertWithoutAvailabilityInput_1.MealUpsertWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpsertWithoutAvailabilityInput_1.MealUpsertWithoutAvailabilityInput)
], MealUpdateOneRequiredWithoutAvailabilityInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateOneRequiredWithoutAvailabilityInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutAvailabilityInput_1.MealUpdateWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutAvailabilityInput_1.MealUpdateWithoutAvailabilityInput)
], MealUpdateOneRequiredWithoutAvailabilityInput.prototype, "update", void 0);
MealUpdateOneRequiredWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateOneRequiredWithoutAvailabilityInput", {
        isAbstract: true
    })
], MealUpdateOneRequiredWithoutAvailabilityInput);
exports.MealUpdateOneRequiredWithoutAvailabilityInput = MealUpdateOneRequiredWithoutAvailabilityInput;
