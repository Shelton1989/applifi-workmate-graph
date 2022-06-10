"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateproductIdsInput_1 = require("../inputs/SizeCreateproductIdsInput");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let SizeCreateManyInput = class SizeCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateManyInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeCreateManyInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateproductIdsInput_1.SizeCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateproductIdsInput_1.SizeCreateproductIdsInput)
], SizeCreateManyInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeCreateManyInput.prototype, "updatedAt", void 0);
SizeCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateManyInput", {
        isAbstract: true
    })
], SizeCreateManyInput);
exports.SizeCreateManyInput = SizeCreateManyInput;
