"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutOrdersInput_1 = require("../inputs/MealCreateWithoutOrdersInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutOrdersInput = class MealCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput)
], MealCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
MealCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutOrdersInput);
exports.MealCreateOrConnectWithoutOrdersInput = MealCreateOrConnectWithoutOrdersInput;
