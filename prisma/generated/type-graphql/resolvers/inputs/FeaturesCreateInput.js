"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedOneWithoutFeaturesInput_1 = require("../inputs/MealCreateNestedOneWithoutFeaturesInput");
let FeaturesCreateInput = class FeaturesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedOneWithoutFeaturesInput_1.MealCreateNestedOneWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateNestedOneWithoutFeaturesInput_1.MealCreateNestedOneWithoutFeaturesInput)
], FeaturesCreateInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateInput.prototype, "updatedAt", void 0);
FeaturesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateInput", {
        isAbstract: true
    })
], FeaturesCreateInput);
exports.FeaturesCreateInput = FeaturesCreateInput;
