"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FeaturesCreateWithoutExperienceInput = class FeaturesCreateWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateWithoutExperienceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateWithoutExperienceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesCreateWithoutExperienceInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateWithoutExperienceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesCreateWithoutExperienceInput.prototype, "updatedAt", void 0);
FeaturesCreateWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateWithoutExperienceInput", {
        isAbstract: true
    })
], FeaturesCreateWithoutExperienceInput);
exports.FeaturesCreateWithoutExperienceInput = FeaturesCreateWithoutExperienceInput;
