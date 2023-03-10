"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedOneWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutFeaturesInput_1 = require("../inputs/MealCreateOrConnectWithoutFeaturesInput");
const MealCreateWithoutFeaturesInput_1 = require("../inputs/MealCreateWithoutFeaturesInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedOneWithoutFeaturesInput = class MealCreateNestedOneWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput)
], MealCreateNestedOneWithoutFeaturesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutFeaturesInput_1.MealCreateOrConnectWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutFeaturesInput_1.MealCreateOrConnectWithoutFeaturesInput)
], MealCreateNestedOneWithoutFeaturesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateNestedOneWithoutFeaturesInput.prototype, "connect", void 0);
MealCreateNestedOneWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedOneWithoutFeaturesInput", {
        isAbstract: true
    })
], MealCreateNestedOneWithoutFeaturesInput);
exports.MealCreateNestedOneWithoutFeaturesInput = MealCreateNestedOneWithoutFeaturesInput;
