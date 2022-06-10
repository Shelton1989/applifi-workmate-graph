"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateNestedManyWithoutBrandInput_1 = require("../inputs/BrandProductCreateNestedManyWithoutBrandInput");
const STATUS_1 = require("../../enums/STATUS");
let BrandCreateInput = class BrandCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateNestedManyWithoutBrandInput_1.BrandProductCreateNestedManyWithoutBrandInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateNestedManyWithoutBrandInput_1.BrandProductCreateNestedManyWithoutBrandInput)
], BrandCreateInput.prototype, "BrandProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandCreateInput.prototype, "updatedAt", void 0);
BrandCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandCreateInput", {
        isAbstract: true
    })
], BrandCreateInput);
exports.BrandCreateInput = BrandCreateInput;
