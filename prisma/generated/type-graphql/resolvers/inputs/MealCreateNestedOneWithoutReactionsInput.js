"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutReactionsInput_1 = require("../inputs/MealCreateOrConnectWithoutReactionsInput");
const MealCreateWithoutReactionsInput_1 = require("../inputs/MealCreateWithoutReactionsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedOneWithoutReactionsInput = class MealCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput)
], MealCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutReactionsInput_1.MealCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutReactionsInput_1.MealCreateOrConnectWithoutReactionsInput)
], MealCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
MealCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], MealCreateNestedOneWithoutReactionsInput);
exports.MealCreateNestedOneWithoutReactionsInput = MealCreateNestedOneWithoutReactionsInput;
