"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateitemIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealUpdateitemIdsInput = class MealUpdateitemIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateitemIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateitemIdsInput.prototype, "push", void 0);
MealUpdateitemIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateitemIdsInput", {
        isAbstract: true
    })
], MealUpdateitemIdsInput);
exports.MealUpdateitemIdsInput = MealUpdateitemIdsInput;
