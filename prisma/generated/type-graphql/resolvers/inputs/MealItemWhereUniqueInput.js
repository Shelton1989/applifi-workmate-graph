"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealItemWhereUniqueInput = class MealItemWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemWhereUniqueInput.prototype, "id", void 0);
MealItemWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemWhereUniqueInput", {
        isAbstract: true
    })
], MealItemWhereUniqueInput);
exports.MealItemWhereUniqueInput = MealItemWhereUniqueInput;
