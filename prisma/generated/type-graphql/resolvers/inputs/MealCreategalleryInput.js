"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreategalleryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealCreategalleryInput = class MealCreategalleryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreategalleryInput.prototype, "set", void 0);
MealCreategalleryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreategalleryInput", {
        isAbstract: true
    })
], MealCreategalleryInput);
exports.MealCreategalleryInput = MealCreategalleryInput;
