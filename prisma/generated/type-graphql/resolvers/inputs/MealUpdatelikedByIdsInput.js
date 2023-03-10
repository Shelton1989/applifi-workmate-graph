"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdatelikedByIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealUpdatelikedByIdsInput = class MealUpdatelikedByIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatelikedByIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatelikedByIdsInput.prototype, "push", void 0);
MealUpdatelikedByIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdatelikedByIdsInput", {
        isAbstract: true
    })
], MealUpdatelikedByIdsInput);
exports.MealUpdatelikedByIdsInput = MealUpdatelikedByIdsInput;
