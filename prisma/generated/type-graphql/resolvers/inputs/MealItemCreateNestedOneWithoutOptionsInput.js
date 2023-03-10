"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateNestedOneWithoutOptionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateOrConnectWithoutOptionsInput_1 = require("../inputs/MealItemCreateOrConnectWithoutOptionsInput");
const MealItemCreateWithoutOptionsInput_1 = require("../inputs/MealItemCreateWithoutOptionsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemCreateNestedOneWithoutOptionsInput = class MealItemCreateNestedOneWithoutOptionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput)
], MealItemCreateNestedOneWithoutOptionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateOrConnectWithoutOptionsInput_1.MealItemCreateOrConnectWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateOrConnectWithoutOptionsInput_1.MealItemCreateOrConnectWithoutOptionsInput)
], MealItemCreateNestedOneWithoutOptionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemCreateNestedOneWithoutOptionsInput.prototype, "connect", void 0);
MealItemCreateNestedOneWithoutOptionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateNestedOneWithoutOptionsInput", {
        isAbstract: true
    })
], MealItemCreateNestedOneWithoutOptionsInput);
exports.MealItemCreateNestedOneWithoutOptionsInput = MealItemCreateNestedOneWithoutOptionsInput;
