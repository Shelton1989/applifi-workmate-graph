"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateWithoutProductsInput_1 = require("../inputs/SizeCreateWithoutProductsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeCreateOrConnectWithoutProductsInput = class SizeCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], SizeCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateWithoutProductsInput_1.SizeCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateWithoutProductsInput_1.SizeCreateWithoutProductsInput)
], SizeCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
SizeCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], SizeCreateOrConnectWithoutProductsInput);
exports.SizeCreateOrConnectWithoutProductsInput = SizeCreateOrConnectWithoutProductsInput;
