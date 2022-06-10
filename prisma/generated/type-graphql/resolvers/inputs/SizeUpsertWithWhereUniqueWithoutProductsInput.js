"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateWithoutProductsInput_1 = require("../inputs/SizeCreateWithoutProductsInput");
const SizeUpdateWithoutProductsInput_1 = require("../inputs/SizeUpdateWithoutProductsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeUpsertWithWhereUniqueWithoutProductsInput = class SizeUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], SizeUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateWithoutProductsInput_1.SizeUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateWithoutProductsInput_1.SizeUpdateWithoutProductsInput)
], SizeUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateWithoutProductsInput_1.SizeCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateWithoutProductsInput_1.SizeCreateWithoutProductsInput)
], SizeUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
SizeUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], SizeUpsertWithWhereUniqueWithoutProductsInput);
exports.SizeUpsertWithWhereUniqueWithoutProductsInput = SizeUpsertWithWhereUniqueWithoutProductsInput;
