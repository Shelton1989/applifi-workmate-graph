"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealWhereUniqueInput = class MealWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealWhereUniqueInput.prototype, "id", void 0);
MealWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealWhereUniqueInput", {
        isAbstract: true
    })
], MealWhereUniqueInput);
exports.MealWhereUniqueInput = MealWhereUniqueInput;
