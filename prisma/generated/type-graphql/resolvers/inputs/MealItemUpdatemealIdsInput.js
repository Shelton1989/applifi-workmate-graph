"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdatemealIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealItemUpdatemealIdsInput = class MealItemUpdatemealIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdatemealIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdatemealIdsInput.prototype, "push", void 0);
MealItemUpdatemealIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdatemealIdsInput", {
        isAbstract: true
    })
], MealItemUpdatemealIdsInput);
exports.MealItemUpdatemealIdsInput = MealItemUpdatemealIdsInput;
