"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdategalleryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealUpdategalleryInput = class MealUpdategalleryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdategalleryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdategalleryInput.prototype, "push", void 0);
MealUpdategalleryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdategalleryInput", {
        isAbstract: true
    })
], MealUpdategalleryInput);
exports.MealUpdategalleryInput = MealUpdategalleryInput;
