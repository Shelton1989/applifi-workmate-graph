"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutOrdersInput_1 = require("../inputs/MealCreateOrConnectWithoutOrdersInput");
const MealCreateWithoutOrdersInput_1 = require("../inputs/MealCreateWithoutOrdersInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedOneWithoutOrdersInput = class MealCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput)
], MealCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutOrdersInput_1.MealCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutOrdersInput_1.MealCreateOrConnectWithoutOrdersInput)
], MealCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
MealCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], MealCreateNestedOneWithoutOrdersInput);
exports.MealCreateNestedOneWithoutOrdersInput = MealCreateNestedOneWithoutOrdersInput;
