"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateManyMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FeaturesCreateManyMealInput = class FeaturesCreateManyMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateManyMealInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateManyMealInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateManyMealInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateManyMealInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateManyMealInput.prototype, "updatedAt", void 0);
FeaturesCreateManyMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateManyMealInput", {
        isAbstract: true
    })
], FeaturesCreateManyMealInput);
exports.FeaturesCreateManyMealInput = FeaturesCreateManyMealInput;
