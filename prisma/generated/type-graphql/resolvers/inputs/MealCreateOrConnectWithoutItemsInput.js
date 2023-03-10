"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutItemsInput_1 = require("../inputs/MealCreateWithoutItemsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutItemsInput = class MealCreateOrConnectWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutItemsInput_1.MealCreateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutItemsInput_1.MealCreateWithoutItemsInput)
], MealCreateOrConnectWithoutItemsInput.prototype, "create", void 0);
MealCreateOrConnectWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutItemsInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutItemsInput);
exports.MealCreateOrConnectWithoutItemsInput = MealCreateOrConnectWithoutItemsInput;
