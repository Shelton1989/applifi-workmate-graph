"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutReactionsInput_1 = require("../inputs/MealCreateWithoutReactionsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutReactionsInput = class MealCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput)
], MealCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
MealCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutReactionsInput);
exports.MealCreateOrConnectWithoutReactionsInput = MealCreateOrConnectWithoutReactionsInput;
