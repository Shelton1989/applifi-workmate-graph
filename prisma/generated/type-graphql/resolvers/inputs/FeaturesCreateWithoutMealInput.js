"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FeaturesCreateWithoutMealInput = class FeaturesCreateWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateWithoutMealInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateWithoutMealInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateWithoutMealInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateWithoutMealInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateWithoutMealInput.prototype, "updatedAt", void 0);
FeaturesCreateWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateWithoutMealInput", {
        isAbstract: true
    })
], FeaturesCreateWithoutMealInput);
exports.FeaturesCreateWithoutMealInput = FeaturesCreateWithoutMealInput;
