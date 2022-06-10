"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeUpdateWithoutProductsInput_1 = require("../inputs/SizeUpdateWithoutProductsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeUpdateWithWhereUniqueWithoutProductsInput = class SizeUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], SizeUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateWithoutProductsInput_1.SizeUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateWithoutProductsInput_1.SizeUpdateWithoutProductsInput)
], SizeUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
SizeUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], SizeUpdateWithWhereUniqueWithoutProductsInput);
exports.SizeUpdateWithWhereUniqueWithoutProductsInput = SizeUpdateWithWhereUniqueWithoutProductsInput;
