"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateOrConnectWithoutOptionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateWithoutOptionsInput_1 = require("../inputs/MealItemCreateWithoutOptionsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemCreateOrConnectWithoutOptionsInput = class MealItemCreateOrConnectWithoutOptionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemCreateOrConnectWithoutOptionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput)
], MealItemCreateOrConnectWithoutOptionsInput.prototype, "create", void 0);
MealItemCreateOrConnectWithoutOptionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateOrConnectWithoutOptionsInput", {
        isAbstract: true
    })
], MealItemCreateOrConnectWithoutOptionsInput);
exports.MealItemCreateOrConnectWithoutOptionsInput = MealItemCreateOrConnectWithoutOptionsInput;
