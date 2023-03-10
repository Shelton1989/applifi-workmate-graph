"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutFeaturesInput_1 = require("../inputs/MealCreateWithoutFeaturesInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutFeaturesInput = class MealCreateOrConnectWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutFeaturesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput)
], MealCreateOrConnectWithoutFeaturesInput.prototype, "create", void 0);
MealCreateOrConnectWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutFeaturesInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutFeaturesInput);
exports.MealCreateOrConnectWithoutFeaturesInput = MealCreateOrConnectWithoutFeaturesInput;
